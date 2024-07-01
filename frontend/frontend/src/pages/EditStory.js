import React, { useEffect,useState } from "react";
import "./AddStory.css";
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { Snackbar } from "@mui/material";

function EditStory(){

const navigate = useNavigate();
const [sid,setStoryID]= useState(100);
const [story,setStories]=useState();
const[username,setName] = useState();
const[caption,setCaption] = useState();
const[imgurl,setImageURL] = useState();
const [storyData,setStoryData] = useState();

const [notify, setnotify] = useState(false);
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    const URL_path = window.location.pathname;
    const sid = URL_path.substring(16);
     console.log("id:",sid)
     setStoryID(sid)
    axios.get(`http://localhost:8080/story/get/${sid}`)
    .then(response =>{
        setStoryData(response.data);
        setName(response.data?.username);
        setCaption(response.data?.caption);
        setImageURL(response.data?.imgurl);
        setStoryID(response.data?.sid);

        console.log(response.data)
       
    }
        )
    .catch(error => console.error(error));

  }, []);

const handleSubmit= (event) =>{
    const story ={
        username:username,
        imgurl:imgurl,
        caption:caption

        
    }
    const url = `http://localhost:8080/story/update/${sid}`;
    return axios.put(url, story)
      .then(response => {
        setStories(response.data);
        setnotify(true)
        // navigate('/Home/Stories')

        return response.data;

      })
      .catch(error => {
        console.error(error);
      });
  
}

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setnotify(false);
    }; 

return(
    <>
    <Snackbar open={notify} autoHideDuration={2500} onClose={handleClose}>
    <Alert severity="success" onClose={handleClose} sx={{ width: '100%' }}>
        The Story was Successfully Updated !
        </Alert>
     </Snackbar>
    <h1 >Edit your Story</h1>
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
            UserName:
                <input 
                    type="text" 
                    name="name" 
                    value={username}
                    onChange={(event) => setName(event.target.value)}
                />
            </label>
            <br />
            <label>
            Caption:
                <input 
                    type="text" 
                    name="subject" 
                    value={caption}
                    onChange={(event) => setCaption(event.target.value)}
                />
            </label>
            <br />
            <label>
            ImageURL:
                <input 
                    type="text" 
                    name="subject" 
                    value={imgurl}
                    onChange={(event) => setImageURL(event.target.value)}
                />
            </label>
            <br />
            <input type="submit" value="Update" />
        </form>
        </div>
    </>
)

}

export default EditStory;