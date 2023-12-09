import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UseAxios from "../../../Hooks/UseAxios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const menuItem = useLoaderData();
  console.log(menuItem);
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
      const updateItem = {
        name: data.name,
        recipe: data.recipe,
        category: data.category,
        price: parseFloat(data.price),
        image: response.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(
        `/menu/${menuItem._id}`,
        updateItem
      );
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "  Update successfully complete",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Update an Item"}
        subheading={"Refresh Info"}
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
                defaultValue={menuItem?.name}
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
                  defaultValue={menuItem?.category}
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
                  defaultValue={menuItem.price}
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
              defaultValue={menuItem.recipe}
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

export default UpdateItem;
