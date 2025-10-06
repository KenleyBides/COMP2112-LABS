import Link from "next/link";

export default function footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()}</p>
            <Link href="/contact">Contact Us</Link>
            <Link href="https://github.com/KenleyBides/COMP2112">View Source</Link>
        </footer>
    )
}