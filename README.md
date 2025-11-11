# 🚀 Landing Page - Agência Grifo

Este é o repositório do site institucional (landing page) da **Grifo**, uma agência de design e conteúdo digital focada em "transformar a presença digital com conteúdos poderosos".

## 🎨 Sobre o Projeto

O objetivo deste site é apresentar a marca Grifo, seus serviços, diferenciais (compromissos), portfólio (projetos lendários) e fornecer um canal direto de captação de leads através de um formulário de contato.

A página foi desenhada com uma forte identidade visual (usando a paleta de cores preto, amarelo e branco) para transmitir profissionalismo, criatividade e confiança.

### ✨ Visualização

![[Preview da Landing Page da Grifo](URL_DA_SUA_IMAGEM.jpg)](https://grifo-studio-site.vercel.app/#contato)

## 📌 Seções Principais

O site é estruturado como uma *one-page* com as seguintes seções principais:

1.  **Hero:** Seção de abertura com o *slogan* principal e um call-to-action (CTA).
2.  **Sobre Nós:** Breve descrição da agência e sua missão, com um CTA para "Saber mais".
3.  **Nosso Compromisso:** Apresenta os pilares da empresa (Prazo de entrega, Qualidade, Suporte dedicado).
4.  **Nossos Projetos Lendários:** Uma galaria de portfólio visual com trabalhos anteriores.
5.  **Formulário de Contato:** Campos para captura de leads (Nome, E-mail, Telefone, Mensagem).
6.  **Rodapé:** Contém links de navegação, mídias sociais e informações de contato.

## 🛠️ Tecnologias Utilizadas

Este projeto pode ser implementado com uma variedade de tecnologias. A stack mais provável inclui:

* **HTML5:** Para a estrutura semântica da página.
* **CSS3:** Para toda a estilização e responsividade (potencialmente usando **SASS** ou um framework como **Tailwind CSS**).
* **JavaScript (ES6+):** Para interatividades, como a galeria de projetos e a validação/envio do formulário de contato.

### Backend do Formulário

Para que o **Formulário de Contato** funcione, ele precisa enviar os dados para algum lugar. As opções incluem:

1.  **Serviço de Terceiros:** Integrar com uma plataforma como [Formspree](https://formspree.io/) ou [Getform](https://getform.io/).
2.  **Backend Serverless:** (Recomendado para deploy na Vercel) Criar uma **Serverless Function** (por exemplo, na pasta `/api`) que recebe os dados do formulário e os envia por e-mail (usando [Nodemailer](https://nodemailer.com/)) ou salva em um banco de dados.

## 🚀 Como Executar Localmente

Para visualizar e trabalhar no projeto em sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd NOME_DO_REPOSITORIO
    ```

3.  **Abra o projeto:**
    * **Se for um projeto simples (HTML/CSS/JS):** Basta abrir o arquivo `index.html` no seu navegador. (Recomendado: Use a extensão **Live Server** no VS Code).
    * **Se for um projeto com Node.js (React, Next.js, Vercel):**
        ```bash
        # Instale as dependências
        npm install
        
        # Inicie o servidor de desenvolvimento
        npm run dev
        ```

4.  Abra `http://localhost:3000` (ou a porta indicada) no seu navegador.

## 🌐 Deploy na Vercel

Este projeto é ideal para fazer deploy na [Vercel](https://vercel.com/) (assim como fizemos com o projeto do mapa).

1.  Conecte seu repositório do GitHub à Vercel.
2.  A Vercel identificará automaticamente a estrutura (se for estático ou um framework como Next.js).
3.  Clique em **Deploy**.

**Lembre-se:** Se você usar a abordagem de **Serverless Function** para o formulário, será necessário configurar **Variáveis de Ambiente** na Vercel (por exemplo, com as credenciais do seu serviço de e-mail).
