import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';


const LandingPage = () => {
    const [userName, setUserName] = useState('');
    //const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //navigate(`/repositories/${userName}`); 
        {/*if(userName.trim() !== ''){
            navigate(`/repositories/${userName}`);
        } */}
    }

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
                    <button type="submit" onClick={handleSubmit}>Explore the repos</button>
                </form>
            </div>
        </div>
    )

}

export default LandingPage;