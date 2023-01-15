import React, {useState, useEffect} from "react";

export default function useDarkMode() {
    //bool
    const [isDark, setIsDark] = useState(() => {
        return  localStorage.getItem("isDark") ? JSON.parse(localStorage.isDark) : false;
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("isDark", isDark);
    }, [isDark]);

    return [isDark, setIsDark];
}
