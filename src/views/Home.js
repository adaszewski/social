import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";


const Home = () => {
    const [posts, setPosts] = useState([])

    const getLatestPosts = () => {
        axios.post("https://akademia108.pl/api/social-app/post/latest")
            .then((req) => {
                setPosts(req.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    useEffect(() => {
        getLatestPosts()
    }, []);

console.log(posts)

    return (
        <div className="home">
            <div className="socialPost">
                {posts.map((post) => {
                    return <Post post={post} />;
                })}
            </div>
        </div >
    )
}
export default Home; 