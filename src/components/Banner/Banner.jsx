import { Link } from 'react-router-dom';
import hridayImg from '../../assets/hriday.png'
import { motion } from 'framer-motion';
import './Banner.css';
import TypingEffect from '../TypingEffects/TypingEffect';

const Banner = () => {
    const name = `
          Alauddin Hriday
          * FrontEnd Developer...
          * Your Vision, My Code.
    `;


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-6 md:gap-0">
            <div className="flex flex-col order-2 md:order-1 justify-center items-center md:items-start gap-3">
                <h1 className="text-3xl font-bold">
                    Hi, I am Hriday —<br />{" "}
                    <TypingEffect
                        words={[
                            "Web Developer",
                            "Frontend Developer",
                            "Backend Developer",
                            "Full Stack Developer",
                        ]}
                        typingSpeed={120}
                        deleteSpeed={80}
                        delay={1200}
                    />
                </h1>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.0 }}
                ><p className="text-xl">
                        Building Beautiful User Journeys. <br />
                    </p>
                </motion.div>

                <div className="flex gap-2">
                    <motion.div
                        initial={{ opacity: 0, x: -90 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0 }}
                    ><div className="w-9 h-9 rounded-full">
                            <a href="https://web.facebook.com">
                                <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0 }}
                    ><div className="w-9 h-9 rounded-full">
                            <a href="https://www.instagram.com">
                                <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="" />
                            </a>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0 }}
                    ><div className="w-9 h-9 rounded-full">
                            <a href="https://www.linkedin.com">
                                <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0 }}
                    ><div className="w-9 h-9 rounded-full">
                            <a href="https://github.com">
                                <img className="w-full h-full rounded-full border-2 border-teal-600 bg-slate-200 hover:bg-teal-400 cursor-pointer" src="https://img.icons8.com/?size=100&id=E2KVOMc77Geo&format=png&color=000000" alt="" />
                            </a>
                        </div>
                    </motion.div>


                </div>
                <div className="mt-2 md:mt-1">
                    <Link className="btn md:btn-sm bg-teal-700 text-slate-200" to='https://drive.google.com/file/d/1ISO1lKQN-u-8qYvnTdjpzc5u1xUbzRnD/view?usp=sharing'>Download Resume</Link>
                </div>
            </div>

            <div className="flex justify-center items-center order-1 md:order-2">
                <div className="p-6 shadow-xl rounded-full relative w-60 h-60 bg-teal-600">
                    <div className="w-48 h-48 shadow-xl rounded-full  bg-teal-500">
                        <p className="w-10 h-10 shadow-lg rounded-full bg-teal-800 border border-white"></p>
                    </div>
                    <div className="shadow-lg rounded-full w-48 h-48  absolute top-[10%] left-[10%] p-4">

                        <img title={name} className="w-full h-full rounded-full hover:border-2 object-cover" src={hridayImg} alt="" />
                        <div className="relative">
                            <div className="bg-green-500 w-4 h-4 rounded-full absolute border-2 bottom-3 right-5"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;