import { openPost } from "../../scripts/fetchs.js"

async function renderPost() {
    const getPost = JSON.parse(localStorage.getItem('postId'))
    let postConvert = await openPost(getPost)
    
    renderOpenedPost(postConvert)
}
renderPost()

function renderOpenedPost(post){
    
}



const homeBtn = document.querySelector(".return-home")
function returnHome() {
    homeBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.assign("../../index.html")
    })
}   
returnHome()