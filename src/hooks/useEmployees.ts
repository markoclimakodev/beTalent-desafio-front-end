import { useState, useEffect } from "react";
import { Employee } from "../types/Employee";

export const useEmployees = () => {
    const API_URL = 'http://localhost:3000/employees'
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isComponentMounted = true;

        const fetchEmployees = async () => {
            try {
                // Simulação de espera de 1 segundo para demonstrar o estado de carregamento da aplicação
                await new Promise(resolve => setTimeout(resolve, 1000));

                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Erro ao carregar funcionários');
                }
                const employeeData: Employee[] = await response.json();
                if (isComponentMounted) {
                    setEmployees(employeeData);
                    setLoading(false);
                }
            } catch (error) {
                if (isComponentMounted && error instanceof Error) {
                    setError(error.message);
                }
            }
            finally {
                setLoading(false);
            }
        };

        fetchEmployees();

        return () => {
            isComponentMounted = false;
        };
    }, [API_URL]);

    return { employees, loading, error };
};

