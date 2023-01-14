import React from "react";

export default function Card(props) {
    const { title, description } = props;

    return (
        <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md min-w-fit sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h4 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                {title}
            </h4>
        <p>{description}</p>
        </div>
    );
}
