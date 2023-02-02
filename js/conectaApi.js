async function listaDeVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);

    return listaConvertida;
}

export const conectaApi = {
    listaDeVideos
}