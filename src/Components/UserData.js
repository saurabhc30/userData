import React from 'react';
import Author from '../asset/author.jpg'

const UserData = ({ selectedUser }) => {
    return (
        <div className=''>
            <h4>User Details</h4>
            <hr className='w-100 h-25'/>
            {selectedUser ? (
                <div>
                    <div>
                        <h5>{selectedUser.profile.username}</h5>
                    </div>
                    <div className='d-flex'>
                        <div className='avatar me-3'>
                            <img src={!selectedUser.avatar ? {Author} : selectedUser.avatar} alt='author' className='avatar rounded-circle' style={{ width: "4rem" }} />
                        </div>
                        <div className='userName'>
                            <div>
                                <h4>{selectedUser.profile.firstName} {selectedUser.profile.lastName}</h4>
                            </div>
                            <div>
                                <p>{selectedUser.jobTitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bio'>
                        <p><span className='text'>Bio :</span> {selectedUser.Bio}</p>
                    </div>
                    <div className='email'>
                        <p><span className='text'>Email :</span> {selectedUser.profile.email}</p>
                    </div>
                </div>

            ) : <p>No user Data</p>

            }
        </div>
    )
}

export default UserData
