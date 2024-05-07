import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item=> item.category === 'popular')
            setMenu(popularItems)})
    },[])
  return (
    <section className='mb-5'>
        <SectionTitle
        subHeading="Check it out"
        heading= "From our Menu"
        ></SectionTitle>
        <div className='grid md:grid-cols-2 gap-5'>
            {
                menu.map(item=><MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>
        <div className='text-center mt-3'>
        <button style={{padding:"10px 20px", boxShadow:"0 5px 0 black", width:"150px"}} className="btn">View Full Menu</button>
        </div>
    </section>
  )
}

export default PopularMenu