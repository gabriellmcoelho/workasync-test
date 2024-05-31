"use client";
import Task from "@/types/Task";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
};

export default function CreateTaskForm({
  addTask,
}: {
  addTask: (task: Task) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const createdTask = (
        await axios.post("http://localhost:8000/tasks", data)
      ).data;

      addTask(createdTask);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            htmlFor="task-name"
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >
            Task Name:
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            id="task-name"
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter task name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          />
          {errors.name && <span>Please, enter the task name!</span>}
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            type="submit"
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}
