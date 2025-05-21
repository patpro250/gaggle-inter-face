// lib/data/bookFetcher.ts

import { getApiClient } from "../g/schools/axios";


export const getBooks = async (params: {
    q?: string;
    limit?: number;
    cursor?: string;
    sort?: string;
    language?: string;
}) => {
    const api = await getApiClient();
    const search = new URLSearchParams();

    if (params.q) search.set('q', params.q);
    if (params.limit) search.set('limit', String(params.limit));
    if (params.cursor) search.set('cursor', params.cursor);
    if (params.sort) search.set('sort', params.sort);
    if (params.language) search.set('language', params.language);

    const response = await api.get(`/books?${search.toString()}`);
    return response.data;
};
