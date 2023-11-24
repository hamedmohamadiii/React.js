import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Banner from './component/banner';
import Property from './component/property';
import Travelpoint from './component/travel point';
import Service from './component/service';
import Footer from './component/footer';
import Login from './component/log in';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Store} from './redux/store';
import Signup from './component/singup';


function App() {

  return (
    <>

      <Provider store={Store}>
      <div className="container-fluid">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={[<Banner />, <Property />, <Travelpoint />, <Service />, <Footer />]} />
          <Route path="/Singup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
      </div>
      </Provider>
    </>
  );
}

export default App;
