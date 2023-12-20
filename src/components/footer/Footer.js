// import React from 'react'
// import "./Footer.css"
// function Footer() {
//     return (
//         <div>
//             Footer
//         </div>
//     )
// }

// export default Footer

import React from 'react';
import rasim1 from "./img/apple.png"
import rasim2 from "./img/facebook.png"
import rasim3 from "./img/google-play.png"
import rasim4 from "./img/instagram.png"
import rasim5 from "./img/telegram.png"
import rasim6 from "./img/youtube.png"

import "./Footer.css";




 
 

function Footer() {   
  return (
    <div className="container">

     
      <div className="containera">

      </div>
      <div className="footer">
        <div className="footer__inner">
          <div className="footer__column">
            <h3>Biz haqimizda</h3>
            <p>Topshirish punktlari</p>
            <p>Vakansiyalar</p>
          </div>
          <div className="footer__column">
            <h3>Foydalanuvchilarga</h3>
            <p>Biz bilan bog'lanish</p>
            <p>Savol-Javob</p>
          </div>
          <div className="footer__column">
            <h3>Tadbirkorlarga</h3>
            <p>Uzumda soting</p>
            <p>Sotuvchi kabinetiga kirish</p>
          </div>
        </div>
        <div className="footer__download">
<div className="alert">
<div className="medya">
        <div className="medyas">
       <select  className='like'>
        <option className='milk' value=""> <span className='zar' > Biz haqimizda             </span> </option>
        <option className='milk' value=""> <span className='zar' > Topshirish punktlari      </span>        </option>
        <option className='milk' value=""> <span className='zar' > Vakansiyalar              </span></option>
       </select>
       <hr className='zor' />
       <select className='like' >
        <option className='milk' value=""> <span className='zar' > Foydalanuvchilarga        </span>      </option>
        <option className='milk' value=""> <span className='zar' > Biz bilan bog'lanish      </span>        </option>
        <option className='milk' value=""> <span className='zar' > Savol-Javob              </span></option>
       </select>
       <hr className='zor' />
       <select className='like' >
        <option className='milk' value=""> <span className='zar' > Tadbirkorlarga            </span>  </option>
        <option className='milk' value=""> <span className='zar' > Uzumda soting             </span> </option>
        <option className='milk' value=""> <span className='zar' > Sotuvchi kabinetiga kirish</span>              </option>
       </select>
        </div>
      </div>
{/* <div className="red"> */}

          <div className="vaydod">
      <div className="vay">
  <div className="uf1">
<div className="golds">

          <div className="gol">
            <h4>Ilovani yuklab olish</h4>
            <div className="row">
              <h3 className='log' id='ref' >
                <img className='h5' src={rasim1} alt="AppStore" />
                AppStore
                
              </h3>
              <h3 className='log' id='ref' >
                <img className='h5' src={rasim3} alt="Google Play" />
                Google Play
              </h3>
            </div>
          </div>
</div>
  </div>
    <div className="uf2">
  <div className="footer__social">
            <div className="gold">
              <h3 className='h3'>Uzum ijtimoiy tarmoqlarda</h3>
              <div className="icon-row">
               <img className='piyala' src={rasim4} alt="Instagram" />   
               <img className='piyala' src={rasim5} alt="Telegram" />    
               <img className='piyala' src={rasim6} alt="Youtube" />      
               <img className='piyala' src={rasim2} alt="Facebook" />     
               </div>
              </div>
            </div>
      </div>        


        
          </div>
          </div>
          <div className="foooter">
            {/* <div className="fot"> */}

      <div className="foot">
    <p>Maxfiylik kelishuvi
</p>
<p>Foydalanuvchi kelishuvi</p>
      </div>
      <div className="foot1">
<p>«2023© XK MCHJ «UZUM MARKET». </p>
<p>STIR 309376127.</p>
<p> Barcha huquqlar himoyalangan</p>
      </div>
  
            {/* </div> */}

     </div>

{/* </div> */}






      </div>
        </div>
      </div>
    
    </div>
  );
}

export default Footer;
