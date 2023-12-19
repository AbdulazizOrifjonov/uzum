import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products';
function Wishes() {
  const wishes = useSelector(state => state.wishes.value)
  console.log(wishes);
  
  return (
    <div className='container'>
      {
        !wishes.length ? 
         <Empty
        title="Sizga yoqqanini qoʻshing"
        url="https://uzum.uz/static/img/hearts.cf414be.png"
        desc="Mahsulotdagi belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
        btnTitle="Akkountga kirish"
        link="/login"
      /> :
      <Products data={wishes}/>
    }



    

    </div>
     
  )
}

export default Wishes