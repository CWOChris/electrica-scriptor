fetch('api/posts')
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.getElementById('posts-container');
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.textContent = `${post.title} - ${post.content}`;
            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error getting posts', error);
    });

const commentsForm = document.getElementById('comment-form');
commmentsForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(commentsForm);
    const commentData = Object.fromEntries(formData.entries());

    fetch('api/posts/:postId/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'applications/json' },
        body: JSON.stringify(commentData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to submit comment');
        }
        window.location.reload();
    })
    .catch(error => {
        console.error('Error submitting commment', error);
    });
});