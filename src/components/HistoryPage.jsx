import React from "react";

const GetCommits = async(owner, repo) => {
    try{
        const res = await fetch(`${API_URL}/repos/${owner}/${repo}/commits`);
        return res.json();
    } catch(err){
        console.error("Error in fetching commitd", err);
    }

    return(
        <>
        <p>{Getcommits}</p>
        </>
    );
    
}

export default GetCommits;;