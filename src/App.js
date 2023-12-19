import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SubHeader from './components/sub-header/SubHeader';
import Navbar from './components/navbar/Navbar';
import NavbarBottom from './components/navbar-bottom/NavbarBottom';
import Footer from './components/footer/Footer';
import { PRODUCTS } from './static';
import Home from "./router/home/Home";
import Login from "./router/login/Login";
import Wishes from "./router/wishes/Wishes";
import Cart from "./router/cart/Cart";
import SingilRout from './router/singilRoute/SingilRout';
import Turkum from "./router/turkum/Turkum"
import Elektronika from './router/Web/Elektronika/Elektronika';
import Maishiy from './router/Web/Maishiy/Maishiy';
import Kiyim from './router/Web/Kiyim/Kiyim';
import Poyabzallar from './router/Web/Poyabzallar/Poyabzallar';
import Aksessuarlar from './router/Web/Aksessuarlar/Aksessuarlar';
import Gozallik from './router/Web/Goʻzallik/Gozallik';
import Salomatlik from './router/Web/Salomatlik/Salomatlik';
import UyRozgor from './router/Web/Uy-roʻzgʻor/UyRozgor';
import Qurilish from './router/Web/Qurilish/Qurilish';
import Avtotovarlar from './router/Web/Avtotovarlar/Avtotovarlar';
import Bolalar from './router/Web/Bolalar/Bolalar';
import Xobbi from './router/Web/Xobbi/Xobbi';
import Sport from './router/Web/Sport/Sport';
import OziqOvqat from './router/Web/Oziq-ovqat/OziqOvqat';
import MaishiyKimyo from './router/Web/Maishiy-kimyo/MaishiyKimyo';
import Kanselyariya from './router/Web/Kanselyariya/Kanselyariya';
import Hayvonlar from './router/Web/Hayvonlar/Hayvonlar';
import Kitoblar from './router/Web/Kitoblar/Kitoblar';
import Dacha from './router/Web/Dacha/Dacha';
import Now from './Now/Now';
function App() {
  return (
    <div className="App">
      <SubHeader />
      <Navbar data={PRODUCTS} />
      <NavbarBottom />
      <Routes>
        <Route path='/' element={<Home data={PRODUCTS} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wishes' element={<Wishes />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<SingilRout data={PRODUCTS} />} />
        <Route path='/turkum' element={<Turkum/>} />

 
        <Route path='/Elektronika'       element={<Elektronika/>} />
        <Route path='/Maishiy'         element={<Maishiy/>} />
        <Route path='/Kiyim'             element={<Kiyim/>} />
        <Route path='/Poyabzallar'           element={<Poyabzallar/>} />
        <Route path='/Aksessuarlar'       element={<Aksessuarlar/>} />
        <Route path='/Gozallik'      element={<Gozallik/>} />
        <Route path='/Salomatlik'        element={<Salomatlik/>} />
        <Route path='/UyRozgor'        element={<UyRozgor/>} />
        <Route path='/Qurilish'        element={<Qurilish/>} />
        <Route path='/Avtotovarlar'      element={<Avtotovarlar/>} />
        <Route path='/Bolalar'        element={<Bolalar/>} />
        <Route path='/Xobbi'           element={<Xobbi/>} />
        <Route path='/Sport'          element={<Sport/>} />
        <Route path='/OziqOvqat'       element={<OziqOvqat/>} />
        <Route path='/MaishiyKimyo'      element={<MaishiyKimyo/>} />
        <Route path='/Kanselyariya'      element={<Kanselyariya/>} />
        <Route path='/Hayvonlar'           element={<Hayvonlar/>} />
        <Route path='/Kitoblar'          element={<Kitoblar/>} />
        <Route path='/Dacha'            element={<Dacha/>} />


           
        <Route path='*'            element={<Now/>} />


      </Routes>
      <Footer />
    </div>
  );
}       

export default App;
 



 