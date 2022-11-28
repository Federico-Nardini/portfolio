import { React, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import CardsContainer from "./Components/Cards/CardsContainer";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <CardsContainer />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
