const prompt = require("prompt-sync")();

const jogos = [];

const validarIndice = (indice) => indice >= 0 && indice < jogos.length;

const modelo = () => {
    const nome = prompt("Nome do jogo: ");
    const ano_lancamento = prompt("Em qual ano foi lançado?: ");
    const duracao = prompt("Duração Média: ");
    const preco = prompt("Preço: ");
    const estudio = prompt("Qual o estudio do jogo? ");
    let sequencia = -1;
    if (listar()) {
        const sequencia = prompt("Qual é a sequência do jogo? Digite 0 se não houver uma Sequencia! ") - 1;
    }

    if (nome != "" && ano_lancamento >= 1962 && ano_lancamento <= 2024 && duracao > 0 && preco == 0 && estudio != "" && ((sequencia >= 0 && sequencia < jogos.length) || jogos.length == 0)) {
        return {
            nome,
            ano_lancamento,
            duracao,
            preco,
            estudio,
            sequencia,
        };
    } else {
        console.log("Dados invalidos.");
    }
};

const criar = () => {
    const jogo = modelo();
    if (jogo != undefined) {
        jogos.push(jogo);
        console.log("Jogo cadastrado com sucesso!");
    }
};

const listar = () => {
    if (jogos.length == 0) {
        console.log("Nenhum jogo encontrado");
        return false;
    } else {
        jogos.forEach((jogo, index) => {
            console.log(`
                ${index + 1}.
                Nome: ${jogo.nome}
                Ano de Lançamento: ${jogo.ano_lancamento}
                Duração: ${jogo.duracao}
                Preço: ${jogo.preco}
                Estudio: ${jogo.estudio}
                Sequencia: ${jogo.sequencia}
            `);
        });
        return true;
    }
};

const atualizar = () => {
    if (!listar()) {
        return;
    }

    const indice = prompt("Qual o indice que deseja atualizar? ") - 1;

    const jogo = modelo();

    if (jogo != undefined && validarIndice(indice)) {
        jogos[indice] = jogo;
        console.log("Jogo atualizado com sucesso");
    } else {
        console.log("Falha na atualização!");
    }
};

const remover = () => {
    if (!listar()) {
        return;
    }

    const indice = prompt("Qual indice vc deseja remover ? ") - 1;

    if (validarIndice(indice)) {
        jogos.splice(indice, 1);
        console.log("Jogo removido com sucesso!");
    } else {
        console.log("Falha na remoção!");
    }
};
