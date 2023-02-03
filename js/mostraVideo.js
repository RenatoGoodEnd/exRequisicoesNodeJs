import { conectaApi } from "./conectaApi.js"

const lista = document.querySelector([data-lista]);

function constroiCard(titulo, imagem, url, descricao){
    const video = document.createElement("li");
    video.className = "video__item"

video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
    <img src="${imagem}">
    <h3>${titulo}</h3>
    <p>236 mil visualizações</p>
    </div>
`
}

async function listaVideos(){
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.imagem, element.url, element.descricao));
        
}

listaVideos()