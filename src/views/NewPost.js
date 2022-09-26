import React from 'react';
import AddPost from '../components/AddPost';



const NewPost = (props) => {


    return (
        <AddPost user={props.user} setUser={props.setUser} />
    )
}


export default NewPost;