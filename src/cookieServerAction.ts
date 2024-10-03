"use server"

import {cookies} from "next/headers";

export const setCookies = async () => {
    cookies().set("CTA1", "some string", {
        httpOnly: true,
        secure: true,
        expires: 60 * 60 * 100000,
        path:"/",
        value:"some string",
        sameSite:"none",
        maxAge:60*60*60*10000,
    })
}

export const deleteCookies = async () => {
    cookies().delete("CTA1")
}