import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Form from './Form';
import CustomBarChart from './BarChart';
import Chatbot from './ChatBot';  // Import your Chatbot component

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/ChatBot" element={<Chatbot />} /> 
            </Routes>
        </Router>
    );
}

export default AppRouter;