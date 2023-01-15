import React from "react";
import Card from "./Card";


import { Plus } from "phosphor-react";
import {useDispatch} from "react-redux";
import {addList} from "../features/lists/listsSlice";

export default function List(props) {
    const { title, cards } = props.list;
    const dispatch = useDispatch();

    return (
        <div className="max-w-[400px] min-w-[300px] p-4 bg-white border rounded-lg shadow-md sm:p-4 dark:bg-gray-800 dark:border-gray-700">
            <nav className="flex justify-between items-center gap-2">
                <h4 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    {title}
                </h4>
                <button className="p-1 rounded-md bg-gray-200 dark:text-gray-900" onClick={e => {
                    //TODO: replace this after creating reducers to add cards It was just to check if redux is working
                    const List = {
                        title: "temperoroy list",
                    }
                    dispatch(addList(List))
                }}>
                    <Plus />
                </button>
            </nav>
            <hr className="my-4" />
            <div className="flex flex-col justify-end gap-2 items-center">
                {cards && cards.map((card) => <Card key={card.id} {...card} />)}
            </div>
        </div>
    );
}
