import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Books from "./Books";

const Home = () => {
    const books = useLoaderData();
    return (
        <div className="mb-32">
            <Banner></Banner>
            <Books books={books}></Books>
        </div>
    );
};

export default Home;