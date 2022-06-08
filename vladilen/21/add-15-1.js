const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

const postArea = document.querySelector('.posts')

const getCurrentDate = () => {
    return new Date()
}

const createComments = (comment) => {
    const commentWrap = document.createElement('div')
          commentWrap.classList.add('post-comment')
    commentWrap.insertAdjacentHTML('afterbegin', `
        <p class="post-comment__author">${comment.email}</p>
        <p class="post-comment__text">
            ${comment.body}
        </p>
        <p class="post-comment__date">
            ${getCurrentDate()}
        </p>
    `)

    return commentWrap
}

const createPost = (post) => {
    const postWrap = document.createElement('div')
          postWrap.id = 'post'
          postWrap.classList.add('post')
    postWrap.insertAdjacentHTML('afterbegin', `
        <h1 class="post__title">${post.title}</h1>
        <p class="post__text">${post.body}</p>
        <b class="post__comments-text">Комментарии</b>
        <div class="post__comments">
        </div>
    `)

    return postWrap
}

const fetchComments = (id, post) => {
    fetch(`${COMMENTS_URL}?postId=${id}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Ошибка в получении комментариев')
            }
            return response.json()
        })
        .then((comments) => {
            const postCommentsField = post.querySelector('.post__comments')
            comments.forEach(comment => {
                postCommentsField.append(createComments(comment))
            });
        })
        .catch((error) => {
            console.log(error)
        })
}

const renderPost = (postId) => {
    fetch(`${POSTS_URL}/${postId}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Ошибка в получении поста')
            }
            return response.json()
        })
        .then((post) => {
            const newPost = createPost(post)
            postArea.append(newPost)
            fetchComments(postId, newPost)
        })
        .catch((error) => {
            console.error(error)
        })
}

renderPost(1)