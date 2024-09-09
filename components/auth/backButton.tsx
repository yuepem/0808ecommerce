"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

type  backButtonType = {
    href: string
    label: string
}

export default function BackButton({href, label}: backButtonType) {
    return (
        <Button asChild variant="link" className="font-medium w-full" >
            <Link aria-label="Back" href={href}  > {label}</Link>
        </Button>
    )
}