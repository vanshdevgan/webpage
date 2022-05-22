import './App.css';
import Header from './Components/Header';
import Motto from './Components/Motto';
import Features from './Components/Features';
import About from './Components/About';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Section from './Components/Section';
import Uses from './Components/Uses';
import Social from './Components/Social';
import Reels from './Components/Reels';
import Market from './Components/Market';
import Address from './Components/Address';
import Footer from './Components/Footer';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Header/>
//       <Motto/>
//       <Features/>
//       <About/>
//       <Section/>
//       <Uses/>
//       <Social/>
//       <Reels/>
//       <Market/>
//       <Address/>
//       <Footer/>
//     </>
    
//   );
// }

 function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/legal/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/" element={<>
        
      <Header/>
      <Motto/>
      <Features/>
      <About/>
      <Section/>
      <Uses/>
      <Social/>
      <Reels/>
      <Market/>
      <Address/>
      <Footer/>
    </>}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
