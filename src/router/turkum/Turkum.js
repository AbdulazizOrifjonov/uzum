import React from 'react'
import { GoChevronRight } from "react-icons/go";
import kitob from "./photos/kitob.png"
import blender from "./photos/blender.png"
import bolararOyinchioq from "./photos/bolararOyinchioq.png"
import daraht from "./photos/daraht.png"
import gozallikBuyumlari from "./photos/gozallikBuyumlar.png"
import kiyim from "./photos/kiyim.png"
import ijotkorlik from "./photos/ijotkorlik.png"
import kimyoviy from "./photos/kimyoviy.png"
import mashunaTzatihs from "./photos/mashinaTuzatish.png"
import olma from "./photos/olma.png" 
import poyabza from "./photos/poyabzal.png"
import quloqchin from "./photos/quloqchin.png"
import qurlish from "./photos/qurilish.png"
import salomatlik from "./photos/salomatlik.png"
import sport from "./photos/sport.png"
import sumka from "./photos/sumka.png"
import uy from "./photos/uy.png"
import hayvon from "./photos/hayvon.png"
import araq from "./photos/araq.png"
import "./Turkum.css"
// import DropdownMenu from './DropdownMenu/DropdownMenu';
import { Link } from 'react-router-dom';
import DropdownMenu from '../../hooks/Hooks';
function Turkum() {
    return (
        <div className="container">
           <div className="katagorya">
 
         
         {/* <DropdownMenu/> */}
         
         
         <Link  className="gold" to={'/Elektronika' } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={quloqchin} alt="" /><p className='joha' >Elektronika</p> </div>     <GoChevronRight/> </div>                        </Link> 
         <Link  className="gold" to={'/Maishiy'     } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={blender} alt="" /><p className='joha' >Maishiy ehnika </p> </div>     <GoChevronRight/> </div>                      </Link> 
         <Link  className="gold" to={'/Kiyim'       } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={kiyim} alt="" /><p className='joha' >Kiyim</p> </div>     <GoChevronRight/> </div>                                  </Link> 
         <Link  className="gold" to={'/Poyabzallar' } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={poyabza} alt="" /><p className='joha' >Poyabrallar</p> </div>     <GoChevronRight/> </div>                          </Link> 
         <Link  className="gold" to={'/Aksessuarlar'} >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={sumka} alt="" /><p className='joha' >Aksessuarlar</p> </div>     <GoChevronRight/> </div>                           </Link> 
         <Link  className="gold" to={'/Gozallik'    } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={gozallikBuyumlari} alt="" /><p className='joha' >Goʻzallik va parvarish</p> </div>     <GoChevronRight/> </div>     </Link> 
         <Link  className="gold" to={'/Salomatlik'  } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={salomatlik} alt="" /><p className='joha' >Salomatlik</p> </div>     <GoChevronRight/> </div>                        </Link> 
         <Link  className="gold" to={'/UyRozgor'    } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={uy} alt="" /><p className='joha' >Uy-roʻzgʻor buyumlari</p> </div>     <GoChevronRight/> </div>                     </Link> 
         <Link  className="gold" to={'/Qurilish'    } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={qurlish} alt="" /><p className='joha' >Qurilish va taʼmirlash</p> </div>     <GoChevronRight/> </div>               </Link> 
         <Link  className="gold" to={'/Avtotovarlar'} >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={mashunaTzatihs} alt="" /><p className='joha' >Avtotovarlar</p> </div>     <GoChevronRight/> </div>                  </Link> 
         <Link  className="gold" to={'/Bolalar'     } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={bolararOyinchioq} alt="" /><p className='joha' >Bolalar tovarlari</p> </div>     <GoChevronRight/> </div>           </Link> 
         <Link  className="gold" to={'/Xobbi'       } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={ijotkorlik} alt="" /><p className='joha' >Xobbi va ijod</p> </div>     <GoChevronRight/> </div>                     </Link> 
         <Link  className="gold" to={'/Sport'       } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={sport} alt="" /><p className='joha' >Sport va hordiq</p> </div>     <GoChevronRight/> </div>                        </Link> 
         <Link  className="gold" to={'/OziqOvqat'   } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={olma} alt="" /><p className='joha' >Oziq-ovqat mahsulotlari</p> </div>     <GoChevronRight/> </div>                 </Link> 
         <Link  className="gold" to={'/MaishiyKimyo'} >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={kimyoviy} alt="" /><p className='joha' >Maishiy kimyoviy  </p> </div>     <GoChevronRight/> </div>           </Link> 
         <Link  className="gold" to={'/Kanselyariya'} >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={araq} alt="" /><p className='joha' >Kanselyariya tovarlari</p> </div>     <GoChevronRight/> </div>                  </Link> 
         <Link  className="gold" to={'/Hayvonlar'   } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={hayvon} alt="" /><p className='joha' >Hayvonlar uchun tovarlar</p> </div>     <GoChevronRight/> </div>              </Link> 
         <Link  className="gold" to={'/Kitoblar'    } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={kitob} alt="" /><p className='joha' >Kitoblar</p> </div>     <GoChevronRight/> </div>                               </Link> 
         <Link  className="gold" to={'/Dacha'       } >                 <div className="turkumlar"><div  className='johan'><img  width={20} src={daraht} alt="" /><p className='joha' >Dacha, bogʻ va tomorqa</p>  </div>    <GoChevronRight/> </div>                </Link> 
 <DropdownMenu/>
           </div>
        </div>
    )
}

export default Turkum


 