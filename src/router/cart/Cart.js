



import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import CartProducts from '../../components/cart-product/CartProducts';
function Cart() {
  const cart = useSelector(s => s.cart.value)
  console.log(cart);

  return (
    <div className='container'>
      {
        !cart.length ?
        <Empty
        title="Savatda hozircha mahsulot yoʻq"
        url="https://uzum.uz/static/img/shopocat.490a4a1.png"
        desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
        btnTitle="Bosh sahifa"
        link="/"
      />
     :
<CartProducts data={cart} />}
    </div>
  )
}

export default Cart





// import React from 'react'
// import Empty from '../../components/empty/Empty'
// import CartProducts from '../../components/cart-product/CartProducts';
// function Cart() {
//   const cart = true
//   console.log(cart);

//   return (
//     <div className='container'>
//       {
//         !cart ?
//         <Empty
//         title="Savatda hozircha mahsulot yoʻq"
//         url="https://uzum.uz/static/img/shopocat.490a4a1.png"
//         desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
//         btnTitle="Bosh sahifa"
//         link="/"
//       />
//      : 
// <CartProducts/>
//     }

    

//     </div>
//   )
// }

// export default Cart











