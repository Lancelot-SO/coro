/* eslint-disable react/prop-types */

const Book = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-2 w-full max-w-sm">
            <img
                src={item.image}
                alt={item.heading}
                className="w-full h-[280px] object-cover rounded-lg"
            />
            <div className="p-4">
                <div className="text-sm text-[#999881] flex gap-8 mb-2">
                    <span className="text-[12px]">{item.category}</span>
                    <ul className="list-disc">
                        <li className="text-[12px]">{item.date}</li>
                    </ul>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.heading}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    {item.details}
                </p>
                <a href={item.link} className="text-purple-600 font-semibold hover:underline">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default Book;
