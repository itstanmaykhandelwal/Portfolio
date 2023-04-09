import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Service from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";

function App() {
    return (
        <>
            <Header/>
            <main className="main">
                <Home/>
                <About/>
                <Skills/>
                <Service/>
                <Qualification/>
            </main>
        </>
    );
}

export default App;

