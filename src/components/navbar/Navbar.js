

// import React, { useState, useEffect } from 'react';
// import "./Navbar.css";
// import { IoSearch, IoCartOutline, IoHomeOutline } from "react-icons/io5";
// import { NavLink } from 'react-router-dom';
// import { FaRegUser, FaRegHeart } from "react-icons/fa";
// import { useSelector } from 'react-redux';
// // import { IoClose } from "react-icons/io5";
// import { TfiMenuAlt } from "react-icons/tfi"
// // import Catagory from '../catagory/Catagory';

// function Navbar({ data }) {
//   // const { pathname } = useLocation();

//   // if (pathname.includes('login')) {
//   //   return <></>;
//   // }

//   const [value, setValue] = useState('');
//   const [searchData, setSearchData] = useState([]);

//   useEffect(() => {
//     if (value.trim()) {
//       let filteredData = data.filter((item) =>
//         item.title.toLowerCase().includes(value.toLowerCase().trim())
//       );
//       setSearchData(filteredData);
//     } else {
//       setSearchData([]);
//     }
//   }, [value, data]);
//   // const Search = 
//   const wishes = useSelector((state) => state.wishes.value);
//   const cart = useSelector((state) => state.cart.value);
//   // const [modal, setModal] = useState(false)
//   // const openModal = () => {
//   //     setModal(!modal)
//   // }
//   return (
//     <div className='container'>
//       <div className='navbar'>
//         <h2 className='nav__logo'>
//           <NavLink to={'/'}>uzum market</NavLink>
//         </h2>




//         {/* 
//             <button className="btn_modal"
//                 onClick={openModal}
//             >
// openModal
// </button>
// {modal &&(
//      <div className="modal" onClick={openModal}>
//                 <div className="overly"  ></div>
//                 <div className="modal_container">
//                     <h2>hello modal</h2>
//                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto reiciendis voluptas necessitatibus, velit eum nam hic reprehenderit, voluptates totam facilis sequi, nostrum dolores accusamus at ut laudantium ipsa consequatur doloribus.</p>
//                     <button
//                      className='close_modal' 
//                      onClick={openModal}>
//                         Close
//                         </button>
//                         </div>
//                         </div>
//                       )} */}




//         <NavLink to={"/turkum"}  >

//           <button className='nav__category'>
//             <TfiMenuAlt />



//             <span>Katalog</span>



//           </button>
//         </NavLink>


//         <div className='nav__search'>
//           <input
//             className='imput'
//             value={value}
//             placeholder='Qidirish...'
//             onChange={(e) => setValue(e.target.value)}
//             type='text'
//           />
//           <button>
//             <IoSearch />
//           </button>
//           {value.trim() && (
//             <div className='nav__search-drop'>

//               {searchData.slice(0, 5).map((item) => (
//                 <NavLink to={`/product/${item.id}`} onClick={() => searchData('')}
//                 >

//                   <div
//                     // onClick={}
//                     key={item.id} className='nav__search-item'>
//                     <img className='images' src={item.url} alt='' />
//                     <div className=''>
//                       <p>{item.title}</p>
//                       <b>{item.price?.brm()} so'm</b>
//                     </div>
//                   </div>
//                 </NavLink>
//               ))}
//               {!searchData.length && (
//                 <div className='center'>
//                   <img
//                     className='noUndefoend'
//                     src='https://uzum.uz/static/img/penguin.a739ac8.png'
//                     alt=''
//                   />
//                   <p>Malumot yo'q</p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         <ul className='nav__collection'>


//           <li className="nav__item nav__home">
//             <NavLink to={"/"}>
//               <IoHomeOutline />
//               <span>Asosiy sahifa</span>
//             </NavLink>
//           </li>

//           <li className='nav__item'>
//             <NavLink to={'/login'}>
//               <FaRegUser />
//               <span>Kirish</span>
//             </NavLink>
//           </li>
//           <li className='nav__item'>
//             <NavLink to={'/wishes'}>
//               <FaRegHeart />
//               <span>Sevimlilar</span>
//               <sup className='cat'>{wishes.length}</sup>
//             </NavLink>
//           </li>
//           <li className='nav__item'>
//             <NavLink to={'/cart'}>
//               <IoCartOutline />
//               <span>Savat</span>
//               <sup className='cat'>{cart.length}</sup>
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { IoSearch, IoCartOutline, IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import "./Navbar.css";
import { useSelector } from 'react-redux';

function Navbar({ data }) {
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

  return (
    <div className='container'>
      <div className='navbar'>
        <h2 className='nav__logo'>
          <NavLink to={'/'}>uzum market</NavLink>
        </h2>
        <NavLink to={"/turkum"}>
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
                <NavLink
                  to={`/product/${item.id}`}
                  onClick={() => setValue('')}
                  key={item.id} className='nav__search-item'
                >
                  <img className='images' src={item.url} alt='' />
                  <div className=''>
                    <p>{item.title}</p>
                    <b>{item.price?.brm()} so'm</b>
                  </div>
                </NavLink>
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
          <li className="nav__item nav__home">
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
            <NavLink  to={'/cart'}>

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