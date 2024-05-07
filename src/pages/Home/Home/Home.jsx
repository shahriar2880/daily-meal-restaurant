import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Blog from '../Blog/blog'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <Blog></Blog>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
    </div>
  )
}

export default Home