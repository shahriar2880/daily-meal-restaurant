
const FoodCard = ({ item }) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card w-auto bg-base-200 shadow-2xl mb-5">
            <figure className="rounded mt-4"><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-3 mr-4 mt-8 rounded-md px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
