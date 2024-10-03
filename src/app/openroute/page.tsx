"use client"

import Link from "next/link";
import {deleteCookies, setCookies} from "@/cookieServerAction";
import {redirectAction} from "@/redirectAction";

const OpenRoute = () => {
    return (
        <div className={"flex flex-col gap-8 p-4"}>
            you can always see this. this is not the protected route
            <div className={"flex gap-4"}>
                <button onClick={async() => await setCookies()} className={"bg-blue-600 p-2 rounded text-white"}>setcookies</button>
                <button onClick={async() => await deleteCookies()} className={"bg-blue-600 p-2 rounded text-white"}>deleteCookies</button>
                <button onClick={async() => await redirectAction()} className={"bg-blue-600 p-2 rounded text-white"}>redirect to protected route using server action</button>
                <Link href={"/protectedroute"} className={"bg-blue-600 p-2 rounded text-white"}>Link to protected route</Link>
            </div>
        </div>
    );
};

export default OpenRoute;