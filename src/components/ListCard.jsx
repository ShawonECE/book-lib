import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ListCard = ({book}) => {
    const {bookId, bookName, image, author, tags, yearOfPublishing, publisher, totalPages, category, rating} = book;
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/book-detail/${bookId}`);
    };
    return (
        <div className="card bg-base-100 mb-5 p-6 border">
            <div className="grid grid-cols-5 gap-4">
                <figure className='p-5 lg:p-10 bg-gray-200 rounded-lg col-span-5 lg:col-span-1'><img src={image} alt="Movie" className='m-auto max-h-[200px]' /></figure>
                <div className='col-span-5 lg:col-span-4'>
                    <h2 className='playfair-display-font text-lg lg:text-2xl font-bold'>{bookName}</h2>
                    <p className='work-sans-font font-medium text-[#131313CC] mt-4'>By: {author}</p>
                    <div className="flex items-center gap-4 mt-4">
                        <span className="work-sans-font font-bold">Tag:</span>
                        {
                            tags.map((tag, idx) => <div key={idx} className="badge px-3 py-4 bg-gray-200 text-[#23BE0A] text-base font-medium work-sans-font">{tag}</div>)
                        }
                    </div>
                    <p className='work-sans-font text-[#131313CC] mt-4 flex items-center gap-2'><span className="material-symbols-outlined">
                        schedule
                    </span>Year of Publishing: {yearOfPublishing}</p>
                    <div className="flex flex-wrap mb-4">
                        <p className='work-sans-font text-[#131313CC] mt-4 lg:mr-5 flex items-center gap-2'><span className="material-symbols-outlined">
                            group
                        </span>Publisher: {publisher}</p>
                        <p className='work-sans-font text-[#131313CC] mt-4 flex items-center gap-2'><span className="material-symbols-outlined">
                            description
                        </span>Pages: {totalPages}</p>
                    </div>
                    <hr />
                    <div className='flex flex-wrap gap-3 mt-5'>
                        <div className="badge px-3 py-4 bg-sky-100 text-[#328EFF] text-base work-sans-font">Category: {category}</div>
                        <div className="badge px-3 py-4 bg-orange-100 text-[#FFAC33] text-base work-sans-font">Rating: {rating}</div>
                        <div onClick={showDetail} className="badge px-3 py-4 cursor-pointer bg-[#23BE0A] text-white text-base font-medium work-sans-font">View details</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ListCard.propTypes = {
    book: PropTypes.object.isRequired
};

export default ListCard;