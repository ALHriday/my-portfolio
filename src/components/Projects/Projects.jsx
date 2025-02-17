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
                    liveLink='https://assignment6-peddy-web.netlify.app'
                    projectName={ 'Peddy Adoption'}
                    projectDescription={"Find your perfect furry friend with our pet adoption website! Browse a variety of loving pets in need of a forever home, connect with shelters, and make adoption easy and hassle-free. Start your journey to pet parenthood today!"}

                ></ProjectCard>

                <ProjectCard
                    img={careerCounseling}
                    name='HTML, CSS, Tailwind CSS, JavaScript, React JS, Daisy UI.'  
                    liveLink='https://career-counseling-web.netlify.app'
                    projectName={'Career Counseling'}
                    projectDescription={"Unlock your potential with our career counseling website! Get expert guidance, personalized career advice, and valuable resources to help you choose the right path, develop skills, and achieve your professional goals. Start your journey to success today!"}

                ></ProjectCard>

                <ProjectCard
                    img={smartLearn}
                    name='HTML, CSS, Tailwind CSS, JavaScript, React JS, Daisy UI.'
                    liveLink='https://smart-learn-online-tutor.netlify.app'
                    projectName={'SmartLearn'}
                    projectDescription={'SmartLearn is an innovative online education platform designed to connect students of all ages with expert tutors from around the world. It provides a seamless and personalized learning experience through interactive tools, tailored lesson plans, and 24/7 accessibility.'}
                ></ProjectCard>
            </div>

        </div>
    );
};

export default Projects;