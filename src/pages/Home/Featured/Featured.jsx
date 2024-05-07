import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item text-sky-800 pt-2 mt-8">
        <SectionTitle
        subHeading="check it out"
        heading="Featured Menu"
        ></SectionTitle>
        <div className="md:flex justify-center items-center py-8 pt-2 px-16 mb-8">
            <div>
                <img src={featuredImg} alt=""/>
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2024</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button style={{padding:"10px 20px", boxShadow:"0 5px 0 black", width:"150px"}} className="btn">Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Featured