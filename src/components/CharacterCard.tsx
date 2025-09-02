'use client'
import axiosInstance from "@/lib/axios";
import { Character, CharacterCardProps, } from "@/types/character.types";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const CharacterCard: FC<CharacterCardProps> = ({ data, isLoading, isError }) => {


    if (isLoading) return <p>Loading...</p>;
    if (isError || !data) return <p>Error fetching character details.</p>;
    return (<>
        <div className="mt-6 flex gap-4">
            <div>
            <img src={data.image} alt={data.name} width={200} />
            </div>
            <div>
            <h2 className="text-3xl font-bold">{data.name}</h2>
            <p>Status: {data.status}</p>
            <p>Species: {data.species}</p>
            <p>Gender: {data.gender}</p>
            <p>Origin: {data.origin.name}</p>
            <p>Location: {data.location.name}</p>
            </div>
        </div>
    </>)
}

export default CharacterCard