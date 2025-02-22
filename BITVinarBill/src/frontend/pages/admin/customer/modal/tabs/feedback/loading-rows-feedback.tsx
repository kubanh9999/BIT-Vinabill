import React from "react";

export const LoadingRowsFeedback = () => {
    return (
        <>
            {Object.keys([...Array(3)]).map((val) => (
                <tr key={val} className="border-0">
                    <td colSpan={3} className="px-0">
                        <div className="flex justify-center">
                            <div className="p-2 space-y-2 border-2 border-black border-opacity-15 rounded-md w-full">
                                <div className="skeleton h-4 w-full"></div>
                                <div className="flex *:flex-1 gap-x-5">
                                    <div className="skeleton h-4"></div>
                                    <div className="skeleton h-4"></div>
                                </div>
                                <div className="flex *:flex-1 gap-x-5">
                                    <div className="skeleton h-4"></div>
                                    <div className="skeleton h-4"></div>
                                </div>
                                <div className="flex *:flex-1 gap-x-5">
                                    <div className="skeleton h-4"></div>
                                    <div className="skeleton h-4"></div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            ))}
        </>
    );
};
