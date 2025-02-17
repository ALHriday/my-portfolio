import Marquee from "react-fast-marquee";
import Card from "../../Shared/Card";
// import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <div className="p-4 w-full md:w-11/12 mx-auto">
            <h1 className="text-4xl font-bold text-teal-600 text-center col-span-1 md:col-span-2 lg:col-span-3 my-6">Skills</h1>
            <p className="text-center">I am proficient in a range of technologies that allow me <br /> to build efficient, scalable, and responsive web applications. <br /> My skills include: </p>

            <div className="mt-4 overflow-hidden">
                <h1 className="text-3xl font-bold mb-2 py-2">FontEnd Tools</h1>
                <Marquee pauseOnHover={true}>
                    <div className="flex gap-6">
                        <Card
                            name='HTML'
                            image='https://img.icons8.com/?size=100&id=20909&format=png&color=000000'
                            description='The standard markup language for creating web pages and applications.'
                        ></Card>
                        <Card
                            name='CSS3'
                            image='https://img.icons8.com/?size=100&id=21278&format=png&color=000000'
                            description='Used for designing and styling websites, ensuring they look great on all devices.'
                        ></Card>
                        <Card
                            name='Tailwind CSS'
                            image='https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000'
                            description='A utility-first CSS framework for building fast, responsive designs directly in your markup.'
                        ></Card>
                        <Card
                            name='JavaScript'
                            image='https://img.icons8.com/?size=100&id=108784&format=png&color=000000'
                            description='The core scripting language that powers interactivity and functionality in web browsers'
                        ></Card>
                        <Card
                            name='React.JS'
                            image='https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000'
                            description='A JavaScript library for building responsive and dynamic user interfaces'
                        ></Card>

                    </div>
                </Marquee>
            </div>

            <div className="my-6 overflow-hidden">
                <h1 className="text-3xl font-bold mb-2 py-2">BackEnd Tools</h1>
                <Marquee direction="right" pauseOnHover={true}>
                    <div className="flex gap-6">
                        <Card
                            name='Node.JS'
                            image='https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000'
                            description=' JavaScript runtime for building scalable server-side applications.'
                        ></Card>
                        <Card
                            name='Express.JS'
                            image='https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000'
                            description='A lightweight framework for creating APIs and web apps with Node.js.'
                        ></Card>
                        <Card
                            name='Git'
                            image='https://img.icons8.com/?size=100&id=20906&format=png&color=000000'
                            description='Version control for tracking and managing code changes.'
                        ></Card>
                        <Card
                            name='MongoDB'
                            image='https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000'
                            description='A NoSQL database for flexible, JSON-like data storage.'
                        ></Card>

                    </div>
                </Marquee>
            </div>



        </div >
    );
};

export default Skills;