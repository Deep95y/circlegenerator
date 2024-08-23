import React from "react";
import CanvasComponent from './canvas';
import CreateCircle from './createcircle';
import './index.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';


const App = () => {


   return(
      <>
     <main>
  <BrowserRouter>
  <Routes>
    <Route path ="/" element ={<CanvasComponent/>}/>
    <Route path ="/canvas" element ={<CanvasComponent/>}/>
    <Route path ="/createcircle" element ={<CreateCircle/>}/>

    <Route path ="." element ={<h1>404 Route not found</h1>}/>
  </Routes> 
  </BrowserRouter>
  </main> 

      </>
   );
}

export default App;