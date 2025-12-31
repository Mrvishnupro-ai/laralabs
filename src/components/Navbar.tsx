import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
    const navItems = [
        { name: "Work", href: "#" },
        { name: "Approach", href: "#" },
        { name: "Services", href: "#" },
        { name: "News", href: "#" },
        { name: "About", href: "#" },
        { name: "Join", href: "#" },
        { name: "Contact", href: "#" },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-transparent backdrop-blur-sm border-b border-white/10">
            <div className="w-full px-[10%] h-20 flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Link href="/" className="block">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                <div className="hidden md:block">
                    <div className="flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
