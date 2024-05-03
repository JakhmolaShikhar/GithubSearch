import React from 'react';


const GetRespositories = async(userName) => {
    try{
        const res = await fetch(`${API_URL}/users/${userName}/repos`);
        return res.json();
    } catch(err){
        console.error("Error in fetching", err);
    }
    
    return(
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default GetRespositories;