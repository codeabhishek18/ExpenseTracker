import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import { ExpenseProvider } from './contextapi/ExpenseContext';
import { ManageData } from './managedata/ManageData';
import { SnackbarProvider } from 'notistack'

function App() {
  return (
    <div className="App">
      <ExpenseProvider>
          <ManageData>
            <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
              <Dashboard/>
            </SnackbarProvider>
          </ManageData>
      </ExpenseProvider>
    </div>
  );
}

export default App;
