import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Blog from '../Blog/blog'
import Testimonials from '../Testimonials/Testimonials'
import ChefRecommends from '../ChefRecommends/ChefRecommends'
import CallUs from '../CallUs/CallUs'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <Blog></Blog>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <ChefRecommends></ChefRecommends>
        <Featured></Featured>
        <Testimonials></Testimonials>
    </div>
  )
}

export default Home