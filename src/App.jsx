import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage countries={countries} setCountries={setCountries}/>} />
            <Route path="country" >
              <Route path=":name" element={<Details />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
