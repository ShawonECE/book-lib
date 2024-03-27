import { useLoaderData, useParams } from "react-router-dom";
import { ReadContext } from "../Root";
import { WishContext } from "../Root";
import { useContext, useState } from "react";
import Toast from "./Toast.jsx";

const BookDetail = () => {
    const [read, setRead] = useContext(ReadContext);
    const [wish, setWish] = useContext(WishContext);
    const [showAddedRead, setShowAddedRead] = useState(false);
    const [showAddedWish, setShowAddedWish] = useState(false);
    const [showAlreadyRead, setShowAlreadyRead] = useState(false);
    const [showAlreadyWish, setShowAlreadyWish] = useState(false);
    const showToast = (show) => {
        show(true);
        setTimeout(() => {
            show(false);
        }, 3000);
    };
    const books = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const addToRead = () => {
        if (read.includes(intId)) {
            showToast(setShowAlreadyRead);
        } else {
            const readList = [...read];
            readList.push(intId);
            setRead(readList);
            showToast(setShowAddedRead);
        }
    };
    const addToWish = () => {
        if (wish.includes(intId)) {
            showToast(setShowAlreadyWish);
        } else if (read.includes(intId)) {
            showToast(setShowAlreadyRead);
        } else {
            const wishList = [...wish];
            wishList.push(intId);
            setWish(wishList);
            showToast(setShowAddedWish);
        }
    };
    const book = books.find(book => book.bookId === intId);
    const {bookName, image, tags, author, category, review, totalPages, publisher, yearOfPublishing, rating} = book;
    return (
        <div className="mt-5 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
            <div className="bg-gray-100 rounded-xl p-20">
                <img src={image} alt="" className="max-h-[650px] mx-auto"/>
            </div>
            <div>
                <h2 className="playfair-display-font text-4xl font-bold">{bookName}</h2>
                <p className="text-lg font-medium work-sans-font text-[#131313CC] mt-4">By: {author}</p>
                <p className="text-lg font-medium work-sans-font text-[#131313CC] border-y mt-6 py-3">{category}</p>
                <p className="mt-6 work-sans-font">
                    <span className="font-bold">Review: </span>
                    <span className="text-[#131313B3]">{review}</span>
                </p>
                <div className="mt-7 flex gap-4 items-center border-b pb-7">
                    <span className="work-sans-font font-bold">Tag:</span>
                    {
                        tags.map((tag, idx) => <div key={idx} className="badge px-3 py-4 bg-gray-200 text-[#23BE0A] text-base font-medium work-sans-font">{tag}</div>)
                    }
                </div>
                <div className="overflow-x-auto mt-6">
                    <table className="table work-sans-font">
                        <tbody>
                            <tr>
                                <td className="text-[#131313B3]">Number of Pages:</td>
                                <td className="font-semibold">{totalPages}</td>
                            </tr>
                            <tr>
                                <td className="text-[#131313B3]">Publisher:</td>
                                <td className="font-semibold">{publisher}</td>
                            </tr>
                            <tr>
                                <td className="text-[#131313B3]">Year of Publishing</td>
                                <td className="font-semibold">{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="text-[#131313B3]">Rating:</td>
                                <td className="font-semibold">{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-4 mt-8">
                    <button onClick={addToRead} className="btn btn-outline work-sans-font text-lg">Read</button>
                    <button onClick={addToWish} className="btn bg-[#50B1C9] work-sans-font text-lg text-white">Wishlist</button>
                </div>
                {
                    showAddedRead && 
                    <Toast text="Added to read"></Toast>
                }
                {
                    showAddedWish && 
                    <Toast text="Added to wishlist"></Toast>
                }
                {
                    showAlreadyRead && 
                    <Toast text="Already read"></Toast>
                }
                {
                    showAlreadyWish && 
                    <Toast text="Already in wishlist"></Toast>
                }
            </div>
        </div>
    );
};

export default BookDetail;