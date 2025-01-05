import peddyAdoption from '../../assets/Peddy-adoption-web.png'
import careerCounseling from '../../assets/CareerCounseling-web.png'
import smartLearn from '../../assets/SmartLearn-web.png'
import ProjectCard from '../../Shared/ProjectCard';
const Projects = () => {
    return (
        <div className="p-4 py-12 w-full md:w-10/12 mx-auto">
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold my-4 text-teal-400">Projects</h1>
                <p>Explore Some of My Projects.</p>
            </div>
            <div className='flex flex-col gap-6 mt-4'>
                <ProjectCard
                    img={peddyAdoption}
                    name='HTML, CSS, Tailwind CSS, JavaScript.'

                ></ProjectCard>
                <ProjectCard
                    img={careerCounseling}
                    name='HTML, CSS, Tailwind CSS, JavaScript, React JS, Daisy UI.'        
                ></ProjectCard>
                <ProjectCard
                    img={smartLearn}
                    name='HTML, CSS, Tailwind CSS, JavaScript, React JS, Daisy UI.'
                ></ProjectCard>
            </div>

        </div>
    );
};

export default Projects;