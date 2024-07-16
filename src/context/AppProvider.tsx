import { useEffect, useState, ReactNode } from "react";
import { useEmployees } from "../hooks/useEmployees";
import { Employee } from "../types/Employee";
import { containsSearchTerm } from "../helpers/containsSearchTerm";
import { AppContext } from "./AppContext";
import { AppContextType } from "../types/AppContext";

interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    const { employees, loading, error } = useEmployees();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [employeesList, setEmployeesList] = useState<Employee[]>(employees);

    const updateSearchQuery = (query: string): void => {
        setSearchQuery(query)
    }

    useEffect(() => {
        const filterEmployees = (query: string) => {
            let filteredData = employees;

            if (query) {
                filteredData = employees.filter((employee: Employee) => containsSearchTerm({ employee, query }));
            }

            setEmployeesList(filteredData);
        };

        filterEmployees(searchQuery);
    }, [searchQuery, employees]);

    const contextValue: AppContextType = {
        searchQuery,
        updateSearchQuery,
        employeesList,
        loading,
        error
    };

    return (
        <>
            <AppContext.Provider value={contextValue}>
                {children}
            </AppContext.Provider>
        </>
    );

}