import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
    const {name, image, price, recipe} = item;
    const {user} = useAuth()
    const navigate = useNavigate()
    const handleAddToCart = food =>{
        if(user && user.email){

        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, LogIn!"
              }).then((result) => {
                if (result.isConfirmed) {
                  //send the user to the login page
                  navigate('/login')
                }
              });
              
        }
    }
    return (
        <div className="card w-auto bg-base-200 shadow-2xl mb-5">
            <figure className="rounded mt-4"><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-3 mr-4 mt-8 rounded-md px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>{handleAddToCart(item)}} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
