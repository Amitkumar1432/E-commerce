import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import { DataProvider } from "./components/Context";
import SearchBar from "./components/section/SearchBar";
import { DataContext } from "./components/Context";
import Footer from "./components/section/Footer";

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <DataProvider>
      <div className="app">
        <Router>
          <Header searchInput={searchInput} handleChange={handleChange} />
          <Section />
          {searchInput.trim().length > 0 && (
            <SearchBar searchInput={searchInput} />
          )}
          <Routes> </Routes>
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
};

export default App;
