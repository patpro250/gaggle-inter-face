"use server";
import { getApiClient } from "../axios";

export async function getStudents() {
    try {
        const api = await getApiClient();
        const students = await api.get('/students/librarian');
        return students.data;
    } catch (ex) {
        return ex;
    }
}