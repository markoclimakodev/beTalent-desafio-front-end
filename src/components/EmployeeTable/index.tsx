import { Employee } from '../../types/Employee';
import './employeeTable.css';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';

type EmployeeTableProps = {
    filteredEmployees: Employee[];
}

export function EmployeeTable({ filteredEmployees }: EmployeeTableProps) {
    return (
        <table className='employeeTable'>
            <TableHeader />
            <TableBody employees={filteredEmployees} />
        </table>
    );
}