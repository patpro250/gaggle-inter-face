// // hooks/useLibrarians.ts
// import useSWR from "swr";
// import { getApiClient } from "../g/schools/axios";

// const fetchLibrarians = async () => {
//   const api = await getApiClient(); // This is safe inside SWR
//   const res = await api.get("/librarians");
//   return res.data;
// };

// export default function useLibrarians() {
//   const { data, error, isLoading } = useSWR("librarians", fetchLibrarians);

//   return {
//     librarians: data || [],
//     loading: isLoading,
//     error,
//   };
// }
