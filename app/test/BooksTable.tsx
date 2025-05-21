'use client';

import React, { useState, useEffect } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    flexRender,
    ColumnDef,
    SortingState,
} from '@tanstack/react-table';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getBooks } from './book-helper';

type Book = {
    id: string;
    title: string;
    author: string;
    language: string;
    createdAt: string;
};

type Props = {
    serverData: {
        books: Book[];
        nextCursor: string | null;
    };
};

const columns: ColumnDef<Book>[] = [
    { accessorKey: 'title', header: 'Title' },
    { accessorKey: 'author', header: 'Author' },
    { accessorKey: 'language', header: 'Language' },
];

export default function BookTable({ serverData }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Get URL params for React Query key & fetch
    const q = searchParams.get('q') ?? '';
    const limit = Number(searchParams.get('limit')) || 10;
    const sort = searchParams.get('sort') ?? 'desc';
    const cursor = searchParams.get('cursor');

    // React Query fetch with serverData as initialData
    const safeCursor = cursor === 'null' || cursor === 'undefined' ? undefined : cursor;

    const { data, isLoading, error } = useQuery({
        queryKey: ['books', { q, limit, sort, cursor: safeCursor }],
        queryFn: () => getBooks({ q, limit, sort, cursor: safeCursor }),
        placeholderData: () => serverData,
        staleTime: 1000 * 60 * 10,
    });



    const [sorting, setSorting] = useState<SortingState>([]);
    useEffect(() => {
        if (sorting[0]) {
            updateQuery({ sort: sorting[0].desc ? 'desc' : 'asc' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sorting]);

    const table = useReactTable({
        data: data?.books ?? [],
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        manualSorting: true,
    });

    const updateQuery = (params: Record<string, string | undefined>) => {
        const current = new URLSearchParams(searchParams.toString());
        Object.entries(params).forEach(([key, value]) =>
            value ? current.set(key, value) : current.delete(key)
        );
        router.push(`?${current.toString()}`);
    };

    const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const newQ = (form.elements.namedItem('q') as HTMLInputElement).value;
        updateQuery({ q: newQ, cursor: undefined }); // reset cursor on new search
    };

    const onNext = () => {
        if (data?.nextCursor) {
            updateQuery({ cursor: data.nextCursor });
        }
    };

    if (isLoading) return <div className="p-4">Loading books...</div>;
    if (error) {
        console.log(error.message);
        return <div className="p-4 text-red-500">Error loading books.</div>;
    }



    return (
        <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow max-w-5xl mx-auto">
            <form onSubmit={onSearch} className="mb-4 flex gap-2">
                <input
                    name="q"
                    defaultValue={q}
                    placeholder="Search title or author"
                    className="px-4 py-2 rounded border dark:bg-gray-800 dark:text-white"
                />
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                    Search
                </button>
            </form>

            <table className="w-full table-auto text-sm text-left text-gray-800 dark:text-gray-200">
                <thead className="bg-gray-100 dark:bg-gray-800">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                const isSorted = header.column.getIsSorted();
                                return (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className="px-4 py-2 cursor-pointer select-none"
                                    >
                                        <div className="flex items-center gap-2">
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {isSorted === 'asc' ? '🔼' : isSorted === 'desc' ? '🔽' : ''}
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr
                            key={row.id}
                            className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className="px-4 py-2">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-4 flex justify-end">
                {data?.nextCursor && (
                    <button
                        onClick={onNext}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded"
                    >
                        Next Page →
                    </button>
                )}
            </div>
        </div>
    );
}
