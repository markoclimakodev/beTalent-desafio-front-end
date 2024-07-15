import { Employee } from '../../types/Employee';
import {TableRow} from './TableRow';

interface UserTableBodyProps {
  employees: Employee[];
}

export function TableBody({ employees }: UserTableBodyProps) {
  return (
    <tbody className="tableBody">
      {employees.map((employee) => (
        <TableRow key={employee.id} employee={employee} />
      ))}
    </tbody>
  );
}
