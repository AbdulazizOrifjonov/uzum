// import React from 'react'
// import "./Navbar.css"
// import { IoMenu, IoSearch, IoCartOutline ,IoHomeOutline  } from "react-icons/io5";
// import { NavLink } from 'react-router-dom';
// import { FaRegUser, FaRegHeart  } from "react-icons/fa";

// function Navbar() {
//   return (
//     <div className='container'>
//       <div className="navbar">
//         <h2 className='nav__logo'>
//           <NavLink to={"/"}>uzum market</NavLink>
//         </h2>
//         <button className='nav__category'>
//           <IoMenu/>
//           <span>Katalog</span>
//         </button>
//         <div className="nav__search">
//           <input type="text" placeholder='Qidirish...' />
//           <button><IoSearch/></button>
//         </div>
//         <ul className="nav__collection">
//           <li className="nav__item nav__home">
//             <NavLink to={"/"}>
//               <IoHomeOutline/>
//               <span>Asosiy sahifa</span>
//             </NavLink>
//           </li>
//           <li className="nav__item">
//             <NavLink to={"/login"}>
//               <FaRegUser/>
//               <span>Kirish</span>
//             </NavLink>
//           </li>
//           <li className="nav__item">
//             <NavLink to={"/wishes"}>
//               <FaRegHeart />
//               <span>Sevimlilar</span>
//             </NavLink>
//           </li>
//           <li className="nav__item">
//             <NavLink to={"/cart"}>
//               <IoCartOutline />
//               <span>Savat</span>
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar


// import React, { useState ,useEffect }   from 'react';
// import "./Navbar.css";
// import {  IoSearch, IoCartOutline, IoHomeOutline  } from "react-icons/io5";
// import { NavLink } from 'react-router-dom';
// import { FaRegUser, FaRegHeart } from "react-icons/fa";
// import { useSelector } from 'react-redux';
// // import { IoClose } from "react-icons/io5";
// import {TfiMenuAlt} from "react-icons/tfi"

// function Navbar({data}) {
//   // const {pathname} = useLocation()
//   //   console.log(pathname);
//   //   if(pathname.includes("login")){
//   //     return<></>
//   //   };
  
//   const [value, setValue] = useState("")
//   const [searchData, setSearchData] = useState([])
//   useEffect(()=>{
//     if(value.trim()){
//       let fltrData = data.filter(a=> a.title.toLowerCase().includes(value.toLowerCase().trim()))
//       setSearchData(  fltrData )
//     }
//     else{
//       setSearchData([])
//     }
//   }, [ value ])

//   const wishes = useSelector((state) => state.wishes.value);
//  const cart = useSelector((state) => state.cart.value); 
//   return (
//     <div className='container'>
//       <div className="navbar">
//         {/* <div className="navbars"> */}
//           {/* <div className="ichi"> */}

//         <h2 className='nav__logo'>
//           <NavLink to={"/"}>uzum market</NavLink>
//         </h2>
//         <button className='nav__category'>
//         {/* {cart?.some((item) => item.id === el.id)? (
//               < TfiMenuAlt style={{ color: "var(--bg-py)" }} />
//             ) : (
//               <IoClose />
//             )}  */}
//           <TfiMenuAlt />
//           <span>Katalog</span>
//           {/* <IoClose fontSize={40} /> */}
//         </button>
//           {/* </div> */}
//         <div className="nav__search">
//           <input
//           className='imput'
//            value={value}
//            placeholder='Qidirish...'
//            onChange={(e)=> setValue(e.target.value)}
//            type="text" 
//            />
//           <button><IoSearch /></button>
//           {
//             value.trim()  &&  <div className="nav__search-drop">
              
//               {/* <p className='sr'> Natiyja: {searchData.length}ta</p> */}

//              {

//               searchData?.slice(0, 5)?.map((el)=> <div key={el.id} className="nav__search-item">
//                  <img className='images' src={el.url} alt="" />
//                  <div className="">
//                  <p>{el.title}</p>
//                  <b>{el.price?.brm()}so'm</b>
//                  </div>
//               </div> )
//              }
//              {
//               !searchData.length && <div className="center"> 
//               <img className='noUndefoend' src="https://uzum.uz/static/img/penguin.a739ac8.png" alt="" />
//               <p>Malumot yo'q </p>
            
//               </div>

//              }
//             </div>  
//           }
//         </div>

//         {/* </div> */}
        // <ul className="nav__collection">
        //   <li  className="nav__item nav__home">
        //     <NavLink to={"/"}>
        //       <IoHomeOutline />
        //       <span>Asosiy sahifa</span>
        //     </NavLink>
        //   </li>
//           <li className="nav__item">
//             <NavLink to={"/login"}>
//               <FaRegUser />
//               <span>Kirish</span>
//             </NavLink>
//           </li>
//           <li className="nav__item">
//             <NavLink to={"/wishes"}>
//               <FaRegHeart />
//               <span >Sevimlilar <sup  className='cat' >{wishes.length}</sup> </span>
//             </NavLink>
//           </li>
//           <li className="nav__item">
//             <NavLink to={"/cart"}>
//               <IoCartOutline />
//               <span  >Savat <sup  className='cat' >{cart.length}</sup></span>
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




import React, { useState ,useEffect }   from 'react';
import "./Navbar.css";
import {  IoSearch, IoCartOutline, IoHomeOutline  } from "react-icons/io5";
import {  NavLink } from 'react-router-dom';
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
// import { IoClose } from "react-icons/io5";
import {TfiMenuAlt} from "react-icons/tfi"
// import Catagory from '../catagory/Catagory';

function Navbar({ data }) {
  // const { pathname } = useLocation();

  // if (pathname.includes('login')) {
  //   return <></>;
  // }

  const [value, setValue] = useState('');
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (value.trim()) {
      let filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase().trim())
      );
      setSearchData(filteredData);
    } else {
      setSearchData([]);
    }
  }, [value, data]);

  const wishes = useSelector((state) => state.wishes.value);
  const cart = useSelector((state) => state.cart.value);
  // const [modal, setModal] = useState(false)
  // const openModal = () => {
  //     setModal(!modal)
  // }
  return (
    <div className='container'>
      <div className='navbar'>
        <h2 className='nav__logo'>
          <NavLink to={'/'}>uzum market</NavLink>
        </h2>




{/* 
            <button className="btn_modal"
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


       

<NavLink  to={"/turkum"}  > 

                      <button className='nav__category'>
    <TfiMenuAlt />
          
          
          
          <span>Katalog</span>
       


        </button>
          </NavLink>


        <div className='nav__search'>
          <input
            className='imput'
            value={value}
            placeholder='Qidirish...'
            onChange={(e) => setValue(e.target.value)}
            type='text'
          />
          <button>
            <IoSearch />
          </button>
          {value.trim() && (
            <div className='nav__search-drop'>
      
              {searchData.slice(0, 5).map((item) => (
                <div 
                // onClick={}
                 key={item.id} className='nav__search-item'>
 
                  <img className='images' src={item.url} alt='' />
                  <div className=''>
                    <p>{item.title}</p>
                    <b>{item.price?.brm()} so'm</b>
                  </div>
                </div>
              ))}
              {!searchData.length && (
                <div className='center'>
                  <img
                    className='noUndefoend'
                    src='https://uzum.uz/static/img/penguin.a739ac8.png'
                    alt=''
                  />
                  <p>Malumot yo'q</p>
                </div>
              )}
            </div>
          )}
        </div>
        <ul className='nav__collection'>
        

          <li  className="nav__item nav__home">
            <NavLink to={"/"}>
              <IoHomeOutline />
              <span>Asosiy sahifa</span>
            </NavLink>
          </li>

          <li className='nav__item'>
            <NavLink to={'/login'}>
              <FaRegUser />
              <span>Kirish</span>
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to={'/wishes'}>
              <FaRegHeart />
              <span>Sevimlilar</span>
              <sup className='cat'>{wishes.length}</sup>
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to={'/cart'}>
              <IoCartOutline />
              <span>Savat</span>
              <sup className='cat'>{cart.length}</sup>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;