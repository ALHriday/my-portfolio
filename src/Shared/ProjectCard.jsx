import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

const ProjectCard = ({ img, name, liveLink, sourceCode, projectName, projectDescription }) => {
    return (
        <motion.div
        initial={{ opacity: 0, x: -160, y: 75 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.6 }}>
            <div className="grid grid-cols-1 lg:grid-cols-5 border rounded-md">
                <div className='flex flex-col p-4 bg-teal-600 col-span-3'>
                    <div className='rounded-md'>
                        <div className="h-[240px] md:h-[240px]">
                            <img className='w-full h-full rounded-md opacity-75' src={img} alt="" />
                        </div>
                    </div>

                    <div className='flex gap-2 mt-2 flex-wrap overflow-hidden rounded-md'>
                        <div className="btn btn-sm">
                            <Marquee pauseOnHover={true}>{name}</Marquee>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 flex flex-col justify-between gap-2 p-4">
                    <div>
                        <div className="flex justify-between items-center gap-2">
                            <h1 className="text-2xl font-bold mb-2">{projectName}</h1>
                            <div>
                                <a href={liveLink}>
                                    <button className='btn btn-sm bg-teal-600 text-white'>Live</button>
                                </a>
                            </div>
                        </div>

                        <p>{projectDescription}</p>
                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-2'>
                            <div>
                                <a href={sourceCode}>
                                    <button className='btn mr-2 bg-teal-700 text-white'>Source Code</button>
                                </a>
                                <a href={liveLink}>
                                    <button className='btn mr-2 bg-teal-700 text-white'>View Details</button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </motion.div>
    );
};

ProjectCard.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    liveLink: PropTypes.string,
    sourceCode: PropTypes.string,
    projectName: PropTypes.string,
    projectDescription: PropTypes.string,
}

export default ProjectCard;