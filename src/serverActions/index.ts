"use server"

import { cookies } from "next/headers"


export const setGender = (gender: string) => {
    const c = cookies();
    c.set("gender", gender)
}