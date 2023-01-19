import React from "react";

export default function CardPopup(props) {
    const { title } = props;

    return (
        <div className="w-full absolute inset-0 backdrop-blur-3xl z-10 opacity-50 bg-red-400 flex justify-center items-center">
            <h1>CardPopup</h1>
        </div>
    );
}

//<div className="w-full max-w-md p-2 bg-white border rounded-lg shadow-md sm:p-2 dark:bg-gray-700 dark:border-gray-500">
//<h4 className="text-md leading-none text-gray-900 dark:text-white">
//{title}
//</h4>
//</div>
