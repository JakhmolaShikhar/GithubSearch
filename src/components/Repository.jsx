import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Repository = () => {
    const [user, setUser] = useState(null);
    const [repositories, setRepositories] = useState([]);
    const {userName} = useParams();

    useEffect( () => {
        const fetchUser = async () =>{
            try{
                const res = await fetch(`${APIURL}/repositories`);
                setUser(res.data);

            } catch(err){
                console.error("Error in fetching", err);
            }
        }
    })

    return(
        <div>
            <h3>Repositories for {userName}</h3>
            <ul>
                {repositories.map((repo) => (
                    <li key={repo.id}>
                        <strong>{repo.name}</strong> :{repo.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Repository;