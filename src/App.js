import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Base64 from './pages/Base64'
import Hex from './pages/Hex'
import Url from './pages/Url'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"></Route>
          <Route path="/base64" element={<Base64 />}></Route>
          <Route path="/hex" element={<Hex />}></Route>
          <Route path="/url" element={<Url />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
