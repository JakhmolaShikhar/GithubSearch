import React from 'react';


function FileBrowser ({ files}){
    const GetFiles = async(owner, repo, path) => {
        try{
            const res = await fetch(`${APIURL}/repos/${owner}/${repo}/contents/${path}`);
            const repoContent= res.content;
            return repoContent;
        }catch(err){
            console.error("Error in fetching file", err);
        }
        
    }

    const DownloadFile = async(owner, repo, ref) => {
        try{
            const res = await fetch(`${APIURL}/repos/${owner}/${repo}/zipball/${ref}`);
        } catch(err){
            console.error("Error in downloading the file", err);
        }
        return res.json();
    }
    const handleEnter = (e) => {
        if(e.key === "Enter"){
            DownloadFile();
        }
    }

    return(
        <div>
            <ul>
                <li> {GetFiles}
                </li>
            </ul>
            <button type='submit' onClick={DownloadFile} onKeyDown={handleEnter}>Download</button>
            

        </div>
    )

}


export default FileBrowser;