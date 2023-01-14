import React from "react";

import { useSelector } from "react-redux";
import { selectLists } from "../features/lists/listsSlice";

import List from "./List";

export default function Board() {
    const lists = useSelector(selectLists);

    return (
        <div className="container flex gap-2 m-3 mx-auto w-full">
            {lists &&
                lists.map((list) => {
                    return <List key={list.id} list={list} />;
                })}
        </div>
    );
}
