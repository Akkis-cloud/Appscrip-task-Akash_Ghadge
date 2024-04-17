import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './HeaderComponants/header.css';
import Header from './HeaderComponants/Header';
import DiscoverProducts from './BodyComponants/DiscoverProducts';
// import FilterBar from './BodyComponants/FilterBar';
import ProductList from './BodyComponants/ProductList';
import Footer from './FooterComponants/Footer';


const App=()=>{
  return (
    <>
    <Header></Header>
    <DiscoverProducts></DiscoverProducts>
    
    <ProductList></ProductList>
    <Footer></Footer>
     </>
  );
}

export default App;
