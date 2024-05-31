import Task from "@/types/Task";

export function TaskCard({ task }: { task: Task }) {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">#{task.id}</span>
        <button className="text-red-500 hover:text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm5-1a1 1 0 0 1-1 1h-1v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zM5 7a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <form>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-1">
            Task Name
          </label>
          <input
            value={task.name}
            className="w-full bg-gray-200 border border-gray-300 rounded px-3 py-2 leading-tight focus:outline-none focus:border-blue-500"
            readOnly
          />
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value={task.is_done}
              className="form-checkbox h-5 w-5 text-blue-500"
              readOnly
            />
            <span className="ml-2 text-gray-700">Is Done</span>
          </label>
        </div>
      </form>
    </div>
  );
}
