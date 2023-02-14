import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento){
    evento.preventDefault();
    //evita o movimento natural de recarregamento da página

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
    await conectaApi.criaVideo(titulo, descricao, url, imagem);
    } catch (e){ //se a conexão falhar lançará um erro que aqui o catch pega e emite um alerta
        alert(e);
    }
    window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener("submit", evento => criarVideo(evento));