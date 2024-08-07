import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between w-full mt-4 mb-8 px-3">
            <Link href="/" className="text-inherit no-underline text-2xl font-medium">
                theproductimp
            </Link>
            <div className="flex gap-5 font-light">
                <Link href="/notes" className="text-inherit no-underline">
                    Notes
                </Link>
                {/* <span>Essays</span> */}
            </div>
        </nav>
    )
}