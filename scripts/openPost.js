export function openPostFunc(postId) {
    const id = JSON.stringify(postId)
    localStorage.setItem("postId", id)
    window.location.assign("./pages/post/post.html")
}