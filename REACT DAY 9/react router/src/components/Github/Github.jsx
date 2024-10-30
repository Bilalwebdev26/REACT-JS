import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Bilalwebdev26")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center text-white m-4 bg-gray-600 p-4 text-3xl">
      GitHub Followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default Github;

export const githubinfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Bilalwebdev26");
  return response.json();
};
