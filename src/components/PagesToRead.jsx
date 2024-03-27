import { useContext } from "react";
import { ReadContext } from "../Root";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import TriangleBar from "./TriangleBar";

const PagesToRead = () => {
    const [read, setRead] = useContext(ReadContext);
    const books = useLoaderData();
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const readList = books.filter(book => read.includes(book.bookId));
    const pageData = readList.map(book => {
        let name = book.bookName.slice(0, 10);
        return {
            name: name,
            pages: book.totalPages
        }
    });
    console.log(pageData);

    return (
        <div className="flex justify-center mt-5 lg:mt-8 mb-32 bg-gray-200 rounded-xl py-10 lg:py-20">
            <ResponsiveContainer width={900} height={500}>
            <BarChart
                data={pageData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {colors.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
        
    );
};

export default PagesToRead;