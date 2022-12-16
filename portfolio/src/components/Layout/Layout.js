import React from "react";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SideBar from './SideBar';

function Layout(){
    return(
        <div className="container-fluid">
            <Header/>       
            <SideBar/>  
            <Main/>  
            <Footer/>       
        </div>
    );
}

export default Layout;