import { useContext } from "react";
import { ReadContext } from "../Root";
import { WishContext } from "../Root";

const ListedBooks = () => {
    const [read, setRead] = useContext(ReadContext);
    const [wish, setWish] = useContext(WishContext);
    console.log(read, wish);
    return (
        <div>
            Here is the listed books
        </div>
    );
};

export default ListedBooks;