import React from "react";
import Card from "./Card";

export default function List(props) {
    const { title, cards } = props.list;

    return (
        <div className="max-w-[100px] p-3 bg-white border rounded-lg shadow-md min-w-fit sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h4 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                {title}
            </h4>
        <hr className="my-4"/>
          <div>
            {cards && cards.map(card => (<Card key={card.id} {...card}/>))}
          </div>
        </div>
    );
}
