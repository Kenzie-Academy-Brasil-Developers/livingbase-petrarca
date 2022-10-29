import { renderFeed } from "./renderPosts.js"

const filterBtns = document.querySelectorAll('.news-category')

export function filterBtnFunc(){
    filterBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault()
            
            const filterSelect= JSON.stringify(button.innerText)        
            localStorage.setItem("newsFilter", filterSelect)
            renderFeed()
        })
    })
}
