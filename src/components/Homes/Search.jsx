"use client";
import React, { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState("");
    console.log(search, "this is search value from search component");

    return (
        <div>
            <input
                type="text"
                placeholder="Search course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2"
            />
            <input type="submit" value="Search" />
        </div>
    );
};

export default Search;