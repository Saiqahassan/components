import React from "react";

const Header = () => {
    return (
        <div className="bg-black text-white font-bold">
            <ul className="flex gap-x-12 justify-center p-4">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header;