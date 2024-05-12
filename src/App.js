import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import { ExpenseProvider } from './contextapi/ExpenseContext';
import { ManageData } from './managedata/ManageData';

function App() {
  return (
    <div className="App">
      <ExpenseProvider>
          <ManageData>
            <Dashboard/>
          </ManageData>
      </ExpenseProvider>
    </div>
  );
}

export default App;
