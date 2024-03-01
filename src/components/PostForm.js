import { format } from 'mysql2';
import React from 'react';

const PostForm = ({ onSubmit }) => {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, body });
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Body"
            />
            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;