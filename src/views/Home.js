import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";




const Home = () => {
const [posts, setPosts ] = useState([]) 

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
        <div className="home">
            <h2> Home</h2>
         <Post />
        </div>
    )
}
export default Home; 