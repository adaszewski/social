import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './AddPost.css'

const AddPost = (props) => {
    const [addPost, setNewPost] = useState('');

    // const [loginMessage, setLoginMessage] = useState("");

    const handleInputChange = (e) => {

        const target = e.target

        setNewPost({
            ...addPost,
            content: target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        let postNew = {
            content: addPost.content
        }

        // console.log(newUser)

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
            })

            .catch((error) => {
                console.error(error);
            })
    };

    return (
        <form onSubmit={handleSubmit} >
            <h2> Dodaj nowy post </h2>


            <textarea onChange={handleInputChange} id="content" name="content" rows="4" cols="50"> </textarea>
                <button> Wyślij </button>
        </form>


    );
}


export default AddPost;