import React from 'react';

const UsersComponent = (props) => (
    <div>
        <h1>Users</h1>
        {Object.values(props.users).map(user => (
            <p key={user.userId}>{user.userName}</p>
        ))}
    </div>
);

export default UsersComponent;