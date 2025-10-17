# Idealtech - Soluções Digitais

Idealtech é um website responsivo e moderno desenvolvido como um **Teste de Estágio para Desenvolvimento Front-end**.  
Embora a empresa Idealtech seja fictícia, o projeto tem o objetivo de demonstrar competências sólidas em **HTML5, CSS3 (incluindo responsividade e sistema de temas) e JavaScript Modular** (para interações dinâmicas).

## Protótipo e Design
A fase de planejamento do design foi executada no figma, uma ferramenta de prototipagem, refletindo a visão inicial do projeto.

**Link do Protótipo:** https://www.figma.com/site/oS27Ewgizi9ON76NyEhHGU/Desafio-Front?node-id=0-1&t=tCBgu2naGzJnm7w0-1

**Escopo do Protótipo:**  
Devido às restrições de tempo do teste, o protótipo foi criado apenas para a visualização Desktop no **Tema Claro (Light Mode)**.

## Recursos e Funcionalidades Implementadas

### Sistema de Temas (Dark Mode)
- **Persistência:** O tema escolhido (claro/escuro) é salvo no `localStorage` do navegador e carregado automaticamente na próxima visita (`themeSwitcher.js`).
- **Troca de Logo:** O script garante a troca da imagem da logo (`logo.png` / `logodark.png`) para manter o contraste em ambos os temas.

### Menu Responsivo e Acessível
- **Menu Toggle:** Em telas menores, o menu utiliza o padrão hambúrguer e um efeito de transição CSS para expandir/recolher.
- **Acessibilidade:** O código alterna o ícone (hambúrguer ↔ X) e atualiza o atributo `aria-label` para conformidade com padrões básicos de acessibilidade (`menuToggle.js`).
- **Navegação Inteligente:** O menu se fecha automaticamente após o clique em um link, otimizando a navegação mobile.

### Carrossel de Projetos (Slider)
- **Estrutura Dinâmica:** Seção configurada com a estrutura de um carrossel interativo, utilizando botões de navegação e pontos (`slider.js`).

### Formulário de Contato
- **Feedback Front-end:** O arquivo `main.js` intercepta o envio do formulário, previne o recarregamento da página, fornece um feedback de sucesso (alert) e limpa os campos.

## Tecnologias e Metodologia
- **HTML5 Semântico:** Uso de tags apropriadas (`<header>`, `<main>`, `<section>`, `<footer>`).  
- **CSS3 e Variáveis:** Estilização com Flexbox para layout e uso de **Variáveis CSS (Custom Properties)** para gerenciar o sistema de cores do tema.  
- **JavaScript (ES6 Modules):**  
  - Código organizado e importado via módulos (`type="module"`), demonstrando modularização e escopo.  
  - `main.js` atua como orquestrador das inicializações.

## Como Iniciar
Como o projeto é totalmente estático (HTML, CSS, JS), não requer instalações:

1. Baixe ou clone o projeto.
2. Abra o arquivo `index.html` diretamente em seu navegador (Chrome, Firefox, etc.).

## Propósito
Projeto desenvolvido como **Teste de Estágio para Front-end**.

## Desenvolvedora
Ana Karine dos Santos Silva