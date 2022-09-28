import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './AddPost.css'

const AddPost = (props) => {

    const [postContent, setNewPost] = useState('');


    const handleInputChange = (e) => {
        const target = e.target
        setNewPost(target.value)
    }

    const handleSubmitAddPost = (e) => {
        e.preventDefault()
        let postNew = {
            content: postContent
        }
        if (!postContent) {
            return
        }

        let axiosConfig = {
            "headers": {
                "Content-Type": 'application/json',
                "Accept": 'application/json',

            }
        };

        axios
            .post(
                "https://akademia108.pl/api/social-app/post/add",
                JSON.stringify(postNew),
                axiosConfig
            )
            .then((req) => {
                let reqData = req.data;
                console.log(reqData);
                props.getPrevPosts();
            })

            .catch((error) => {
                console.error(error);
            })
    };

    return (
        <form onSubmit={handleSubmitAddPost}  >
            <h2> Dodaj nowy post </h2>
            <textarea onChange={handleInputChange} id="content" name="content" rows="4" cols="50" value={postContent}> </textarea>
            <button> Wyślij </button>
        </form>


    );
}


export default AddPost;