import PropTypes from 'prop-types';
import Book from './Book';

const Books = ({books}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 lg:mt-8'>
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    );
};

Books.propTypes = {
    books: PropTypes.array.isRequired,
};

export default Books;