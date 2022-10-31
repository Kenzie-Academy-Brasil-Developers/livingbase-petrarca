import { renderFeed } from "./renderPosts.js"
import { counterNewRender } from "./infinityScroll.js"

const filterBtns = document.querySelectorAll('.news-category')

export function filterBtnFunc() {
    filterBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault()

            const filterSelect = JSON.stringify(button.innerText)
            localStorage.setItem("newsFilter", filterSelect)
            renderFeed()
            if(counterNewRender.counting > 2){
                console.log("Contador que previne loop do scroll infinito acima de 2,", counterNewRender.counting)
                counterNewRender.counting = 1
            }
        })
    })
}
