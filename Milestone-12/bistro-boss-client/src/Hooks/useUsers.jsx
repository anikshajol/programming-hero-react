import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import useAuth from "./useAuth";

const useUsers = () => {
  const axiosSecure = UseAxios();
  const { loading } = useAuth();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["allUsers"],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });

  return [users, refetch];
};

export default useUsers;
