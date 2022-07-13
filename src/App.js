import React, { useState, useEffect} from 'react';
import axios from 'axios';  
import Gallery from './Gallery1';
import Sidebar from './sidebar';
import './App.css';
import { BrowserRouter ,Routes, Route, Redirect } from 'react-router-dom';
function App() {
  const [images, setImages]=useState([]);
    useEffect(() => {
      axios.get('https://api.unsplash.com/photos/?client_id=GyWE5tywYbtlMU5twLMatLY6C42MVAbdeOU1pd8CV7M')
      .then(res => setImages([...images, ...res.data]));
   })
  
  return (
<div>

  

   <Sidebar />
   
            <Gallery className="gall" />
             
           
   </div>
  );
}

export default App;
