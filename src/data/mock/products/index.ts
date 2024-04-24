import { jacketImages } from "@/constants/images"

export interface IProduct {
    name: string,
    price: number,
    image: string[]

}





export const mockProducts: IProduct[] = [

    {
        image: [jacketImages.sheep],
        name: "Sheep",
        price: 35000
    },

    {
        image: [jacketImages.sheep],
        name: "Sheep",
        price: 35000
    },
    {
        image: [jacketImages.sheep],
        name: "Sheep",
        price: 35000
    },
    {
        image: [jacketImages.sheep],
        name: "Sheep",
        price: 35000
    },
    {
        image: [jacketImages.sheep],
        name: "Sheep",
        price: 35000
    },
]