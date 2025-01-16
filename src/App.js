import './App.css';
import React, {} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

import IndexPage from "./pages/IndexPage";
import UserPage from "./pages/UserPage";
import SinglePostPage from "./pages/SinglePostPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UploadPage from "./pages/UploadPage";
import EditPage from "./pages/EditPage";


function App() {

    return (
        <BrowserRouter>

            <div className="page-container">
                <Toolbar/>
                <main className="grow">
                    <Routes>
                        <Route path="/" element={<IndexPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/user/:username" element={<UserPage/>}/>
                        <Route path="/post/:username/:id" element={<SinglePostPage/>}/>
                        <Route path="/upload" element={<UploadPage/>}/>
                        <Route path="/edit" element={<EditPage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>

        </BrowserRouter>

    )
        ;
}

export default App;
