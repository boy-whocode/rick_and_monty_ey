"use client";

import { useQueryClient } from "@tanstack/react-query";

export default function RefreshButton({ queryKey }: { queryKey: any[] }) {
    const queryClient = useQueryClient();

    return (
        <button
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => queryClient.invalidateQueries({ queryKey })}
        >
            🔄 Refresh
        </button>
    );
}
