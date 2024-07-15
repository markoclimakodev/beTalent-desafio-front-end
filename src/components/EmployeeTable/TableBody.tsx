import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { TableRow } from './TableRow';

export function TableBody() {
  const { employeesList, loading, error } = useContext(AppContext);

  if (loading) {
    return (
      <section className="loading">
          <span >Carrgando...</span>
      </section>
    );
  }

  if (error) {
    return (
      <tbody className="fetchError">
        <tr>
          <td>Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais tarde.</td>
        </tr>
      </tbody>
    );
  }

  if (employeesList.length === 0) {
    return (
      <section className="noResultsFound">
        <span>Nenhum resultado encontrado.</span>
      </section>
    );
  }

  return (
    <tbody className="tableBody">
      {employeesList.map((employee) => (
        <TableRow key={employee.id} employee={employee} />
      ))}
    </tbody>
  );
}
