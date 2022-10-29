// importar ditador de página

const baseUrl = "https://m2-api-living.herokuapp.com/news"
const pageSelected = 0
const pageSelector = `?page=${pageSelected}`

export async function posts(){
    const urlCreate = `${baseUrl}${pageSelector}`
     
    let response = await fetch(urlCreate, {
        method: "GET" 
    })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
        console.log(res, "Resposta da API")
        return res
    })
    .catch(err => console.log(err, "Erro da API"))

    return response
}

export async function openPost(postId){
    const urlCreate = `${baseUrl}/${postId}`

    let response = await fetch(urlCreate, {
        method: "GET"
    })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
        console.log(res, "Post Selecionado")
        return res
    })
    .catch(err => console.log(err, "Erro ao selecionar Post"))
}   