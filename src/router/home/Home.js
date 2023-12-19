import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Products from '../../components/products/Products'

function Home({data}) {
  return (
    <div className='container'>
      <Carousel/>
      <Products data={data}/>
    </div>
  )
}

export default Home