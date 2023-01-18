import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

import { X, Plus, Check } from "phosphor-react";
import { useDispatch } from "react-redux";
import { addCard } from "../features/lists/listsSlice";

export default function List(props) {
    const { id, title, cards } = props.list;
    const [card, setCard] = useState({
        addingCard: false,
        title: "",
    });
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        //focusing the input when appears in dom
        inputRef.current?.focus(); //optional chaining
    }, [card.addingCard]);

    return (
        <div className="max-w-[300px] min-w-[300px] p-3 bg-white border rounded-lg shadow-md sm:p-3 dark:bg-gray-800 dark:border-gray-700">
            <nav className="flex justify-between items-center gap-2">
                <h4 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    {title}
                </h4>
                <button
                    className="p-1 rounded-md bg-gray-200 dark:text-gray-900"
                    onClick={() => {
                        //toggle addingCard status and reset values in card
                        setCard((oldCard) => ({
                            addingCard: !oldCard.addingCard,
                        }));
                        inputRef.current?.focus();
                    }}
                >
                    {card.addingCard ? (
                        <X weight="bold" className="text-red-700" />
                    ) : (
                        <Plus weight="bold" />
                    )}
                </button>
            </nav>

            {card.addingCard && (
                <div className="flex gap-2 w-full mt-3 animate-pulse">
                    <input
                        type="text"
                        name="title"
                        value={card.title}
                        placeholder="Card title"
                        ref={inputRef}
                        onChange={(e) =>
                            setCard((card) => ({
                                ...card,
                                title: e.target.value,
                            }))
                        }
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto sm:w-auto p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:bg-gray-700"
                        onClick={() => {
                            if (!card.title) return;
                            dispatch(
                                addCard({
                                    listId: id,
                                    card: { title: card.title },
                                })
                            );
                            setCard((o) => ({
                                ...o,
                                title: "",
                            }));
                            //focus input again
                            inputRef.current?.focus();
                        }}
                        disabled={card.title ? false : true}
                    >
                        <Check weight="bold" />
                    </button>
                </div>
            )}
            <hr className="my-4" />
            <div className="flex flex-col justify-end gap-2 items-center">
                {cards && cards.map((card) => <Card key={card.id} {...card} />)}
            </div>
        </div>
    );
}
