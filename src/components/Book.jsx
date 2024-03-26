import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Book = ({book}) => {
    const {image, tags, bookName, author, category, rating, bookId} = book;
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/book-detail/${bookId}`);
    };
    return (
        <div onClick={showDetail} className="card bg-base-100 border cursor-pointer">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-52" />
            </figure>
            <div className="card-body">
                <div className='flex gap-2 mt-4'>
                    {
                        tags.map((tag, idx) => <div key={idx} className="badge px-3 py-4 bg-gray-200 text-[#23BE0A] text-base font-medium work-sans-font">{tag}</div>)
                    }
                </div>
                <h2 className='text-2xl playfair-display-font font-bold mt-3'>{bookName}</h2>
                <h3 className='text-[#131313CC] work-sans-font font-medium pb-4 border-b-2 border-dashed'>By: {author}</h3>
                <div className='flex justify-between mt-3'>
                    <p className='text-[#131313CC] work-sans-font font-medium'>{category}</p>
                    <div className="flex text-[#131313CC] work-sans-font font-medium items-center gap-1">
                        <p className='m-0'>{rating}</p>
                        <span className="material-symbols-outlined m-0">
                            star
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
};

export default Book;