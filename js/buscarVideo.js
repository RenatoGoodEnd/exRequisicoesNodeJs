import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostraVideo.js";

async function buscarVideo(evento){
    evento.preventDefault();
    console.log(evento)
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
    const lista = document.querySelector("[data-lista]");
   
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    console.log(busca)
    busca.forEach(element => lista.appendChild(constroiCard(element.titulo, element.imagem, element.url, element.descricao)));

    if(busca.length == 0){ //se a busca for vazia, nada encontrado, envia a mensagem
        lista.innerHTML = `<h2 class="mensagem__titulo">Não há vídeo com essa palavra</h2>`
    }
}

const botaoPesquisa = document.querySelector("[data-botaoPesquisa]");
botaoPesquisa.addEventListener("click", evento => buscarVideo(evento));