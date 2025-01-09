import Dashboard from "./pages/dashboard";
import { TasksProvider } from "./context/task";
import { ThemeProvider } from "./context/theme";
import "./styles/output.css";

function App() {
  return (
    <ThemeProvider>
      <TasksProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Dashboard />
        </div>
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
