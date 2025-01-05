import AboutMe from "../../components/About/AboutMe";
import Banner from "../../components/Banner/Banner";
import Skills from "../../components/Skills/Skills";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
                
        </div>
    );
};

export default Home;