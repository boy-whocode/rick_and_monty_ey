"use client";

import { Character } from "@/types/character.types";
import { ColumnDef, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import Link from "next/link";

interface Props {
    data: Character[];
}

const columns: ColumnDef<Character>[] = [
    {
        accessorKey: "image",
        header: "Avatar",
        cell: ({ row }) => <div className="mx-auto w-max rounded-full overflow-hidden"><img src={row.original.image} alt={row.original.name} width={50} /></div> ,
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <Link href={`/character/${row.original.id}`} className="text-blue-600 underline">
                {row.original.name}
            </Link>
        ),
    },
    { accessorKey: "status", header: "Status" },
    { accessorKey: "species", header: "Species" },
    { accessorKey: "gender", header: "Gender" },
];

export default function CharacterTable({ data }: Props) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="flex-1 overflow-y-auto border border-gray-400">
        <table className="w-full h-full">
                <thead className=" border border-gray-400">
                {table.getHeaderGroups().map((hg) => (
                    <tr key={hg.id} className="sticky z-10 top-0 left-0 bg-black border border-gray-400">
                        {hg.headers.map((header) => (
                            <th key={header.id} className=" border border-gray-400 p-2">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="border p-2 text-center">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}
