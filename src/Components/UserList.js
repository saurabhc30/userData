import React, { useState } from 'react';
import Author from '../asset/author.jpg';
import { useEffect } from 'react';
import Spinner from './Spinner';
import axios from 'axios';


const UserList = ({ onSelectUser }) => {

    const baseURL = "https://602e7c2c4410730017c50b9d.mockapi.io/users";

    const [myData, setMyData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getApiData = async () => {
        const res = await axios.get(baseURL);
        setMyData(res.data);
    };  

    useEffect(() => {
        getApiData();        
        console.log(myData);
        setLoading(false);
    }, [])

    const handleUserClick = (newUserData) => {
        setMyData(newUserData);
    };

    return (
        <>
            <div className='notelist'>
                <div className='Title'>
                    <h4>Users</h4>
                </div>
                <hr className='w-100 h-25'/>
                {loading && <Spinner />}
                <div className='list'>
                    {myData && !loading && myData.map((post) => {
                        return <div className='card my-2 ' onClick={() => onSelectUser(post)}>
                            <div key={post.profile.username} className='card-body d-flex'>
                                <div className='avatar me-3'>
                                    <img src={!post.avatar ? Author : post.avatar} alt='author' className='avatar rounded-circle' style={{ width: "4rem" }} />
                                </div>
                                <div className='userName'>
                                    <div>
                                        <h4>{post.profile.firstName} {post.profile.lastName}</h4>
                                    </div>
                                    <div>
                                        <p>{post.jobTitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })} 
                </div>
            </div>
        </>
    )
}

export default UserList
