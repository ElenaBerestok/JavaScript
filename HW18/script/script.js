const BASE_URL =' https://jsonplaceholder.typicode.com';

const container = document.createElement('div');

const showComments = (comments, parent) => {

    const wrapperComments = document.createElement('div');
    wrapperComments.setAttribute('id', 'wrapper_comments');

    comments.forEach(elem => {
        const {body} = elem;

        const p = document.createElement('p');
        p.setAttribute('id', 'p')
        p.innerText = body;
        wrapperComments.append(p);
    });

    parent.append(wrapperComments);
};

const hideComments = () => {
    const comment = document.getElementById('wrapper_comments')
    comment.remove()
}

const getComments = (postId, event) => {
    const xhrComments = new XMLHttpRequest();
    xhrComments.open('GET', `${BASE_URL}/posts/${postId}/comments`);
    xhrComments.responseType = 'json';

    xhrComments.send();

    let button = event.target;
    let parent = event.target.parentNode;

    xhrComments.onload = () => {
        const {response} = xhrComments;

        if (button.innerText === 'Show comments') {
            button.innerText = 'Hide comments';
            showComments(response, parent);
        } else {
            button.innerText = 'Show comments';
            hideComments()
        }

    }

    
}

const renderPost = (postsList, container) => {
    
    const posts = postsList.map((post) => {
    
        const postContainer = document.createElement("div");
        const postElem = document.createElement("h2");
        const bodyElem = document.createElement("p");
        const button = document.createElement('button');

        button.setAttribute('id', 'button')
    
        postElem.innerText = post.title;
        bodyElem.innerText = post.body;
        button.innerText = 'Show comments';

        postContainer.setAttribute('id', 'post');
        postElem.setAttribute('id', 'h2');
        bodyElem.setAttribute('id', 'p_post');
    
        postContainer.append(postElem, bodyElem, button);
    
        let postId = post.id;
    
        button.addEventListener('click', (event) => {
            getComments(postId, event)
        })

        return postContainer
    })
    
    container.append(...posts);
};

const getPosts = () => {
    
    const xhrPosts = new XMLHttpRequest();
    xhrPosts.open('GET', `${BASE_URL}/posts`);
    xhrPosts.responseType = 'json';
    
    xhrPosts.send();
    
    xhrPosts.onload = () => {
        const {response} = xhrPosts;
        renderPost(response, container)
    }
   
};

getPosts()

document.body.append(container)