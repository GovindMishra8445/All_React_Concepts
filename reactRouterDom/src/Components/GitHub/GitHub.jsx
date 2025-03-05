import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //     fetch("https://api.github.com/users/govindmishra8445")
  //     .then(response => response.json())
  //     .then(data =>{
  //         console.log(data);
  //         setData(data)
  //     })

  // }, [])

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="text-center bg-white rounded-lg shadow-lg shadow-black p-6">
        <h1 className="text-2xl font-bold mb-4">My GitHub Profile</h1>
        <p className="text-xl mb-2">Followers: {data.followers}</p>
        <p className="text-xl mb-2">Following: {data.following}</p>
        <div className="flex items-center justify-center mt-4">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-48 h-48 rounded-full shadow-xl shadow-black object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/govindmishra8445");
  return response.json();
};
