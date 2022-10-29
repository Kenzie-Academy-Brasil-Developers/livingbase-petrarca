import { posts } from "./fetchs.js"

const feedReceiver = document.querySelector(".feed-receiver")

export function renderFeed() {
    const filterSelected = JSON.parse(localStorage.getItem('newsFilter'))
    if (filterSelected) {
        finalyRender(filterSelected)
    } else {
        finalyRender("todos")
    }
}

async function finalyRender(category) {
    feedReceiver.innerText = ""
    const postsRaw = await posts()
    const postArr = postsRaw.news
    
    postArr.forEach(post => {
        if (post.category == category || category == "Todos") {
            const card = document.createElement('li')
            const figure = document.createElement('figure')
            const img = document.createElement('img')

            const contentBox = document.createElement('div')
            const title = document.createElement('h6')
            const description = document.createElement('p')
            const acessBtn = document.createElement('btn')

            card.classList.add("news-card")
            figure.classList.add("news-img")
            contentBox.classList.add("news-description")


            img.src = post.image
            title.innerText = post.title
            description.innerText = post.description
            acessBtn.innerText = "Acessar conteúdo"

            figure.append(img)
            contentBox.append(title,description)
            card.append(figure, contentBox, acessBtn)
            feedReceiver.append(card)
        }
    })
}