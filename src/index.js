import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Navbar></Navbar>
    <div class="container my-3">
    <TextForm heading="Enter the text to analyze below"></TextForm>
   
    </div>
   

  </div>
    
  
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
