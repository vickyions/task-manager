import React from "react";

import { useSelector } from "react-redux";
import { selectLists } from "../features/lists/listsSlice";

import List from "./List";

export default function Board() {
    const lists = useSelector(selectLists);

    return (
        <div className="flex gap-3 p-5 mx-auto w-full overflow-scroll">
            {lists &&
                lists.map((list) => {
                    return <List key={list.id} list={list} />;
                })}
        </div>
    );
}
