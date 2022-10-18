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
                setRecommendations(req.data);
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
                console.log(recommendations)
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // console.log(follow)

    return (
        <div className="box-recommendation">
       <h4> Polecamy do śledzenia</h4> <br>
       </br>
            {recommendations.map((recommendation) => {
                return (
                    <div className="recommendation" key={recommendation.id}>
                        
                        <img src={recommendation.avatar_url} alt={recommendation.username} />
                        <h3>{recommendation.username}</h3>
                        <button className="btn" onClick={() => follow(recommendation.id)}> śledż </button>
                    </div>
                )
            })}
        </div>
    )
}


export default FollowRecommendations;