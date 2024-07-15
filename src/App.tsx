import { Header } from './components/Header'
import Search from './components/Search';
import { EmployeeTable } from './components/EmployeeTable'
import './App.css'
import { AppProvider } from './context/AppProvider';

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
