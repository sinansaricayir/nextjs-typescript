import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";

export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className="max-w-4xl mx-auto my-5 gap-4">
      <div className="flex flex-col text-center ">
        <h1 className="text-2xl font-bold mb-4">
          ToDo With TypeScript & Next.js
        </h1>
        <AddTask />
      </div>
      <ToDoList tasks={tasks} />
    </main>
  );
}
