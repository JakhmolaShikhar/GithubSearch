import React, { useEffect, useState } from 'react';
import {Card, CardContent, CardHeader, CardDescription, Image} from 'semantic-ui-react'
import FileBrowser from './FileBrowser';
import { Link,useNavigate } from 'react-router-dom';

function Repository ({repos}){

    const navigate = useNavigate();
    const listRepos = repos.length !== 0 ? 
    (repos.data.slice(0,20).map((item) => 
        <li key={item.id}><a> {item.name}</a></li>)
    ) :( <li> no repos found</li>);

    const user = async() => {
        try{
            const uName = await fetch(`${APIURL}/user/${userName}`)
            const repos_url =repos(uName.username.avatar_url);
        } catch(err){
            console.error(err);
        }
    }

    const userAvatar = user.length !==0 ? 
        (user.data.map((item) => (<div className='dataitem'>
            <img src={item.owner.avatar_url} alt='image' />
                </div> ))): (<div></div>);

    const [gitUsername, setGitUsername] = useState({});

    useEffect(() => {
        const getUser = async () => {
          const res = await fetch.get(
            `https://api.github.com/users/${username}`
          );
          console.log("USER IS HERE", res.data);
          setGitUsername(res.data);
          return res.data;
        };
        getUser().catch((e) => console.error(e));
      }, []);

    return(
        <div>
            <div className='Repository-container'>
            <ul ><a href={listRepos}  onClick={() => {navigate('files')}}>{listRepos}</a> </ul>
            {/*<img
                src={username.avatar_url}
                className="user-avatar-img"
                alt="user-img"
            /> */}
            </div>
        </div>
    )
}

export default Repository;