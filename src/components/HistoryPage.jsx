import React from "react";

const getCommits = async(owner, repo) => {
    try{
        const res = await fetch(`${API_URL}/repos/${owner}/${repo}/commits`);
    } catch(err){
        console.error("Error in fetching commitd", err);
    }
    return res.json();
}

export default getCommits;;