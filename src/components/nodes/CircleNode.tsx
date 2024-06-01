import { memo, ReactNode } from "react";
import { Handle, useStore, Position } from "reactflow";

export default memo(function CustomNode({ id }: { id: string }): ReactNode {
  const label = useStore((s) => {
    const node = s.nodeInternals.get(id);

    if (!node) {
      return null;
    }

    return `position x:${node.position.x} y:${node.position.y}`;
  });

  return (
    <>
      <div className="wrapper gradient">
        <div className="inner">{label || "no node connected"}</div>
      </div>
      <Handle type="target" position={Position.Left} />
    </>
  );
});
