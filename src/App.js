import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookADemo from "./pages/BookADemo";
import ViewDemos from "./pages/ViewDemos";

import './App.css';

function App() {
  return (
  <Routes>
        <Route 
          path="/" 
          element={<Homepage />} />
        <Route 
          path="/book-a-demo" 
          element={<BookADemo />} />
  
        <Route 
          path="/view-demos" 
          element={<ViewDemos />} /> 
      </Routes>
  );
}

export default App;
