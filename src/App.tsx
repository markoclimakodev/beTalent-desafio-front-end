import { AppProvider } from './context/AppProvider';
import { Header } from './components/Header';
import { EmployeeTable } from './components/EmployeeTable';
import Search from './components/Search';
import './App.css';

function App() {

  return (
    <AppProvider>
      <div className='app-container'>
        <Header />
        <Search />
        <section className='table-section'>
          <EmployeeTable />
        </section>
      </div>
    </AppProvider>
  )
}

export default App
