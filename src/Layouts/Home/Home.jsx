import AboutMe from "../../components/About/AboutMe";
import Banner from "../../components/Banner/Banner";
import Education from "../../components/Education/Education";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner />
            <AboutMe />
            <Skills />
            <Projects />
            <Education />
        </div>
    );
};

export default Home;