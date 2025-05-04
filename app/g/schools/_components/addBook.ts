"use server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

import axios from "axios";
import { AddBook } from "./AddBookModal";
import { auth } from "../../../auth";

export default async function addBook(data: AddBook) {
    try {

        const session = await auth();
        const res = await axios.post(`${API_URL}/books`, data, { headers: { 'x-auth-token': session.accessToken } });
        if (res.status === 201) {
            return {
                success: true,
                message: res.data
            }
        } else if (res.status === 400) {
            return {
                success: false,
                message: res.data
            }
        }
    } catch (ex) {
        return {
            success: false,
            message: ex?.message || 'Something failed'
        }
    }

}