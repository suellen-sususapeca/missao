const caixaPrincipal = document.querySelector("caixa-principal")
const caixaPerguntas = document.querySelector("caixa-pergunta")
const caixaAlternativas = document.querySelector("caixa-alternativas")
const caixaResultado = domcument.querySelector("caixa-resultado")
const textoResultado = domcument.querySelector("texto-resultado")

const perguntas = [
    {
        enunciado: "Você se depara com uma oportunidade incrivel de conhecer uma nova cultura. Qual destino ia chegar"
            alternativas: [
                {
            texto: "Inglaterra",
            afirmacao:"afirmação",
                },
                {
            texto:"Estados unidos",
            afirmacao:"afirmação",
                },
            ]
        },

    let atual = 0;
    let pergunatAtual;

    function mostraPergunta (){
        perguntaAtual = pergunta [atual];
        caixaPerguntas.textContent = perguntas.enunciados;
    }

    mostraPergunta ();
    
        

        


