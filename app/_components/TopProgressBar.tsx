// app/_components/TopProgressBar.tsx
"use client";

import NProgress from "nprogress";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./nprogress-custom.css"; // Optional: Custom styles for NProgress

NProgress.configure({
    showSpinner: false, // Disable loading spinner
    easing: "ease",
    speed: 500,
    minimum: 0.2,
});

export default function TopProgressBar() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (pathname) {
            NProgress.start();
            setLoading(true);
        }

        const timer = setTimeout(() => {
            NProgress.done();
            setLoading(false);
        }, 500); // Adjust delay as needed

        return () => {
            clearTimeout(timer);
            NProgress.done();
            setLoading(false);
        };
    }, [pathname]);

    return (
        <>
            {loading && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 pointer-events-none flex items-center justify-center">
                </div>
            )}
        </>
    );
}
