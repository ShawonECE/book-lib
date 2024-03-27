import { useLoaderData } from "react-router-dom";
import ListCard from "./ListCard";

const TopPicks = () => {
    const books = useLoaderData();
    const topPicks = books.filter(books => books.rating >= 4.7);
    console.log(topPicks);
    return (
        <div className="mb-32">
            <h1 className="text-center bg-gray-200 text-3xl font-bold work-sans-font py-8 mt-5 lg:mt-8 rounded-xl mb-8">Top Rated by Readers</h1>
            {
                topPicks.map(book => <ListCard key={book.bookId} book={book}></ListCard>)
            }
        </div>
    );
};

export default TopPicks;