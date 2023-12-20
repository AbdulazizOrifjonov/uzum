// import React, { useState } from 'react';
// import "./CartProducts.css";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { incCart, decCart, removeCart , removeAllCart} from '../../context/cartSlice';
// import { useDispatch } from 'react-redux';
// // import { Link } from 'react-router-dom';
// // import { act } from '@testing-library/react';

// function CartProducts({ data }) {

//   const BOT_TOKEN = "6833124360:AAH8znokgWLw8i8whkLtPLJzMGhxZm9eQYQ"
//   // const BOT_TOKEN = "6804708915:AAGjUkRD3GXraIIsT6tNXCS2O-kVZmCbKic"
//   const CHAT_ID = "-4012230912"
  //  const PERSONAL_ID = "1594150529"
//   // https://api.telegram.org/bot6833124360:AAH8znokgWLw8i8whkLtPLJzMGhxZm9eQYQ/getUpdates

//   const dispatch = useDispatch();
//   const [fulName, setFullName] = useState("")
//   const [tel, setTel] = useState("")
//   const [addRes, setAddRes] = useState("")
//   const [message, setmessage] = useState("")
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(tel);
//     let order = "Buyurtmachi: %0A"
//     order += `<b>ismi</b>:  ${fulName}  %0A`
//     order += `<b>telefon</b>:  ${tel} %0A`
//     order += `<b>manzil</b>:  ${addRes} %0A`
//     order += ` <b>Xabar</b>:  ${message} %0A`


//     data.foreach((el, act)=>{

//     })



// // order += `jami: ${data.reduce((a,b)=>a+b.qrice*b.quantity)}`
//     const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${order}&parse_mode=html`

//     let api = new XMLHttpRequest()
//     api.open("GET", url, true)
//     api.send()
//     dispatch(removeAllCart())

//   }

//   // Calculate total price
//   const total = data.reduce((kopaytir, item) => kopaytir + item.price * item.quantity, 0);

//   return (
//     <div className='cart__wrapper'>

//       <div className="cart__products">
//         {data?.map(el => (
//           <div className='cart__item' key={el.id}
//           >
//             {/* <Link to={`product/${el.id}`}
//             onClick={()=> data("")}
//             > */}
//             <div className="cart__item-left">
//               <img src={el.url} alt="" />
//               <div className="div__cart">
//                 <h4>{el.title}</h4>
//                 <p>Kategoriya: {el.category}</p>
//               </div>
//             </div>
//             <div className="cart__item_right">
//               <div className="cart__counter">
//                 <button disabled={el.quantity <= 1} onClick={() => dispatch(decCart(el))}>-</button>
//                 <span>{el.quantity}</span>
//                 <button onClick={() => dispatch(incCart(el))}>+</button>
//               </div>
//               <div className="cart__name">
//                 <button onClick={() => dispatch(removeCart(el))} className='cart_delete'><RiDeleteBin6Line /></button>
//                 <h3>{el.price?.brm()}s'om</h3>
//                 <p>{(el.price * el.quantity)?.brm()} so'm</p>
//               </div>
//             </div>
//             {/* </Link> */}
//           </div>
//         ))}
//       </div>
//       <div className="cart__register">
//         <div className="cart__narx">
//           <div className="logn">
//             <h3>Quydagi malumotlarni to'ldiring:</h3>
//           </div>
//           <div className="logn__input">
//             <form className="logn__input" onSubmit={handleSubmit} action="">
//               <input value={fulName} onChange={e => setFullName(e.target.value)} className="toldir" type="text" placeholder="To'liq ismingiz" />
//               <input value={tel} onChange={e => setTel(e.target.value)} className="toldir" type="text" placeholder='+998 000 0000' />
//               <input value={addRes} onChange={e => setAddRes(e.target.value)} className="toldir" type="text" placeholder='Manzilingiz' />
//               <input value={message} onChange={e => setmessage(e.target.value)} className="toldir" type="text" placeholder="Habar yo'llash" />
//               <div className="narx">
//                 <h4>Umumiy narh</h4> <h3>${total.toFixed(2)}</h3>
//               </div>
//               <button className='rasmiy'><h3>Rasmilashtirishga o'tish</h3></button>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartProducts;




import React, { useState } from 'react';
import "./CartProducts.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { incCart, decCart, removeCart, removeAllCart } from '../../context/cartSlice';
import { useDispatch } from 'react-redux';

function CartProducts({ data }) {
  const BOT_TOKEN = "6833124360:AAH8znokgWLw8i8whkLtPLJzMGhxZm9eQYQ";
  const CHAT_ID = "-4012230912";
  // const PERSONAL_ID = "1594150529"       


  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [tel, setTel] = useState("");
  const [addRes, setAddRes] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let order = " <b>Buyurtmachi:</b> %0A"
    order += ` <b>Ismi:</b> ${fullName} %0A`
    order += ` <b>Telefon:</b> ${tel} %0A`
    order += ` <b>Manzil:</b> ${addRes} %0A`
    order += ` <b>Xabar:</b> ${message} %0A%0A;`

    data.forEach((el) => {
      order += "<b>Nomi:</b>"
     order += `  ${ el.title } | <b>Narxi:</b>`
     order += `   ${ el.price } | <b>Soni:</b>`
     order += `    ${ el.quantity } | <b>Yig'indisi:</b>`
     order += `     ${ el.price * el.quantity } %0A`
     order += `     ${ el.url } %0A`
    });

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${order}&parse_mode=html`

      let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    dispatch(removeAllCart());
  };

  const total = data.reduce((kopaytir, item) => kopaytir + item.price * item.quantity, 0);

  return (
    <div className='cart__wrapper'>
      <div className="cart__products">
        {data?.map((el) => (
          <div className='cart__item' key={el.id}>
            <div className="cart__item-left">
              <img src={el.url} alt="" />
              <div className="div__cart">
                <h4>{el.title}</h4>
                <p>Kategoriya: {el.category}</p>
              </div>
            </div>
            <div className="cart__item_right">
              <div className="cart__counter">
                <button disabled={el.quantity <= 1} onClick={() => dispatch(decCart(el))}>-</button>
                <span>{el.quantity}</span>
                <button onClick={() => dispatch(incCart(el))}>+</button>
              </div>
              <div className="cart__name">
                <button onClick={() => dispatch(removeCart(el))} className='cart_delete'><RiDeleteBin6Line /></button>
                <h3>{el.price?.toFixed(2)} so'm</h3>
                <p>{(el.price * el.quantity)?.toFixed(2)} so'm</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart__register">
        <div className="cart__narx">
          <div className="logn">
            <h3>Quydagi malumotlarni to'ldiring:</h3>
          </div>
          <div className="logn__input">
            <form className="logn__input" onSubmit={handleSubmit}>
              <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className="toldir" type="text" placeholder="To'liq ismingiz" />
              <input required value={tel} onChange={(e) => setTel(e.target.value)} className="toldir" type="text" placeholder='+998 000 0000' />
              <input required value={addRes} onChange={(e) => setAddRes(e.target.value)} className="toldir" type="text" placeholder='Manzilingiz' />
              <input required value={message} onChange={(e) => setMessage(e.target.value)} className="toldir" type="text" placeholder="Habar yo'llash" />
              <div className="narx">
                <h4>Umumiy narh</h4> <h3>{total?.toFixed(2)} so'm</h3>
              </div>
              <button type="submit" className='rasmiy'><h3>Rasmilashtirishga o'tish</h3></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;