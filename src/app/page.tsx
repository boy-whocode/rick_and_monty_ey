'use client'
import CharacterTable from "@/components/CharacterTable";
import PaginationControls from "@/components/PaginationControls";
import RefreshButton from "@/components/RefreshButton";
import axiosInstance from "@/lib/axios";
import { CharacterAPIResponse } from "@/types/character.types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || "1");

  const { data, isLoading, isError } = useQuery<CharacterAPIResponse>({
    queryKey: ["characters", page],
    queryFn: async () => {
      const res = await axiosInstance.get(`/character?page=${page}`);
      return res.data;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error fetching characters.</p>;
  return (
    <div className="flex flex-col overflow-hidden max-h-[90vh] gap-2">
      <CharacterTable data={data.results} />
      <div className="flex w-full justify-between">
        <PaginationControls totalPages={data.info.pages} />
        <RefreshButton queryKey={["characters", page]} />
      </div>
    </div>
  );
}
