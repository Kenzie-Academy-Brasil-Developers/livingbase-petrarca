import { openPost } from "../../scripts/fetchs.js"

async function renderPost() {
    const getPost = JSON.parse(localStorage.getItem('postToRender'))
    
    renderOpenedPost(getPost)
}
renderPost()


function renderOpenedPost(post){
    const postTitleDiv = document.querySelector('.post-introduce-inner')
    const postContentDiv = document.querySelector('.post-content-inner')
    
    const postTitle = document.createElement('h3')
    const postDesc = document.createElement('p')

    const figure = document.createElement('figure')
    const postImg = document.createElement('img')
    const postContent = document.createElement('p')

    figure.classList.add('open-post-figure')
    postImg.classList.add('open-post-img')

    postTitle.innerText = post.title
    postDesc.innerText = post.description
    postImg.src = post.image
    postContent.innerText = post.content

    
    figure.append(postImg)
    postTitleDiv.append(postTitle, postDesc)
    postContentDiv.append(figure, postContent)

}

function returnHome() {
    const homeBtn = document.querySelector(".return-home")
    homeBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.assign("../../index.html")
    })
}   
returnHome()