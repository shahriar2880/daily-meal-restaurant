import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu =()=>{
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     fetch('http://localhost:5050/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data);
    //         setLoading(false);
    //     })
    // },[])
    const axiosPublic = useAxiosPublic();

    const { refetch, data: menu = [], isPending: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })
    return[menu,loading, refetch]
}
export default useMenu;