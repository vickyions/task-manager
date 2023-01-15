import React from "react";
import Card from "./Card";

export default function List(props) {
    const { title, cards } = props.list;

    return (
        <div className="max-w-[300px] p-4 bg-white border rounded-lg shadow-md sm:p-4 dark:bg-gray-800 dark:border-gray-700">
            <h4 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                {title}
            </h4>
        <hr className="my-4"/>
          <div className="flex flex-col justify-end gap-2 items-center">
            {cards && cards.map(card => (<Card key={card.id} {...card}/>))}
          </div>
        </div>
    );
}
