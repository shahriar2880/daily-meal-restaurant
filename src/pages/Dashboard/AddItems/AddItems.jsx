import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();

  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.display_url,
      };
      //menu response
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        //show success popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added to menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="what's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}

          <div className="form-control w-full mb-3">
            <div className="label">
              <label className="label-text">Recipe Name*</label>
            </div>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>

          {/* Category */}

          <div className="flex gap-3">
            <div className="form-control w-full">
              <div className="label">
                <label className="label-text">Category*</label>
              </div>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Please Select a Category!
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full ">
              <div className="label">
                <label className="label-text">Price*</label>
              </div>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>

          {/* Recipe Details */}

          <div className="form-control mb-3">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details..."
            ></textarea>
          </div>

          {/* file input from device */}

          <div className="w-full mb-3">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full"
            />
          </div>
          <button className="btn bg-yellow-500">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
