const prompt = require("prompt-sync")();

const jogos = [];

const criar = () => {
    const nome = prompt("Nome do jogo: ");
    const ano_lancamento = prompt("Em qual ano foi lançado?: ");
    const duracao = prompt("Duração Média: ");
    const preco = prompt("Preço: ");
    const estudio = prompt("Qual o estudio do jogo? ");
    const sequencia = prompt("Qual é a sequência do jogo? ");

    if (nome != "" && ano_lancamento >= 1962 && ano_lancamento <= 2024 && duracao > 0 && preco == 0 && estudio != "" && ((sequencia > 0 && sequencia < jogos.length) || jogos.length == 0)) {
        jogos.push({
            nome,
            ano_lancamento,
            duracao,
            preco,
            estudio,
            sequencia,
        });
        console.log("Jogo cadastrado com sucesso!");
    } else {
        console.log("Dados invalidos.");
    }
};
