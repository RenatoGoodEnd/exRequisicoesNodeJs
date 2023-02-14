import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, imagem, url, descricao){
    const video = document.createElement("li");
    video.className = "videos__item"

video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
    <img src="${imagem}">
    <h3>${titulo}</h3>
    <p>${descricao} mil visualizações</p>
    </div>
`
    return video;
}

async function listaDeVideos(){
    try{
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.imagem, element.url, element.descricao)));
    } catch{
        lista.innerHTML = `<h1 class:"mensagemDeErro">Não foi possível encontrar a lista de vídeos</h1>` 
    }
}

listaDeVideos()