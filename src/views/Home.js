import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import AddPost from "../components/AddPost";
import PopUp from "./PopUp";


const Home = (props) => {
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

   
    // console.log(posts)

    const getNextPosts = (e) => {


        axios.post("https://akademia108.pl/api/social-app/post/older-then",
            { date: posts[posts.length - 1].created_at }
        )
            .then((req) => {
                // console.log(posts)
                let reqData = req.data
                setPosts(posts.concat(reqData));
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const getPrevPosts = () => {
        axios
            .post("https://akademia108.pl/api/social-app/post/newer-then",
                { date: posts[0].created_at }
            )
            .then((req) => {
                // console.log(posts)
                let reqData = req.data
                console.log(reqData)
                setPosts(reqData.concat(posts))
            })
            .catch((error) => {
                console.error(error);
            })
    }


    useEffect(() => {
        getLatestPosts()
    }, [props.user]);

    console.log(posts)


    return (


        <div className="home">
            {!props.user && props.showPopUp ? <PopUp user={props.user} setUser={props.setUser} /> : ""}
            {props.user ? <AddPost  getPrevPosts={getPrevPosts} /> : ""}
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