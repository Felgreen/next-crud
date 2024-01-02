import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <div className="flex justify-center mt-[25%]">
            <Link
                href="/dashboard"
                className="flex items-center justify-center w-64 h-16 bg-blue-500 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
            >
                <h1 className="text-white text-2xl font-bold">Enter .</h1>
            </Link>
        </div>
    );
}
