import React from 'react';


const FileBrowser = ({ files}) => {
    

    const GetFiles = async(owner, repo) => {
        try{
            const res = await fetch(``);
            return res.json();
        }catch(err){
            console.error("Error in fetching file", err);
        }
        
    }

    const DownloadFile = async(owner, repo, commits) => {
        try{
            const res = await fetch(``);
        } catch(err){
            console.error("Error in downloading the file", err);
        }
        return res.json();
    }

    return(
        <div>

        </div>
    )

}


export default FileBrowser;