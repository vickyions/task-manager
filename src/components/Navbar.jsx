import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../features/lists/listsSlice";
import useDarkMode from "./useDarkMode";

export default function Navbar() {
    const [isDark, setIsDark] = useDarkMode();
    const [listname, setListname] = useState("");

    const dispatch = useDispatch();

    return (
        <div className="w-full flex mb-2 p-4 justify-between items-center gap-4 shadow-md text-gray-800 dark:bg-gray-900 dark:text-white">
            <h1 className="text-2xl font-bold">Kanban Board</h1>
            <div className="flex gap-2">
                <input
                    type="text"
                    name="listname"
                    value={listname}
                    placeholder="List name"
                    onChange={(e) => setListname(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                        if (!listname) return;
                        dispatch(addList({ title: listname }));
                    }}
                >
                    Add List
                </button>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={isDark}
                    onClick={() => setIsDark((o) => !o)}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Dark Mode
                </span>
            </label>
        </div>
    );
}
