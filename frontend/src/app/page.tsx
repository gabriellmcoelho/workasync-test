"use client";
import CreateTaskForm from "@/components/CreateTaskForm";
import { TaskCard } from "@/components/TaskCard";
import Task from "@/types/Task";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function addTask(task: Task) {
    setTasks([...tasks, task]);
  }

  async function fetchTasks() {
    try {
      const fetchedTasks = (await axios.get("http://localhost:8000/tasks"))
        .data;
      setTasks(fetchedTasks);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (isLoading) {
      fetchTasks();
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-8">Task Management</h1>
      <div className="w-full max-w-lg mb-8">
        <CreateTaskForm addTask={addTask} />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </main>
  );
}
