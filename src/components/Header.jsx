import Link from "next/link"

function Header() {
    return (
        <nav className="bg-[var(--color-header-footer-bg)] text-black">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-xl font-bold">React SPA</Link>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/contact" className="font-bold hover:underline">Contact</Link>
                        </li>
                        <li>
                            <Link href="/about" className="font-bold hover:underline">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export {Header}
