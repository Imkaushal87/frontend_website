import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    // Debugging: Check if data is received
    console.log("GitHub Data:", data);

    // Handle error cases
    if (!data || data.error) {
        return <p className="text-center text-red-500 text-xl mt-10">⚠️ Error loading GitHub data. Please try again later.</p>;
    }

    return (
        <div className="flex items-center bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            {/* Left Side - Profile Image */}
            <div className="flex-shrink-0">
                <img 
                    src={data.avatar_url} 
                    alt="GitHub Avatar" 
                    width={150} 
                    className="rounded-full border-4 border-white shadow-lg"
                />
            </div>

            {/* Right Side - User Info */}
            <div className="ml-6">
                <h1 className="text-3xl font-bold mb-2">{data.login}</h1>
                <p className="text-lg text-gray-300 mb-1">
                    👥 Followers: <span className="font-semibold">{data.followers}</span>
                </p>
                <p className="text-lg text-gray-300 mb-1">
                    👤 Following: <span className="font-semibold">{data.following}</span>
                </p>
                <p className="text-lg text-gray-300 mb-1">
                    📂 Public Repos: <span className="font-semibold">{data.public_repos}</span>
                </p>
                <p className="mt-3">
                    🔗 <a href={data.html_url} target="_blank" rel="noopener noreferrer" 
                        className="text-blue-400 underline hover:text-blue-300">
                        Visit GitHub Profile
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/Imkaushal87');

        // Debugging: Log response status
        console.log("GitHub API Response:", response.status);

        if (!response.ok) {
            console.error("GitHub API Error:", response.statusText);
            return { error: true }; // Return error object
        }

        return await response.json();
    } catch (error) {
        console.error("Network Error:", error);
        return { error: true }; // Return error object
    }
};



// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

// function Github() {
//     const data = useLoaderData();  // GitHub user data from loader
//     const [userData, setUserData] = useState(null); // Renamed state variable

//     useEffect(() => {
//         fetch("https://api.github.com/users/Imkaushal87")
//             .then((response) => response.json())
//             .then((user) => {
//                 console.log("GitHub User Data:", user);
//                 setUserData(user);  // Update state with API data
//             })
//             .catch((err) => console.error("Error fetching data:", err));
//     }, []);

//     if (!userData) return <p>Loading...</p>;

//     return (
//         <div>
//             <h1>GitHub User Information</h1>
//             <p>Followers: {userData.followers}</p>
//             <p>Following: {userData.following}</p>
//             <p>Public Repos: {userData.public_repos}</p>
//             <p>Profile: <a href={userData.html_url} target="_blank" rel="noopener noreferrer">{userData.login}</a></p>
//         </div>
//     );
// }

// export default Github;





