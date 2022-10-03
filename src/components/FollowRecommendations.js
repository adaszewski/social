import './FollowRecommendations.css'
import { useState, useEffect } from "react";
import axios from "axios";

const FollowRecommendations = (props) => {
    const [recommendations, setRecommendations] = useState([]);

    const getRecommendations = (props) => {
        
        let axiosConfig = {
            "headers": {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
            }
        };


        axios
            .post(
                "https://akademia108.pl/api/social-app/follows/recommendations",
                {axiosConfig}
            )
            .then((req) => {
                setRecommendations(req.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    console.log(recommendations)

    const Follow = () => {

        let axiosConfig = {
            "headers": {
                "Content-Type": 'application/json',
                "Accept": 'application/json',

            }
        };

        axios
            .post(
                "https://akademia108.pl/api/social-app/follows/follow",
                { axiosConfig}
            )
            .then(() => {
                props.recommendations()
            })
            .catch((error) => {
                console.error(error);
            });
    };
    console.log(Follow)


};

export default FollowRecommendations;