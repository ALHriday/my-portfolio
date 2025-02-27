import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';


const Projects = () => {
    const { projectData } = useContext(AuthContext);

    const handleViewDetails = (project) => {

        const { title, description, features, image } = project;

        Swal.fire({
            html: `
            <div class='flex flex-col gap-2'>
                <div>
                    <img src="${image}" alt="" />
                </div>
                <div>
                    <h1 class='text-2xl font-bold'>${ title}</h1>
                    <div class='my-2'>
                    <p>* ${features[0]}</p>
                    <p>* ${features[1]}</p>
                    <p>* ${features[2]}</p>
                    <p>* ${features[3]}</p>
                    <p>* ${features[4]}</p>
                    </div>
                    <div>
                        <p>${ description}</p>
                    </div>
                </div>
            </div >`
          });

    }

return (
    <div className="p-4 py-12 w-full md:w-10/12 mx-auto">
        <div className="text-center mb-6">
            <h1 className="text-4xl font-bold my-4 text-teal-400">Projects</h1>
            <p>Explore Some of My Projects.</p>
        </div>

        <div className='flex flex-col gap-6 mt-4'>
            {projectData.map(project =>
                <div key={project.id}>
                    <motion.div
                        initial={{ opacity: 0, x: -160, y: 75 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1.6 }}>
                        <div className="grid grid-cols-1 lg:grid-cols-5 border rounded-md">
                            <div className='flex flex-col p-4 bg-teal-600 col-span-3'>
                                <div className='rounded-md'>
                                    <div className="h-[240px] md:h-[240px]">
                                        <img className='w-full h-full rounded-md opacity-75' src={project.image} alt="" />
                                    </div>
                                </div>

                                <div className='flex gap-2 mt-2 flex-wrap overflow-hidden rounded-md'>
                                    <div className="btn btn-sm">
                                        <Marquee pauseOnHover={true}>{project.technologies_used}</Marquee>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2 flex flex-col justify-between gap-2 p-4">
                                <div>
                                    <div className="flex justify-between items-center gap-2">
                                        <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
                                        <div>
                                            <a href={project.live_Link}>
                                                <button className='btn btn-sm bg-teal-600 text-white'>Live</button>
                                            </a>
                                        </div>
                                    </div>

                                    <p>{project.description}</p>
                                </div>
                                <div className=''>
                                    <div className='flex flex-col gap-2'>
                                        <div>
                                            <a href={project.sourceCode}>
                                                <button className='btn mr-2 bg-teal-700 text-white'>Source Code</button>
                                            </a>
                                            <button onClick={() => handleViewDetails(project)} className='btn mr-2 bg-teal-700 text-white'>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            )}

        </div>

    </div>
);
};

export default Projects;