 


import React
// , { useState } 
from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
function Login() {
 
    // const [modal, setModal] = useState(false)
    // const openModal = () => {
    //     setModal(!modal)
    // }
    return (
        <div  className='containerli'>
            {/* <button className="btn_modal"
                onClick={openModal}
            >
openModal
</button>
{modal &&(
     <div className="modal" onClick={openModal}>
                <div className="overly"  ></div>
                <div className="modal_container">
                    <h2>hello modal</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto reiciendis voluptas necessitatibus, velit eum nam hic reprehenderit, voluptates totam facilis sequi, nostrum dolores accusamus at ut laudantium ipsa consequatur doloribus.</p>
                    <button
                     className='close_modal' 
                     onClick={openModal}>
                        Close
                    </button>
                </div>
            </div>
)} */}
<div className='login'>

      <div className="main">
        <h2 className='text'>
     Email va Parolingizni kiriting
        </h2>
       <div className="input">

        <input className='inp' placeholder='Email' type="text" name="" />
        <input className='inp' placeholder='Password' type="password" name="" />
       </div>
       <div className="bts">
{/* <Link to={"/code"}> */}
      <button className='btn'>
          Kodni olish
        </button>
{/* </Link> */}
  
      
        <Link to={'/'} >
             <button className='bosh'>Asosiy sahifa</button>
        </Link>
       </div>
         
      </div>
    </div>
    </div>
    )
}

export default Login
 