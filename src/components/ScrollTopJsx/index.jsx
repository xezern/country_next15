'use client'
import { useScrollTop } from "@/utils"
import { usePathname } from "next/navigation";
import { useEffect } from "react"

export function ScrollTopJsx() {
    const pathname = usePathname();
    useEffect(() => {
        useScrollTop()
    }, [pathname]);


    return null;
}

