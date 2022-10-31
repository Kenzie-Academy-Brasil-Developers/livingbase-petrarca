import { posts } from "./fetchs.js"
import { openPostFunc } from "./openPost.js"
import { feedReceiver } from "./renderPosts.js"

export const observer = new IntersectionObserver((entries) => renderNewPosts())

export let counterNewRender = {
    counting : 1,
}
    async function renderNewPosts() {
    const data = await posts(counterNewRender.counting)

    if (counterNewRender.counting < 3) {
        filterNewPosts(data.news)
    }
    counterNewRender.counting++
}

function filterNewPosts(posts) {
    const filterSelected = JSON.parse(localStorage.getItem('newsFilter'))
    if (filterSelected) {
        addToFeed(filterSelected, posts)
    } else {
        addToFeed("Todos", posts)
    }
}

function addToFeed(category, postArr) {
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
            contentBox.append(title, description)
            card.append(figure, contentBox, acessBtn)
            feedReceiver.append(card)

            acessBtn.addEventListener('click', (event => {
                event.preventDefault()
                openPostFunc(post.id)
            }))
        }
    })
}