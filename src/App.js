import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './component/Home';
import PdfExportOne from './component/PdfExportOne';
import PdfExportTwo from './component/PdfExportTwo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/' element={<PdfExportTwo />}/>
          <Route path='/pdf-one' element={<PdfExportOne />}/>
          <Route path='/pdf-two' element={<PdfExportTwo />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
