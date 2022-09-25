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

    const getNextPosts = (e) => {
        e.preventDefault()
        let postDate = { date: "2020-03-05T07:02:14.000000Z" }

        axios.post("https://akademia108.pl/api/social-app/post/newer-then",
            JSON.stringify(postDate)
        )
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
                    return <Post post={post} key={post.id} />;
                })}
                <button onClick={getNextPosts}> Załaduj więcej postów</button>
            </div>
        </div >
    )
}
export default Home; 