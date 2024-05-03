import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import GetRespositories from "./subComponents/ListofRepos";
import axios from "axios";
import Repository from "./Repository";


const LandingPage = () => {
    const [userName, setUserName] = useState('');
    const [repos, setRepos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    const handleClick = async() => {
        console.log(userName);
        try{
        const res = await axios(`https://api.github.com/users/${userName}`);
        setRepos(res);
        } catch(err) {
            console.error(err);
        }
    }

    console.log(repos);

    return(
        <div>
            <div className="LandingPage">
                <h2>Welcome to Github Clone</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Enter Github username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <button type="submit" onClick={handleClick}>Explore the repos</button>
                </form>
                
            </div>
            <Repository />
        </div>
    )

}

export default LandingPage;