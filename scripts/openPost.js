import { openPost } from "./fetchs.js"

export async function openPostFunc(postId) {
    let postSelected = await openPost(postId)
    let postConvert = JSON.stringify(postSelected)
    localStorage.setItem("postToRender", postConvert)
    
    window.location.assign("./pages/post/post.html")
}