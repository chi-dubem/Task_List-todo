import TaskTable from "./components/TaskTable"
import "./styles.css"

function App() {

  return (
    <div className="p-4">
      <div className="">
        <div className="w-fit mx-auto">
          <div className="">
            <h1 className="font-bold text-5xl">
              Task List
            </h1>
          </div>
          <div className="flex items-center justify-center my-2">
            <TaskTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
