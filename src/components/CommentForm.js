import React from 'react';

const CommentForm = ({ onSubmit }) => {
    const [text, setText] = React.useState('');
    const [author, setAuthor] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ text, author });
        setText('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Comment"
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
            />
            <button type="submit">Create Comment</button>
        </form>
    );
};

export default CommentForm;