import "./styles/output.css";
import Dashboard from "./pages/dashboard";
import { TasksProvider } from "./context/task";

function App() {
  return (
    <TasksProvider>
      <Dashboard />;
    </TasksProvider>
  );
}

export default App;
