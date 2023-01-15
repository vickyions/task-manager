import React from "react";

export default function Card(props) {
    const { title, description } = props;

    return (
        <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-4 dark:bg-gray-700 dark:border-gray-500">
            <h4 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                {title}
            </h4>
        <p>{description}</p>
        </div>
    );
}
