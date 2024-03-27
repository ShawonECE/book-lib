import { useContext, useEffect, useState } from "react";
import { ReadContext } from "../Root";
import { WishContext } from "../Root";
import { useLoaderData } from "react-router-dom";
import ListCard from "./ListCard";

const ListedBooks = () => {
    const [read, setRead] = useContext(ReadContext);
    const [wish, setWish] = useContext(WishContext);
    const [selectedValue, setSelectedValue] = useState('Sort By');
    const [readTab, setReadTab] = useState(true);
    const [wishTab, setWishTab] = useState(false);
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
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
    useEffect(() => {
        const readListToInclude = books.filter(book => read.includes(book.bookId));
        const wishListToInclude = books.filter(book => wish.includes(book.bookId));
        setReadList(readListToInclude);
        setWishList(wishListToInclude);
    }, [books, read, wish]);
    const handleSort = (e) => {
        const value = e.target.value;
        setSelectedValue(value);
        const newReadList = [...readList];
        const newWishList = [...wishList];
        if (value === "Rating") {
            newReadList.sort((book1, book2) => book2.rating - book1.rating);
            newWishList.sort((book1, book2) => book2.rating - book1.rating);
        } else if (value === "Publishing Year") {
            newReadList.sort((book1, book2) => book2.yearOfPublishing - book1.yearOfPublishing);
            newWishList.sort((book1, book2) => book2.yearOfPublishing - book1.yearOfPublishing);
        } else if (value === "Number of Pages") {
            newReadList.sort((book1, book2) => book2.totalPages - book1.totalPages);
            newWishList.sort((book1, book2) => book2.totalPages - book1.totalPages);
        }
        setReadList(newReadList);
        setWishList(newWishList);
    };
    
    return (
        <div className="mb-32">
            <h1 className="text-center bg-gray-200 text-3xl font-bold work-sans-font py-8 mt-5 lg:mt-8 rounded-xl">Books</h1>

            <div className="flex justify-center mt-8">
                <select value={selectedValue} onChange={handleSort} className="select max-w-xs bg-[#23BE0A] text-lg font-semibold text-white work-sans-font">
                    <option disabled>Sort By</option>
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