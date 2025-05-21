export function Footer(){
    return (
        <footer className="bg-[var(--color-header-footer-bg)] text-black py-4 mt-10">
            <div className="container mx-auto px4 flex justify-between items-center text-sm">
                <span>TRACY © {new Date().getFullYear()}</span>
                <a
                    href="https://github.com/tracylick61/ReactRecips"
                    className=""
                >
                Repository
                </a>
            </div>
        </footer>
    )
}