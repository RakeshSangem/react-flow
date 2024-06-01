import { useCallback } from "react";

import { Handle, Position } from "reactflow";
import React from "react";
import { Input, MultiSelect } from "@mantine/core";

export default function TextUpdaterNode({ data }: { data: { label: string } }) {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);

  return (
    <article className="border border-zinc-200 p-4 rounded-lg bg-white shadow-md">
      <Handle
        className="h-1 w-6 bg-gray-400 rounded-none border-none rounded-t-sm"
        type="target"
        position={Position.Top}
      />
      <div className="">
        <label htmlFor="text">Text</label>
        <Input
          id="text"
          value={data.label}
          onChange={onChange}
          placeholder="Type here..."
          className="w-full"
        />
      </div>
      <MultiSelect
        label="Your favorite libraries"
        placeholder="Pick value"
        data={["React", "Angular", "Vue", "Svelte"]}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        className="h-1 w-6 bg-gray-400 rounded-none border-none rounded-b-sm"
      />
    </article>
  );
}
