import { useLoaderData } from "react-router-dom";
import ListCard from "./ListCard";
import { useState } from "react";

const Discover = () => {
    const books = useLoaderData();
    const [classicTab, setClassicTab] = useState(true);
    const [dystTab, setDystTab] = useState(false);
    const [fantasyTab, setFantasyTab] = useState(false);
    const handleTab = (char) => {
        if (char === 'c') {
            setDystTab(false);
            setFantasyTab(false);
            setClassicTab(true);
        } else if (char === 'd') {
            setClassicTab(false);
            setFantasyTab(false);
            setDystTab(true);
        } else if (char === 'f') {
            setClassicTab(false);
            setDystTab(false);
            setFantasyTab(true);
        }
    };
    const classic = books.filter(book => book.category === "Classic");
    const dystopian = books.filter(book => book.category === "Dystopian");
    const fantasy = books.filter(book => book.category === "Fantasy");
    return (
        <div className="mb-32">
            <h1 className="text-center bg-gray-200 text-3xl font-bold work-sans-font py-8 mt-5 lg:mt-8 rounded-xl mb-8">Discover Books by Genres</h1>

            <div role="tablist" className="tabs tabs-lifted">
                <input onChange={() => handleTab('c')} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Classic" checked={classicTab}/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        classic.map(book => <ListCard key={book.bookId} book={book}></ListCard>)
                    }
                </div>
                <input onChange={() => handleTab('d')} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Dystopian" checked={dystTab}/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        dystopian.map(book => <ListCard key={book.bookId} book={book}></ListCard>)
                    }
                </div>
                <input onChange={() => handleTab('f')} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Fantasy" checked={fantasyTab}/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        fantasy.map(book => <ListCard key={book.bookId} book={book}></ListCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Discover;