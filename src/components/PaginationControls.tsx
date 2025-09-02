"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function PaginationControls({ totalPages }: { totalPages: number }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page") || "1");

    const goToPage = (page: number) => {
        router.push(`/?page=${page}`);
    };

    return (
        <div className="flex gap-2 mt-4">
            <button
                disabled={currentPage <= 1}
                onClick={() => goToPage(currentPage - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Prev
            </button>
            <span className="px-3 py-1">Page {currentPage} of {totalPages}</span>
            <button
                disabled={currentPage >= totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
}
