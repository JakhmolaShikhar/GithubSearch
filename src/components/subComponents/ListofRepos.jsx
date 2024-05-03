import React from 'react';


const getRespositories = async(userName) => {
    try{
        const res = await fetch(`${API_URL}/users/${userName}/repos`);
    } catch(err){
        console.error("Error in fetching", err);
    }
    return res.json();
}

export default getRespositories;