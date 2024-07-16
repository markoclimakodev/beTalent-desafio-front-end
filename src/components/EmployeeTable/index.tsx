import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import './employeeTable.css';

export function EmployeeTable() {
    return (
        <table className='employeeTable'>
            <TableHeader />
            <TableBody/>
        </table>
    );
}