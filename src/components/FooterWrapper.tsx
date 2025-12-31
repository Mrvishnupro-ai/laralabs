"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
    const pathname = usePathname();

    // Don't show footer on the coming-soon page
    if (pathname === "/coming-soon") {
        return null;
    }

    return <Footer />;
}
