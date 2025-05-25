"use client"

import { ColumnDef, createColumnHelper } from "@tanstack/react-table"

export type BookTable = {
    id: string
    title: string
    author: string,
    publisher: string,
    dateAquired: Date,
    totalCopies: number,
    copiesAvailable: number
}

const columnHelper = createColumnHelper<BookTable>();

export const columns: ColumnDef<BookTable>[] = [
    columnHelper.accessor('title', {
        header: info => <p>Title</p>,
        cell: info => info.getValue()
    }),
    columnHelper.accessor('author', {
        header: info => <p>Author</p>,
        cell: info => info.getValue()
    }),
    columnHelper.accessor('publisher', {
        header: info => <p>Publisher</p>,
        cell: info => info.getValue()
    }),
    columnHelper.accessor('dateAquired', {
        header: info => <p>Date acquired</p>,
        cell: info => info.getValue()
    }),
    columnHelper.accessor('totalCopies', {
        header: info => <p>Total copies</p>,
        cell: info => info.getValue()
    }),
    columnHelper.accessor('copiesAvailable', {
        header: info => <p className="text-red-500">Copies Available</p>,
        cell: info => info.getValue()
    }),
]
