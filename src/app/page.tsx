import React, { Suspense } from "react";
import Sidebar from "../components/Sidebar";

const EditorCanvas = React.lazy(
  () => import("../components/Editor/EditorCanvas")
);

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex flex-1 overflow-y-hidden">
        <Sidebar />
        <Suspense fallback={<div className="">Loading...</div>}>
          <EditorCanvas />
        </Suspense>
      </section>
    </main>
  );
}
