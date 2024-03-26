import { Link } from 'react-router-dom';
import book from '../assets/banner-book.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-3xl mt-5 lg:mt-8">
            <div className="hero-content gap-5 flex-col lg:flex-row-reverse px-16 lg:px-28">
                <img src={book} className="max-w-xs rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl lg:text-6xl font-bold playfair-display-font text-black leading-tight lg:leading-snug">Books to freshen up your bookshelf</h1>
                    <Link to='./listed-books'>
                        <button className="btn work-sans-font text-base font-semibold text-white bg-[#23BE0A] mt-10">View the list</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;