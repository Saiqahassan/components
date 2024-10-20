import React from "react";

const Footer = () => {
    return (
        <div className="bg-black text-white font-bold absolute inset-x-0 bottom-0 p-4">
            <ul className="flex gap-x-12 justify-center">
                <li>Support</li>
                <li>Blogs</li>
                <li>Jobs</li>
                <li>Location</li>
            </ul>
        </div>
    )
}

export default Footer;