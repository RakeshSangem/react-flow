import type { Node, NodeTypes } from "reactflow";
import { Toolbar } from "../components/nodes/Toolbar";
import ResizeableNode from "../components/nodes/ResizeableNode";
import AnnotationNode from "../components/nodes/AnnotationNode";
import CircleNode from "../components/nodes/CircleNode";
import TextNode from "../components/nodes/TextNode";

export const nodes: Node[] = [
  {
    id: "annotation-1",
    type: "annotation",
    draggable: false,
    selectable: false,
    data: {
      level: 1,
      label:
        "Built-in node and edge types. Draggable, deletable and connectable!",
      arrowStyle: {
        right: 0,
        bottom: 0,
        transform: "translate(-30px,10px) rotate(-80deg)",
      },
    },
    position: { x: -80, y: -30 },
  },
  {
    id: "1-1",
    type: "input",
    data: {
      label: "Input Node",
    },
    position: { x: 150, y: 0 },
  },
  {
    id: "1-2",
    type: "default",
    data: {
      label: "Default Node",
    },
    position: { x: 0, y: 100 },
  },
  {
    id: "1-3",
    type: "output",
    data: {
      label: "Output Node",
    },
    position: { x: 300, y: 100 },
  },
  {
    id: "annotation-2",
    type: "annotation",
    draggable: false,
    selectable: false,
    data: {
      level: 2,
      label: "Sub flows, toolbars and resizable nodes!",
      arrowStyle: {
        left: 0,
        bottom: 0,
        transform: "translate(5px, 25px) scale(1, -1) rotate(100deg)",
      },
    },
    position: { x: 220, y: 200 },
  },
  {
    id: "2-1",
    type: "group",
    data: {
      label: "Group Node",
    },
    position: {
      x: -170,
      y: 250,
    },
    style: {
      width: 380,
      height: 180,
      backgroundColor: "rgba(208, 192, 247, 0.2)",
    },
  },
  {
    id: "2-2",
    data: {
      label: "Node with Toolbar",
    },
    type: "tools",
    position: { x: 50, y: 50 },
    style: {
      width: 80,
      height: 80,
      background: "rgb(208, 192, 247)",
    },
    parentId: "2-1",
    extent: "parent",
  },
  {
    id: "2-3",
    type: "resizer",
    data: {
      label: "resizable node",
    },
    position: { x: 250, y: 50 },
    style: {
      width: 80,
      height: 80,
      background: "rgb(208, 192, 247)",
      color: "white",
    },
    parentId: "2-1",
    extent: "parent",
  },
  {
    id: "annotation-3",
    type: "annotation",
    draggable: false,
    selectable: false,
    data: {
      level: 3,
      label:
        "Built-in node and edge types. Draggable, deletable and connectable!",
      arrowStyle: {
        right: 0,
        bottom: 0,
        transform: "translate(-35px, 20px) rotate(-80deg)",
      },
    },
    position: { x: -40, y: 570 },
  },
  {
    id: "3-2",
    type: "textinput",
    position: { x: 150, y: 650 },
    data: {},
  },
  {
    id: "3-1",
    type: "circle",
    position: { x: 350, y: 500 },
    data: {},
  },
];

export const nodeTypes: NodeTypes = {
  annotation: AnnotationNode,
  tools: Toolbar,
  resizer: ResizeableNode,
  circle: CircleNode,
  textinput: TextNode,
};
