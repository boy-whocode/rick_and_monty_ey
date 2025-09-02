export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    origin: { name: string };
    location: { name: string };
}

export interface CharacterAPIResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export interface CharacterCardProps {
    data: Character | undefined;
    isLoading:boolean;
    isError:boolean

}
