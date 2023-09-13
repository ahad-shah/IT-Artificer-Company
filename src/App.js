import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Submenu from './Components/Submenu';
import Secodarymenu from './Components/Secondarymenu';
import Prac from './Components/Practice';
import Myhome from './Components/Home'
import Partner from './Components/Ourpartner';
import Ourservice from './Components/Ourservices';
import Recent from './Components/RecentPost';
import Ourclient from './Components/Ourclients';
import About from './Components/About';
import Fullinform from './Components/Fullinformation';
import Dummy from './Components/Dummy';
import { Route, Routes } from 'react-router-dom';
import Container from './Components/Container';
import Services from "./Components/Services";
// import Sidebar from "./Components/Sidebar";
import Subside from "./Components/Subsides";
import Applyfor from "./Components/Applyfor";
import Blog from "./Components/Blogs";




function App() {
  return (
    <div className="App">

<Header/>
    <Routes>
      <Route path='/' element={<Container/>}/>
      

     
      <Route path='/ff' element={ <Fullinform/>}>
        <Route path='about' element={<About/>}/>
        <Route path='subsides' element={<Subside/>}/>
        <Route path='applyfor' element={<Applyfor/>}/>
        <Route path='service' element={<Services/>}/>
        <Route path='blog' element={<Blog/>}/>


      </Route>
    </Routes>
    

    
   
     
     <Footer/>
 
    </div>
  );
}

export default App;
