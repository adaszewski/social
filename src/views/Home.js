import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import AddPost from "../components/AddPost";
import PopUp from "./PopUp";
import FollowRecommendations from "../components/FollowRecommendations";


const Home = (props) => {
    const [posts, setPosts] = useState([])


    const getLatestPosts = () => {
        axios.post("https://akademia108.pl/api/social-app/post/latest")
            .then((req) => {
                setPosts(req.data);
                console.log(req.data)
            })
            .catch((error) => {
                console.error(error);
            })
    }



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

   
    return (


        <div className="home">
            {!props.user && props.showPopUp ? <PopUp showPopUp={props.showPopUp} user={props.user} setUser={props.setUser} closeClick={props.closeClick} /> : ""}
            {props.user && <FollowRecommendations user={props.user} getLatestPosts={getLatestPosts} posts={posts}  /> }
            {props.user && <AddPost getPrevPosts={getPrevPosts} />}

            <div className="socialPost">
                {posts.map((post) => {
                    return <Post post={post} key={post.id}user={props.user} getLatestPosts={getLatestPosts}/>;
                })}

                <button onClick={getNextPosts}> Załaduj więcej postów</button>
            </div>
        </div >
    )
}
export default Home; 