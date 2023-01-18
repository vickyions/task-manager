import React from "react";

export default function Card(props) {
    const { title } = props;

    return (
        <div className="w-full max-w-md p-2 bg-white border rounded-lg shadow-md sm:p-2 dark:bg-gray-700 dark:border-gray-500">
            <h4 className="text-md leading-none text-gray-900 dark:text-white">
                {title}
            </h4>
        </div>
    );
}
