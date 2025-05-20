/**
 * Função que cria um cartão/flashcard dinamicamente e o adiciona à página
 * @param {string} categoria - Tema ou categoria do flashcard (ex: "Programação")
 * @param {string} pergunta - Texto da pergunta do flashcard
 * @param {string} resposta - Texto da resposta do flashcard
 */
function criaCartao(categoria, pergunta, resposta) {
    // 1. ENCONTRANDO O CONTÊINER PRINCIPAL
    // Busca o elemento HTML com id "container" onde os cartões serão colocados
    let container = document.getElementById('container')
    
    // 2. CRIANDO O ELEMENTO DO CARTÃO
    // Cria um novo elemento <article> que representará nosso flashcard
    let cartao = document.createElement('article')
    // Adiciona a classe CSS 'cartao' para estilização
    cartao.className = 'cartao'
    
    // 3. PREENCHENDO O CONTEÚDO DO CARTÃO
    // Usa template strings (entre crases ``) para criar o HTML interno do cartão
    // ${variavel} insere dinamicamente os valores dos parâmetros
    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3> <!-- Título com a categoria -->
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p> <!-- Parágrafo com a pergunta -->
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p> <!-- Parágrafo com a resposta (inicialmente oculta) -->
        </div>
    </div>
    `
    
    // 4. LÓGICA PARA VIRAR O CARTÃO
    // Variável para controlar se a resposta está visível ou não
    let respostaEstaVisivel = false
    
    /**
     * Função que vira o cartão (mostra/esconde a resposta)
     * É chamada quando o cartão é clicado
     */
    function viraCartao() {
        // Inverte o estado de visibilidade (true vira false e vice-versa)
        respostaEstaVisivel = !respostaEstaVisivel
        // Adiciona/remove a classe 'active' no cartão conforme o estado
        // A classe 'active' provavelmente controla a exibição da resposta via CSS
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    
    // 5. ADICIONANDO O EVENT LISTENER
    // Configura o cartão para chamar viraCartao() quando for clicado
    cartao.addEventListener('click', viraCartao)
    
    // 6. ADICIONANDO O CARTÃO À PÁGINA
    // Insere o cartão criado como filho do container principal
    container.appendChild(cartao)
}