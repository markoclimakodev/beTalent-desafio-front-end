import { useState, useEffect } from "react";
import { Employee } from "../types/Employee";

export const useEmployees = (apiUrl: string = 'http://localhost:3000/employees') => {
    const [employee, setEmployee] = useState<Employee[]>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      let isMounted = true; 
  
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Erro ao carregar usuários');
          }
          const data: Employee[] = await response.json();
          if (isMounted) {
            setEmployee(data);
            setFilteredEmployees(data);
            setLoading(false);
          }
        } catch (err) {
          if (isMounted && err instanceof Error) {
            setError(err.message);
            setLoading(false);
          }
        }
      };
  
      fetchData();
  
      return () => {
        isMounted = false;
      };
    }, [apiUrl]);
  
    return { employee, filteredEmployees, setFilteredEmployees, loading, error };
  };
  
  