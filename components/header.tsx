'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";


export const Header = () => {
    return (
<div>
    <div className=" bg-[#3d6301] border-black border py-2.5">
        <div className=" container content-start flex flex-wrap items-center justify-start mx-auto">
            <Link href="/" className="flex items-start animate-[spin_5.0s_infinite] py-[1vh]" >
                <Image alt="Chemistry Channel Logo" height={64} width={64} src="/images/chemistry-channel.svg"></Image>
            </Link>
            <Link href="/" className="flex max-w-fit pl-5">
            <span className=" max-w-fit font-Indie font-extrabold text-2xl self-center whitespace-nowrap animate-[bounce_1.2s_infinite] dark:text-white">Chemistry</span>
            <span className="pl-3 max-w-fit font-Indie font-extrabold text-2xl dark:text-white animate-[bounce_1.4s_infinite] ">Channel</span>
            </Link>    
        </div>
    </div>
</div>
    )
}
