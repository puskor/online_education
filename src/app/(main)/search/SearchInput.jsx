"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get("search") || "");

    const handleSearch = (e) => {
        e.preventDefault();
        search.length >= 1 && router.push(`/search/${search}`);

    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSearch} className="flex gap-2 py-5">
                <input
                    type="text"
                    placeholder="Search course..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded w-64"
                />

                <button type="submit" className="bg-blue-500 text-white px-4 rounded">
                    Search
                </button>
            </form>
        </div>
    );
}