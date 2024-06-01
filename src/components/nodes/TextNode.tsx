import React, { memo } from "react";
import { Handle, useStore, Position, useReactFlow, Node } from "reactflow";

const dimensionAttrs = ["width", "height"];

type Dimensions = {
  [key: string]: number;
};

export default memo(function CustomNode({ id }: { id: string }) {
  const { setNodes } = useReactFlow();
  const dimensions: Dimensions | null = useStore((s) => {
    const node = s.nodeInternals.get("2-3");

    if (
      !node ||
      !node.width ||
      !node.height ||
      !s.edges.some((edge) => edge.target === id)
    ) {
      return null;
    }

    return {
      width: node.width,
      height: node.height,
    };
  });

  const updateDimension =
    (attr: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setNodes((nds: Node[]) =>
        nds.map((n: Node) => {
          if (n.id === "2-3") {
            return {
              ...n,
              style: {
                ...n.style,
                [attr]: parseInt(event.target.value),
              },
            };
          }

          return n;
        })
      );
    };

  return (
    <>
      <div className="wrapper gradient">
        <div className="inner">
          {dimensionAttrs.map((attr) => (
            <React.Fragment key={attr}>
              <label>node {attr}</label>
              <input
                type="number"
                value={dimensions ? dimensions[attr] : 0}
                onChange={updateDimension(attr as keyof typeof dimensions)}
                className="nodrag"
                disabled={!dimensions}
              />
            </React.Fragment>
          ))}
          {!dimensions && "no node connected"}
        </div>
      </div>
      <Handle type="target" position={Position.Top} />
    </>
  );
});
