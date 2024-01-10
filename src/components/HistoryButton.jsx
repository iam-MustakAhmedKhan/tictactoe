/* eslint-disable react/prop-types */
const HistoryButton = ({ description, jumpto }) => {
    return (
        <li>
            <button onClick={jumpto} className="bg-gray-500 px-4 py-1 rounded-md m-1 w-full">
                {description}
            </button>
        </li>
    );
};

export default HistoryButton