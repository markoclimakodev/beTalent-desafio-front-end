import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { TableRow } from './TableRow';
import { Loading } from './Loading';
import { Error } from './Error';
import { NoResult } from './NoResult';

export function TableBody() {
  const { employeesList, loading, error } = useContext(AppContext);

  if (loading) return <Loading/>

  if (error)  return <Error/>

  if (employeesList.length === 0) return <NoResult/>

  return (
    <tbody className="tableBody">
      {employeesList.map((employee) => (
        <TableRow key={employee.id} employee={employee} />
      ))}
    </tbody>
  );
}
