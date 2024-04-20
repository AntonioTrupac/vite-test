import { useState } from "react"
import { NavLinks } from "./NavLinks"
import { NavLinksMobile } from "./NavLinksMobile"

export const Navbar = () => {
    const [showMobile, setShowMobile] = useState(false);
    return (
        <header className="flex justify-between p-8 bg-gray-200 relative items-center">
            <div>
                Logo
            </div>
            <nav>
                <NavLinks />
                <NavLinksMobile showMobile={showMobile} />
            </nav>
            <div className="flex gap-2 items-center">
                <button className="py-1 px-2 md:hidden" onClick={() => setShowMobile(!showMobile)}>
                    Icon
                </button>
                <div>
                    Avatar
                </div>
            </div>
        </header>
    )
}