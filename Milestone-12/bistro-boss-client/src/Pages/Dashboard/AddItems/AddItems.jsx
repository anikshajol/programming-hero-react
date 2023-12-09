import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UseAxios from "../../../Hooks/UseAxios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = UseAxios();
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };

    const response = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);

    if (response.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        category: data.category,
        price: parseFloat(data.price),
        image: response.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your data added successfully complete",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subheading={"Whats new"}
      ></SectionTitle>

      <div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          {/* add recipe name */}
          <div className="flex flex-wrap gap-5 mb-6">
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text"> Recipe name*</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered input-warning w-full  "
              />
            </div>

            <div className="flex gap-12 w-full">
              {/* category */}
              {/* select category */}

              {/* daisy ui */}
              <div className="form-control w-1/2  ">
                <label className="label">
                  <span className="label-text"> Select Category*</span>
                </label>
                <select
                  defaultValue={"default"}
                  {...register("category", { required: true })}
                  className="select select-error w-full  "
                >
                  <option disabled value={"default"}>
                    Select a category
                  </option>
                  <option value={"salad"}>Salad</option>
                  <option value={"pizza"}>Pizza</option>
                  <option value={"soup"}>Soup</option>
                  <option value={"dessert"}>Dessert</option>
                  <option value={"drinks"}>Drinks</option>
                </select>
              </div>
              {/* price */}

              <div className="form-control w-1/2  ">
                <label className="label">
                  <span className="label-text"> Price*</span>
                </label>
                <input
                  {...register("price", { required: true })}
                  type="text"
                  placeholder="Price"
                  className="input input-bordered input-warning w-full  "
                />
              </div>
            </div>
          </div>

          <div className="form-control w-full mb-5">
            <label className="label">
              <span className="label-text"> Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea  textarea-primary"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered file-input-error w-full max-w-xs"
            />
          </div>
          <div>
            <button className="btn btn-ghost">
              Add Item <FaUtensils></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
