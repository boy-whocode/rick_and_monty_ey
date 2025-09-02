'use client'
import CharacterCard from "@/components/CharacterCard";
import axiosInstance from "@/lib/axios";
import { Character } from "@/types/character.types";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";


export default function CharacterDetailsPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const { data, isLoading, isError } = useQuery<Character>({
        queryKey: ["character", params.id],
        queryFn: async () => {
            const res = await axiosInstance.get(`/character/${params.id}`);
            return res.data;
        },
    });
    const handleBackToPreviousRoute = () => {
        router.back()
    }
    return (
        <>
            <div><button className="font-bold cursor-pointer" onClick={handleBackToPreviousRoute}> <span className="">&larr;</span> Back</button></div>
            <CharacterCard
                data={data}
                isLoading={isLoading}
                isError={isError}
            />
        </>
    );
}
