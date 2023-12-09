import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UseMenu = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
      // console.log();
    },
  });

  return [menu, loading, refetch];
};

export default UseMenu;
