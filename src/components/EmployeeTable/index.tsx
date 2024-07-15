import './employeeTable.css';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';

export function EmployeeTable() {
    return (
        <table className='employeeTable'>
            <TableHeader />
            <TableBody/>
        </table>
    );
}