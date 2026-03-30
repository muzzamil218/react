import Abt from "./components/abt";
import Awards from "./components/awards";
import Button from "./components/Button";
import Edu from "./components/Edu";
import Exp from "./components/Exp";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

import Skills from "./components/Skills";
import Sumary from "./components/Sumary";

export default function App(){
  return(
    <>
    <Intro/>
        <Abt/>
    <Sumary/>
    <Edu/>
    <Exp/>
    <Skills/>
    <Awards/>
    <Footer/>
    <Feedback/>
    <Button/>
    </>
  );
}