import { Employee } from "./Employee";

export interface AppContextType {
    searchQuery: string;
    updateSearchQuery: (query: string) => void;
    employeesList: Employee[];
    loading: boolean;
    error: string | null;
}
