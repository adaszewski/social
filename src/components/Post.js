import './Post.css';
import { useState } from 'react';
import axios from 'axios';


const Post = (props) => {

    const [likesCount, setLikesCount] = useState(props.post.likes.length)
    const [doesUserLiked, setDoesUserLiked] = useState(props.post.likes.filter((like) =>
        like.username === props.user?.username
    ).length !== 0
    )

    const liked = (id, isLiked) => {
        axios
            .post('https://akademia108.pl/api/social-app/post/' +
                (isLiked ? 'dislike' : 'like'),
                { post_id: id }
            )
            .then(() => {
                setLikesCount(likesCount + (isLiked ? -1 : 1))
                setDoesUserLiked(!isLiked)
            })

            .catch(() => {

            })
    }
    const deletePost = (id) => {
        axios
            .post("https://akademia108.pl/api/social-app/post/delete",
                { post_id: id }
            )
            .then((req) => {
                props.setPosts((posts) => {
                    return posts.filter((post) => (post.id !== req.data.post_id))
                })

            })
            .catch((error) => {
                console.error(error);
            });
    };

    const unFollow = (id) => {
        axios
            .post("https://akademia108.pl/api/social-app/follows/disfollow",
                { leader_id: id }
            )
            .then(() => {
                props.getLatestPosts()
            })
            .catch((error) => {
                console.error(error);
            });

    }

    return (
        <div className="post">
            <container className="author">
                <div className="avatar">
                    <img src={props.post.user.avatar_url} alt={props.post.user.username} />
                </div>
                <div className="user">
                    <p>{props.post.user.username}</p>
                </div>
                <div className='unfollow'>
                    <button className="btn-unfol" onClick={() => { unFollow(props.post.user.id) }}  >przestań śledzić   </button>
                </div>
            </container>

            <div className="content">
                <p>
                    {props.post.content}
                </p>
            </div>
            <container className="footer">
                <div className='date'>
                   <h7> opublikowano: {props.post.created_at.substring(0, 10)} </h7>
                </div>
                <div className='like'>
                  <h7>  polubiono: {props.post.likes.lenght}  {likesCount} </h7>
                </div>
         
                {props.user && (<button className="btn-like" onClick={() => liked(props.post.id, doesUserLiked)} > {doesUserLiked ? "przestań lubić" : "polub"} </button>)}
              

                {props.post.user.username === props.user?.username && (<button className="btn-del" onClick={() => deletePost(props.post.id)} >  Usuń post </button>)}
            </container>
        </div>




    )
}

export default Post;
