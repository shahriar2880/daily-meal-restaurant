import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete('/users').then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="">
      <div className="flex justify-evenly mb-8">
        <h2 className="text-3xl uppercase text-left">
          Total Users: {users.length}
        </h2>
      </div>
      <div className="overflow-x-auto text-center">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index +1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn  btn-md bg-orange-700"
                  >
                    <FaUsers className="text-white text-2xl"></FaUsers>
                  </button>
                </td>
                <td>
                <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn  btn-md bg-orange-700"
                  >
                    <FaTrashAlt className="text-white"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;