import React, { useEffect, useState } from "react";
import "./AddStory.css";
import { useNavigate, useParams } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
import { Snackbar } from "@mui/material";



function EditComment() {
    const navigate = useNavigate();
    const [cid, setCommentID] = useState();
    const [comment, setComment] = useState();
    const [commentData, setCommentData] = useState();
    const [notify, setnotify] = useState(false);

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    useEffect(() => {
        const URL_path = window.location.pathname;
        const cid = URL_path.substring(18);
        console.log("id:", cid)
        setCommentID(cid)
        axios.get(`http://localhost:8080/comment/get/${cid}`)
            .then(response => {
                setCommentData(response.data);
                setComment(response.data?.comment);
                console.log(response.data)

            }
            )
            .catch(error => console.error(error));

    }, []);

    const handleSubmit = async (event) => {
        const post = {
            comment: comment,

        }
        const url = `http://localhost:8080/comment/update/${cid}`;
        return axios.put(url, post)
            .then(response => {
                setComment(response.data);
                setnotify(false)
                navigate('/Home/CommentList')

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

    return (
        <>
            <Snackbar open={notify} autoHideDuration={1500} onClose={handleClose}>
                <Alert severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                    Comment details Successfully Updated !
                </Alert>
            </Snackbar>
            <h1>Edit Comment</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Comment:
                        <input
                            type="text"
                            name="comment"
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                        />
                    </label>



                    <br />
                    <input type="submit" value="Edit Comment" />
                </form>
            </div>
        </>
    )






}
export default EditComment;
















