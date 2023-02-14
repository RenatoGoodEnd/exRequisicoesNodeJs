async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    //método POST para gravar arquivo json no repositório do nodejs
    
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            url: url,
            imagem: imagem
        })
    
    });

    if(!conexao.ok){ //se a conexão "não ok" joga um erro que será pego pelo catch no criarVideo
        throw new Error("Falha ao carregar o vídeo");
    }

    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    //busca de vídeos, ?q é uma procura no url  = para buscar um termo igual ao próximo digitado
   
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}