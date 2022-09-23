import { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
    const [posts, setPosts] = useState([])

    const getLatestPosts = (props) => {
        axios.post("https://akademia108.pl/api/social-app/post/latest")
            .then((req) => {
                setPosts(req.data)

                console.log(req.data)
            })
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        getLatestPosts()

    }, [])

    console.log(getLatestPosts)

    return (
        <div className="post" >
        <div className="content"></div>
        <div className="created_at"></div>
        <div className="id"> </div>
        <div className="likes"></div>
        <div className="user"></div>
        </div>
    )
}

export default Post;