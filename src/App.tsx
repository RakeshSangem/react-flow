import EditorCanvas from "./components/Editor/EditorCanvas";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex flex-1 overflow-y-hidden">
        <Sidebar />
        <EditorCanvas />
      </section>
    </main>
  );
}
