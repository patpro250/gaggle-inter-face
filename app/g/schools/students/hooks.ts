import { useQuery } from "@tanstack/react-query";
import { getStudents } from "./actions";

export const useStudentsQuery = () => {
    return useQuery({
        queryKey: ['students'],
        queryFn: getStudents
    });
}