import { openPost, posts } from "./fetchs.js"
import {openPostFunc} from "./openPost.js"
import { observer } from "./infinityScroll.js"


export const feedReceiver = document.querySelector(".feed-receiver")
const observerDiv = document.querySelector('.scroll-observer')

export async function renderFeed() {
    observer.observe(observerDiv)
    const firstPosts = await posts(0)
    const filterSelected = JSON.parse(localStorage.getItem('newsFilter'))
    if (filterSelected) {
        finalyRender(filterSelected, firstPosts)
    } else {
        finalyRender("Todos", firstPosts)
    }
}

function finalyRender(category, postsRaw) {
    feedReceiver.innerText = ""
    const postArr = postsRaw.news
    
    postArr.forEach(post => {
        if (post.category == category || category == "Todos") {
            const card = document.createElement('li')
            const figure = document.createElement('figure')
            const img = document.createElement('img')

            const contentBox = document.createElement('div')
            const title = document.createElement('h6')
            const description = document.createElement('p')
            const acessBtn = document.createElement('button')

            card.classList.add("news-card")
            figure.classList.add("news-img")
            contentBox.classList.add("news-description")
            acessBtn.classList.add("open-post-btn")

            img.src = post.image
            title.innerText = post.title
            description.innerText = post.description
            acessBtn.innerText = "Acessar conteúdo"

            figure.append(img)
            contentBox.append(title,description)
            card.append(figure, contentBox, acessBtn)
            feedReceiver.append(card)

            acessBtn.addEventListener('click', (event => {
                event.preventDefault()
                openPostFunc(post.id)
            }))
        }
    })
}