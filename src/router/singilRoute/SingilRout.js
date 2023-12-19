import React from 'react';
import { useParams } from 'react-router-dom';
import './SingilRout.css';
import { toggleWishes } from '../../context/wishesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
// import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import yulduz from "../../assets/yulduz.png"
function SingilRout({ data }) {
  const wishes = useSelector((state) => state.wishes.value);
  const dispatch = useDispatch();

  const params = useParams();
  const oneItem = data.find((el) => el.id === params.id);
  
  if (!oneItem) {
    return <h1>404</h1>;
  }
  

  return (
    <div className="container">
      <div className="singil">
        <div className='singil_route'>
          <div className="right">
          <img  width={100}  className='foyizsiz' src={oneItem.url} alt="" />
          <img  width={100}  className='foyizsiz' src={oneItem.url} alt="" />
          <img  width={100}  className='foyizsiz' src={oneItem.url} alt="" />
          <img  width={100}  className='foyizsiz' src={oneItem.url} alt="" />
          </div>
          <div className="mains">

            {/* <GoChevronLeft className='ot' /> */}
          <img className='foyiz' src={oneItem.url} alt="" />
          {/* <GoChevronRight className='ot' /> */}
          
          </div>
        </div>
        <div className="singil_route_in">
          <div className="route">

          <p>  <img className='yulduz' src={yulduz} alt="" />  4.9 (284 baho) 2500 ta buyurtma</p>
          <div
            onClick={() => dispatch(toggleWishes(oneItem))}
            className="products__wishes_"  
          >
            {wishes?.some((item) => item.id === oneItem.id) ? (
              <FaHeart style={{ color: "var(--bg-py)" }} />
              ) : (
                <FaRegHeart />
                )}
                </div>
          </div>
          <p  className='title'>{oneItem.title}</p>
          <p className='display'>Sotuvchi:       bot</p>
          <p className='display'>Yetkazibberish:  <p>Bir kun bepul </p>   </p>
          <hr className='hr' />
          <p id='id'  className='display'>   <p>Rang:</p>    Iltimos qiymatini tanlang </p>
          <p className='display'>Miqdor:</p>
          <div className="qator">

          <div className="displays">

          <button>-</button>
          <span>2</span>
          <button>+</button>
          </div>
          <p>sotuvga 235 dona bor</p>
          </div>
          <p>Narhi:</p>
          <div className="display">

          <p> dan{oneItem.price?.brm()}so'm</p>
          <s>{oneItem.noprice?.brm()}so'm</s>
          <button className='btsA'>Katta sotular</button>
          </div>
          <div className='aka'> <p className='put'> Oyiga 233 478 so'mdan  <GoChevronRight/> </p> <p className='qrcode'>muddatli to'lov</p>  <GoChevronRight className='style'/> </div>
          <div className="luk">

          <button className='banner'> Savatga qo'shish </button>
          <button className='banners'> Tugmani 1 bosishda xarid qilish </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingilRout;

// import React, { useState } from 'react';
// import './SingilRout.css';
// import Archa from '../../assets/Archa.jpg';
// import Legion from '../../assets/Legion.jpg';
// import Soat from '../../assets/Soat.jpg';

// function SingilRout() {
//   const imgs = [
//     { id: 0, value: Archa },
//     { id: 1, value: Legion },
//     { id: 2, value: Soat },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex < imgs.length - 1 ? prevIndex + 1 : 0));
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imgs.length - 1));
//   };

//   const handleThumbnailClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="container">
//       <div className="gap">
//         <div className="flex_row">
//           {imgs.map((data, i) => (
//             <div className="thumbnail" key={i}>
//               <img
//                 className={currentIndex === i ? 'clicked' : ''}
//                 src={data.value}
//                 onClick={() => handleThumbnailClick(i)}
//                 height="70"
//                 width="100"
//                 alt={`Thumbnail ${i}`}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="cap">
//           <button className="btns" onClick={handlePrevious}>
//             &lt; {/* Previous */}
//           </button>
//           <img src={imgs[currentIndex].value} height="300" width="500" alt={`Image ${currentIndex}`} />
//           <button className="btns" onClick={handleNext}>
//             &gt; {/* Next */}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingilRout;
