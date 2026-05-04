import React from 'react';

const NodataFilter = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center py-16 text-center container mx-auto">


                <h2 className="text-5xl font-semibold mb-2">
                    No results found
                </h2>

                <p className="text-gray-500 mb-4">
                    We couldn’t find anything for{" "}
                    {/* <span className="font-medium text-gray-700">
                    "{searchTerm}"
                </span> */}
                </p>

                <p className="text-sm text-gray-400">
                    Try different keywords or check spelling.
                </p>
            </div>
        </div>
    );
};

export default NodataFilter;