import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import GetRespositories from "./subComponents/ListofRepos";
import axios from 'axios';
import Repository from "./Repository";



const LandingPage = () => {
    const [userName, setUserName] = useState('');
    const [repos, setRepos] = useState([]);
 

    const handleClick = async() => {
        //console.log(userName);
        
        try{
        const res = await axios(`https://api.github.com/users/${userName}/repos`);
        setRepos(res);
        } catch(err) {
            console.error(err);
        }
    }

    const handleEnter = (e) => {
        if(e.key === "Enter"){
            handleClick();
        }
    }

    const handleRepos = async() => {
        console.log();
        try{
            const res = await axios(`https://api.github.com/users/${usrname}/`)
        } catch(err){
            console.log(err);
        }
    }

    console.log(repos);

    return(
        <div>
            <div className="LandingPage">
                <h2>Welcome to Github Clone</h2>
                <input 
                    type="text"
                    placeholder="Enter Github username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleEnter}
                />
                <button type="submit" onClick={handleClick} >Explore the repos</button> 
            </div>
            <Repository repos = {repos}/>
            <GetRespositories repos = {repos} />
        </div>
    )
}

export default LandingPage;