import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Index } from './Pages/Index';

export const AppRoutes = () => {
    return (
        // <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </div>
        // </BrowserRouter>
    )
}