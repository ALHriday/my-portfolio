import PropTypes from "prop-types";

const Card = ({name, image, description}) => {
    return (
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-teal-700 rounded-lg shadow-lg hover:bg-teal-800 hover:ease-in cursor-pointer">
            <div className="flex justify-center -mt-16 md:justify-end">
                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={image} />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{ name }</h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{ description }</p>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
}

export default Card;