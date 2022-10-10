import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './FollowRecommendations.css';

const FollowRecommendations = (props) => {
    const [recommendations, setRecommendations] = useState([])

    const getRecommendations = () => {

        axios
            .post(
                "https://akademia108.pl/api/social-app/follows/recommendations",
            )
            .then((req) => {
                // setRecommendations(req.data);
                console.log(req.data)
            })
            .catch((error) => {
                console.error(error);
            });
    };
    // console.log(recommendations)


    useEffect(() => {
        getRecommendations();
    }, [props.posts]
    )

    const follow = (id) => {
        axios
            .post(
                "https://akademia108.pl/api/social-app/follows/follow",
                { leader_id: id }
            )
            .then(() => {
                props.getLatestPosts();
            })
            .catch((error) => {
                console.error(error);
            });
    };
    // console.log(follow)

    return (
        <div className="followRecommendation" key={recommendations.id}>
            <img src={recommendations.avatar_url} alt={recommendations.username} />
            <h3>{recommendations.username}</h3>
            <button className="btn" onClick={() => follow(recommendations.id)}> śledż </button>
        </div>
    )
}

export default FollowRecommendations;