import { useContext, useState } from "react";
import { ReadContext } from "../Root";
import { WishContext } from "../Root";
import { useLoaderData } from "react-router-dom";
import ListCard from "./ListCard";

const ListedBooks = () => {
    const [read, setRead] = useContext(ReadContext);
    const [wish, setWish] = useContext(WishContext);
    const [readTab, setReadTab] = useState(true);
    const [wishTab, setWishTab] = useState(false);
    const handleTab = (char) => {
        if (char === 'r') {
            setWishTab(false);
            setReadTab(true);
        } else if (char === 'w') {
            setReadTab(false);
            setWishTab(true);
        }
    };
    const books = useLoaderData();
    const readList = books.filter(book => read.includes(book.bookId));
    const wishList = books.filter(book => wish.includes(book.bookId));
    return (
        <div className="mb-32">
            <h1 className="text-center bg-gray-200 text-3xl font-bold work-sans-font py-8 mt-5 lg:mt-8 rounded-xl">Books</h1>

            <div className="flex justify-center mt-8">
                <select className="select max-w-xs bg-[#23BE0A] text-lg font-semibold text-white work-sans-font">
                    <option disabled defaultValue>Sort By</option>
                    <option>Rating</option>
                    <option>Publishing Year</option>
                    <option>Number of Pages</option>
                </select>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
                <input onChange={() => handleTab('r')} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" checked={readTab} />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        readList.map(book => <ListCard key={book.bookId} book={book}></ListCard>)
                    }
                </div>
                <input onChange={() => handleTab('w')} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" checked={wishTab}/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        wishList.map(book => <ListCard key={book.bookId} book={book}></ListCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;