const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Certo dia duas meninas foram passear num campo , logo avistaram dois caminhos diferentes ",
        alternativas: [
            {
                texto: "Elas escolheram ir para a esquerdo!",
                afirmacao: "O caminho estava todo escuro e cheio de espinhos nas flores , elas ficaram com muito medo. "
            },
            {
                texto: "Elas escolheram ir para a direito!",
                afirmacao: "O caminho estava todo iluminado e cheio de flores."
            }
        ]
    },
    {
        enunciado: "Depois que elas passaram esse caminho , logo ouviram um barulho muito alto de um animal , e elas ficaram com muito medo ",
        alternativas: [
            {
                texto: "Elas decidiram correr.",
                afirmacao: "O animal ouviu elas correr e correu atras delas."
            },
            {
                texto: "Elas decidiram se esconder.",
                afirmacao: "Elas avistaram uma casa abandonada."
            }
        ]
    },
    {
        enunciado: "E agora o que elas podem fazer ?",
        alternativas: [
            {
                texto: "Elas acharam um outro caminho.",
                afirmacao: "Mas elas acabaram se perdendo"
            },
            {
                texto: "Elas decidiram entrar na casa.",
                afirmacao: "A casa esta segura para passarem a noite ."
            }
        ]
    },
    {
        enunciado: " Ajude elas a tomar uma decisão sobre o que fazer !",
        alternativas: [
            {
                texto: "Elas decidiram andar por mais tempo.",
                afirmacao: "Elas andaram por muito tempo e acharam o caminho certo."
            },
            {
                texto: "Elas foram embora da casa abondonada .",
                afirmacao: "Elas acharam o caminho certo"
            }
        ]
    },
    {
        enunciado: "Elas encontraram um carro no caminho",
        alternativas: [
            {
                texto: "Elas decidiram não entrar.",
                afirmacao: "Elas andaram o caminho todo apê até a casa delas."
            },
            {
                texto: "Elas decidiram entrar no carro.",
                afirmacao: "Elas fizeram uma ligação com os fios para ligar o carro e foram para suas casas. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();