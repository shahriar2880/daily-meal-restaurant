import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === 'popular');
  return (
    <section className='mb-5'>
        <SectionTitle
        subHeading="Check it out"
        heading= "From our Menu"
        ></SectionTitle>
        <div className='grid md:grid-cols-2 gap-5'>
            {
                popular.map(item=><MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>
        <div className='text-center mt-3'>
        <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
        </div>
    </section>
  )
}

export default PopularMenu