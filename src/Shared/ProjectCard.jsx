import PropTypes from "prop-types";

const ProjectCard = ({ img, name}) => {
    return (
        <div className='flex flex-col p-4 border-2 rounded-md bg-teal-600'>
            <div className='relative rounded-md'>
                <div className="h-[300px] md:h-[400px]">
                    <img className='w-full h-full rounded-md opacity-75' src={img} alt="" />
                </div>

                <div className='absolute bottom-5 right-[24%] md:right-[40%]'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div>
                            <button className='btn btn-sm mr-2'>Live Link</button>
                            <button className='btn btn-sm'>Github Link</button>
                        </div>
                        <div>
                            <button className='btn'>View Details</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex gap-2 mt-2 flex-wrap overflow-auto'>
                <p className="btn btn-sm font-bold">Technology Used: { name }</p>
            </div>

        </div>
    );
};

ProjectCard.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string
}

export default ProjectCard;