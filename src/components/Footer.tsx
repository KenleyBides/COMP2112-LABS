'use client'
import Link from "next/link";
import { useCounter } from "@/context/GlobalContext";

export default function Footer() {
        const { counter } = useCounter();
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()}</p>
            <Link href="/contact">Contact Us</Link>
            <Link href="https://github.com/KenleyBides/COMP2112">View Source</Link>
            <p> Total # of Home button clicks this Visit: {counter}</p>
        </footer>
    )
}