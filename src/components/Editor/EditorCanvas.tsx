import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  MiniMap,
  NodeChange,
  EdgeChange,
  addEdge,
  Connection,
  Edge,
  Node,
} from "reactflow";
import "reactflow/dist/style.css";

import { useCallback, useState } from "react";
import { nodeTypes } from "../../nodes";
import { nodes as intialNodes } from "../../nodes/index";

import { edgeTypes, edges as initialEdges } from "../../edges/index";

export default function EditorCanvas() {
  const [nodes, setNodes] = useState(intialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const nodeClassName = (node: Node) => node.type || "";

  return (
    <section className="w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        className="overview"
      >
        <Background color="#aaa" gap={16} />
        <Controls />
        <MiniMap zoomable pannable nodeClassName={nodeClassName} />
      </ReactFlow>
    </section>
  );
}
