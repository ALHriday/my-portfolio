import Card from "../../Shared/Card";

const Skills = () => {
    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold text-teal-600 text-center col-span-1 md:col-span-2 lg:col-span-3 my-6">Skills</h1>
            <p className="text-center">I am proficient in a range of technologies that allow me to build efficient, scalable, and responsive web applications. My skills include: <br />

                Frontend: HTML, CSS, JavaScript, React, Tailwind CSS <br />
                Backend: Node.js, Express.js, MongoDB, MySQL <br />
                Version Control: Git, GitHub <br />

                I am passionate about continuous learning and stay up-to-date with the latest web development trends and tools.</p>
            <div className="mt-4">
                <h1 className="text-3xl font-bold border-b-2 mb-2 py-2">FontEnd Tools</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                    <Card
                        name='HTML'
                        image='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80'
                        description='The standard markup language for creating web pages and applications.'
                    ></Card>
                    <Card
                        name='CSS3'
                        image='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80'
                        description='Used for designing and styling websites, ensuring they look great on all devices.'
                    ></Card>
                    <Card
                        name='Tailwind CSS'
                        image='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80'
                        description='A utility-first CSS framework for building fast, responsive designs directly in your markup.'
                    ></Card>
                    <Card
                        name='JavaScript'
                        image='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80'
                        description='The core scripting language that powers interactivity and functionality in web browsers'
                    ></Card>
                    <Card
                        name='React.JS'
                        image='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80'
                        description='A JavaScript library for building responsive and dynamic user interfaces'
                    ></Card>
                </div>
            </div>

            <div className="my-6">
                <h1 className="text-3xl font-bold border-b-2 mb-2 py-2">BackEnd Tools</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                    <Card
                        name='Node.JS'
                        image='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80'
                        description=' JavaScript runtime for building scalable server-side applications.'
                    ></Card>
                    <Card
                        name='Express.JS'
                        image='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80'
                        description='A lightweight framework for creating APIs and web apps with Node.js.'
                    ></Card>
                    <Card
                        name='Git'
                        image='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80'
                        description='Version control for tracking and managing code changes.'
                    ></Card>
                    <Card
                        name='MongoDB'
                        image='https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80'
                        description='A NoSQL database for flexible, JSON-like data storage.'
                    ></Card>

                </div>
            </div>



        </div>
    );
};

export default Skills;