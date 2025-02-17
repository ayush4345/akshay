import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between w-full mt-10 mb-8 px-5 md:px-10 text-white">
            <Link href="/" className="text-inherit no-underline text-2xl font-medium">
                thepokerclub
            </Link>
            <div className="flex gap-5 font-light">
                {/* <Link href="/archives" className="text-inherit no-underline hover:font-semibold">
                    Archives
                </Link> */}
                {/* <span>Essays</span> */}
            </div>
        </nav>
    )
}