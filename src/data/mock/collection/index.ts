import { collectionImages } from "@/constants/images"

export interface IMockCollection {

    image: string,
    name: string


}

export const mockCollections: IMockCollection[] = [
    {
        image: collectionImages.latido,
        name: "All"
    },

    {
        image: collectionImages.ka,
        name: "Aviator"
    },

    {
        image: collectionImages.kha,
        name: "Alpha"
    },
    {
        image: collectionImages.ga,
        name: "ravager"
    },
    {
        image: collectionImages.gha,
        name: "frontier"
    },
    {
        image: collectionImages.na,
        name: "noble"
    },
    {
        image: collectionImages.cha,
        name: "qaseem"
    },


]