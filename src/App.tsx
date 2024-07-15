import './App.css'
import { EmployeeTable } from './components/EmployeeTable'
import { Header } from './components/header'
import {useEmployees} from './hooks/useEmployees';

function App() {
  const {  filteredEmployees, loading, error } = useEmployees();



  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='app-container'>
      <Header />
      <section className='table-section'>
        <EmployeeTable filteredEmployees={filteredEmployees}/>
      </section>
    </div>
  )
}

export default App
