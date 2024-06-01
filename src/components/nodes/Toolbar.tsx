import React, { memo, ReactNode, useState } from "react";
import { Handle, Position, NodeToolbar } from "reactflow";

// Define the type for the props
interface NodeData {
  label: string;
}

interface ToolbarProps {
  data: NodeData;
}

const labelStyle: React.CSSProperties = {
  position: "absolute",
  color: "#555",
  bottom: -15,
  fontSize: 8,
};

export const Toolbar = memo(({ data }: ToolbarProps): ReactNode => {
  const [emoji, setEmoji] = useState("🚀");

  return (
    <>
      <NodeToolbar isVisible>
        <button onClick={() => setEmoji("🚀")}>🚀</button>
        <button onClick={() => setEmoji("🔥")}>🔥</button>
        <button onClick={() => setEmoji("✨")}>✨</button>
      </NodeToolbar>
      <div style={{ padding: "10px 20px" }}>
        <div>{emoji}</div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div style={labelStyle}>{data.label}</div>
    </>
  );
});
