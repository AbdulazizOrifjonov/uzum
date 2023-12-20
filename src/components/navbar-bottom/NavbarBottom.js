import React from 'react'
import "./NavbarBottom.css"
// import { GoChevronRight } from "react-icons/go";
// import kitob from "../../router/Web/kitob/kitob.png" 
// import blender from "../../router/Web/blender/blender.png"  
// import bolararOyinchioq from "../../router/Web/bolararOyinchioq/bolararOyinchioq.png"      
// import daraht from "../../router/Web/daraht/daraht.png"  
// import gozallikBuyumlari from "../../router/Web/gozallikBuyumlari/gozallikBuyumlar.png"        
// import kiyim from "../../router/Web/Kiyim/kiyim.png" 
// import ijotkorlik from "../../router/Web/ijotkorlik/ijotkorlik.png"  
// import kimyoviy from "../../router/Web/kimyoviy/kimyoviy.png"  
// import mashunaTzatihs from "../../router/Web/mashunaTzatihs/mashinaTuzatish.png"         
// import olma from "../../router/Web/olma/olma.png"
// import poyabza from "../../router/Web/poyabza/poyabzal.png"  
// import quloqchin from "../../router/Web/quloqchin/quloqchin.png"  
// import qurlish from "../../router/Web/qurlish/qurilish.png"  
// import salomatlik from "../../router/Web/salomatlik/salomatlik.png"  
// import sport from "../../router/Web/sport/sport.png"  
// import sumka from "../../router/Web/sumka/sumka.png"  
// import uy from "../../router/Web/uy/uy.png"  
// import hayvon from "../../router/Web/hayvon/hayvon.png"  
// import araq from "../../router/Web/araq/araq.png"  
import { Link } from 'react-router-dom';
// import Kitoblar from '../../router/Web/Kitoblar/Kitoblar';
// const DATA = [
//     "Ektronika",
//     "Maishiy texnika",
//     "Kiyim",
//     "Poyabzallar",
//     "Aksesuarla",
//     "Go'zallik",
//     "Salomatlik",
//     "Uy-ro'zg'or buyumlari",
//     "Qurilish va ta'mirlash",
//     "Avtotovarlar",
// ]

function NavbarBottom() {
  return (
    <div className='container'>
      <div className="navbar__bottom">
        <h3>Muddatli to'lov</h3>
        {/* {
                DATA?.map((el, inx)=><p key={inx}>{el}</p>)
            } */}




        <Link className="gold" to={'/Elektronika'} >                 <div className="turkumlardir"><div className='johan'>       <p className='joha' >                          Elektronika                                     </p> </div>      </div>                        </Link>
        <Link className="gold" to={'/Maishiy'} >                 <div className="turkumlardir"><div className='johan'>     <p className='joha' >                          Maishiy ehnika                                      </p> </div>      </div>                      </Link>
        <Link className="gold" to={'/Kiyim'} >                 <div className="turkumlardir"><div className='johan'>   <p className='joha' >                          Kiyim                                     </p> </div>      </div>                                  </Link>
        <Link className="gold" to={'/Poyabzallar'} >                 <div className="turkumlardir"><div className='johan'>     <p className='joha' >                          Poyabrallar                                     </p> </div>      </div>                          </Link>
        <Link className="gold" to={'/Aksessuarlar'} >                 <div className="turkumlardir"><div className='johan'>   <p className='joha' >                          Aksessuarlar                                     </p> </div>      </div>                           </Link>
        <Link className="gold" to={'/Gozallik'} >                 <div className="turkumlardir"><div className='johan'>               <p className='joha' >                          Goʻzallik va parvarish                                     </p> </div>      </div>     </Link>
        <Link className="gold" to={'/Salomatlik'} >                 <div className="turkumlardir"><div className='johan'>        <p className='joha' >                          Salomatlik                                     </p> </div>      </div>                        </Link>
        <Link className="gold" to={'/UyRozgor'} >                 <div className="turkumlardir"><div className='johan'><p className='joha' >                          Uy-roʻzgʻor buyumlari                                     </p> </div>      </div>                     </Link>
        <Link className="gold" to={'/Qurilish'} >                 <div className="turkumlardir"><div className='johan'>     <p className='joha' >                          Qurilish va taʼmirlash                                     </p> </div>      </div>               </Link>
        <Link className="gold" to={'/Avtotovarlar'} >                 <div className="turkumlardir"><div className='johan'>            <p className='joha' >                          Avtotovarlar                                     </p> </div>      </div>                  </Link>
        <Link className="gold" to={'/Bolalar'} >                 <div className="turkumlardir"><div className='johan'>              <p className='joha' >                          Bolalar tovarlari                                     </p> </div>      </div>           </Link>
        <Link className="gold" to={'/Xobbi'} >                 <div className="turkumlardir"><div className='johan'>        <p className='joha' >                          Xobbi va ijod                                     </p> </div>      </div>                     </Link>
        <Link className="gold" to={'/Sport'} >                 <div className="turkumlardir"><div className='johan'>   <p className='joha' >                          Sport va hordiq                                     </p> </div>      </div>                        </Link>
        <Link className="gold" to={'/OziqOvqat'} >                 <div className="turkumlardir"><div className='johan'>  <p className='joha' >                          Oziq-ovqat mahsulotlari                                     </p> </div>      </div>                 </Link>
        <Link className="gold" to={'/MaishiyKimyo'} >                 <div className="turkumlardir"><div className='johan'>      <p className='joha' >                          Maishiy kimyoviy                                       </p> </div>      </div>                  </Link>
        <Link className="gold" to={'/Kanselyariya'} >                 <div className="turkumlardir"><div className='johan'>  <p className='joha' >                          Kanselyariya tovarlari                                     </p> </div>      </div>                  </Link>
        <Link className="gold" to={'/Hayvonlar'} >                 <div className="turkumlardir"><div className='johan'>    <p className='joha' >                          Hayvonlar uchun tovarlar                                     </p> </div>      </div>              </Link>
        <Link className="gold" to={'/Kitoblar'} >                 <div className="turkumlardir"><div className='johan'>   <p className='joha' >                          Kitoblar                                     </p> </div>      </div>                               </Link>
        <Link className="gold" to={'/Dacha'} >                 <div className="turkumlardir"><div className='johan'>    <p className='joha' >                          Dacha, bogʻ va tomorqa                                     </p>  </div>     </div>                </Link>





















      </div>
    </div>
  )
}

export default NavbarBottom