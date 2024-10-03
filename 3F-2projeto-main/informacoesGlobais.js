const url= "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"


async function visualizarDadosGlobais(){
    const res = await fetch(url)
    console.log(res);
    const dados = await res.json()
    const TotalPessoasMundo = (dados.Total_Pessoas-Conectadas)/1e9;
    const TotalPessoalConectadas = (dados.Total_Pessoas_Conectadas)/1e9;
    console.log(dados)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-texto')
    const container = document.getElementById('graficos-container')
    paragrafo.innerHTML = `Meu Mundo tem ${totalPessoasMundo} bilões de habitantes, dos quais ${Total_Pessoas_Conectadas} bilhões estão conectadas em alguma rede social por um tempo médio de ${tempoMédio}`
}


visualizarDadosGlobais();