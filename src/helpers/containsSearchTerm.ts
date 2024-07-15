import { Employee } from "../types/Employee";
import { cleanPhoneNumber } from "./clearPhoneNumber";

type ContainsSearchTermProps = {
    employee: Employee;
    query: string;
}

export function containsSearchTerm({ employee, query }: ContainsSearchTermProps): boolean {
    const searchTerm = query.toLowerCase().trim();
    const { name, job, phone } = employee;
    const employeeName = name.toLowerCase();
    const employeeJob = job.toLowerCase();
    const cleanedEmployeePhone = cleanPhoneNumber(phone);

    const propertiesToSearch = [employeeName, employeeJob, cleanedEmployeePhone];

    return propertiesToSearch.some(property => property.includes(searchTerm));
}
