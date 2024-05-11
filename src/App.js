import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import { ExpenseProvider } from './contextapi/ExpenseContext';

function App() {
  return (
    <div className="App">
      <ExpenseProvider>
          <Dashboard/>
      </ExpenseProvider>
    </div>
  );
}

export default App;
