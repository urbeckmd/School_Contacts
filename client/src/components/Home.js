import React from 'react';
import Header from './Header';
import SchoolList from './SchoolList';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function Home() {
  return (
    <>
        <Header homePage={true} />
        <SchoolList />
    </>
  )
}

export default Home