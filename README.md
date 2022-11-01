<h1 align="center">
    <img src="https://cdn-icons-png.flaticon.com/512/2701/2701763.png" width="30px" /> <a href="https://nexusgamestand.com" target="_blank">NEXUS GameStand</a> <img src="https://cdn-icons-png.flaticon.com/512/2701/2701763.png" width="30px" />
</h1>

<h3 align="center">Series of gamers connections, linking platforms.</h3>

<br/>

### 🤔 Problema
   Hoje em dia nós temos muitas plataformas de jogos, Steam, Epic Games, Origin, Ubisoft Connect, Battle.net, EA Play, Xbox Game Pass, e isso acaba causando uma confusão sobre em qual dessas plataformas temos tal jogo, e pensando nisso nós criamos o Nexus GameStand, que vem com a proposta de centralizar todos os jogos do usuário em um local só, possibilitando a ele muito mais facilmente saber em qual plataforma está o jogo que ele quer jogar, e também possibilitando ele redescobrir jogos que estavam perdidos na sua biblioteca de alguma plataforma.

### 💡 Solução
   Com esse intuito em mente, criaremos uma aplicação que terá uma página de login simples uma pagina de registro com um formulário simples, como sabemos que o usuário pode usar diferentes emails para diferentes plataformas, ao fazer o registro ele será direcionado para uma página de perfil de usuário, onde o usuário poderá editar suas informações e também conectará com todas a plataformas, terá uma página principal onde será mostrado todos os jogos do usuário, e será possível utilizar alguns filtros, como busca por nome, categoria, etc.
Por fim para o MVP, teremos uma pagina que mostrará todas as informações do game que o usuário acessou pela Página Principal.


## 🛠 Front-end
- [x] [Figma](https://www.figma.com/) - Ferramenta de prototipação
- [x] [Next.Js](https://vitejs.dev/) - O React Framework para Produção
- [x] [TailwindCss](https://tailwindcss.com/) - Aplicação de estilos na aplicação
- [x] [Axios](https://axios-http.com/ptbr/docs/intro) - Gerenciamento de requisições HTTP
- [x] [Toastify](https://fkhadra.github.io/react-toastify/introduction) - Feedback de erros ao usuário
- [x] [React Hook Form](https://reactrouter.com/) & [Yup](https://www.npmjs.com/package/yup) - Gerenciador de formulários e validações
- [x] [React Icons](https://react-icons.github.io/react-icons/) - Lib de ícones pra aplicação
- [x] [Sass](https://sass-lang.com/) - CSS com superpoderes 👀
- [x] [Cookies Next](https://openbase.com/js/cookies-next) - Obtendo, configurando e removendo cookies com NEXT.JS
- [x] [Vercel](https://vercel.com/) - Ferramenta pra deploy da aplicação
- [x] [Animate.css](https://animate.style/) - Lib de animações
- [x] [MUI](https://mui.com/pt/) - Lib de componentes
- [x] Outras bibliotecas que auxiliaram no desenvolvimento podem ser encontradas na seção: `"dependencies"` e `"devDependencies"` no arquivo `package.json`, no diretório relacionado ao FrontEnd

## 🔨 Back-end (JSON Server)
- [x] Registro (POST): que receberá username, email, senha, confirmação de senha
- [x] Login (POST): que recebera email e senha
- [x] Edição de Usuário (PATCH): que poderá receber username e/ou um link de imagem para o perfil.
- [x] Deleção de Usuário (DELETE): que receberá o id do usuário.
- [x] Conectar Plataforma (PUT): que receberá um link.
- [x] Requisições na [Steam API](https://developer.valvesoftware.com/wiki/Steam_Web_API#GetPlayerSummaries_.28v0001.29)
- [x] Requisições na [Xbox API]()


<br/>

### ✅ Link para aplicação

- [x] Frontend -> <a href="[https://nexus-gamestand.vercel.app/](https://nexusgamestand.com)">Link app</a>

<br/>

<h1 align="center"> <img src="https://cdn-icons-png.flaticon.com/512/2701/2701763.png" width="30px" /> FIGMA da Aplicação <img src="https://cdn-icons-png.flaticon.com/512/2701/2701763.png" width="30px" />
</h1> 
<img src="https://i.imgur.com/tibGiaf.png" /> 

<br/>

### ✅ Como rodar a aplicação localmente

Antes de tudo, você precisa das seguintes tecnologias:

- [x] [Git](https://git-scm.com)
- [x] [NPM](https://www.npmjs.com/)
- [x] [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) Opcional
- [x] [VSCode](https://code.visualstudio.com/)

<br/>

### 🎲 Preparando o ambiente

```bash
# Faça o clone deste repositório

$ git clone git@github.com:projetofinal-campeoes/nexus-gamestand.git


# Entre na raiz do repositório clonado

$ cd nexus-gamestand

$ yarn
ou
$ npm install

$ yarn dev
ou 
$ npm run dev

# Após isso, o Next.js irá te informar em qual porta estará sendo rodada sua aplicação. Basta segurar a tecla CTRL e clicar no link do localhost!!

# Prontinho, agora o ambiente está totalmente configurado!
```

<br/>

<br/>

<h1 align="center">👥 Desenvolvedores responsáveis 👥</h1> 

<table align="center">
  <tr>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/93692439?v=4" width="100px;" alt="Foto do Adam"/><br>        
        <sub>
          <b>Adam Neves</b> <br/>
            <a href="https://github.com/adamsnows" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
            <a href="https://www.linkedin.com/in/adam-neves/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
        </sub>
    </td>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/40778394?v=4" width="100px;" alt="Foto do Yan"/><br>        
        <sub>
            <b>Yan Carlo</b> <br/>
            <a href="https://github.com/yancarlodev" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
                <a href="https://www.linkedin.com/in/yancarlodev/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
        </sub>
    </td>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/100591242?v=4" width="100px;" alt="Foto do Matheus"/><br>        
        <sub>
          <b>Matheus Sudré</b> <br/>
            <a href="https://github.com/mathsudre" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
                <a href="https://www.linkedin.com/in/matheus-sudre/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
        </sub>
    </td>
      <td align="center">
        <img src="https://avatars.githubusercontent.com/u/100426215?v=4" width="100px;" alt="Foto do Sidarta"/><br>          
        <sub>
          <b>Sidarta Kauã</b>  <br/>
            <a href="https://github.com/ssidartaa" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
                <a href="https://www.linkedin.com/in/ssidartaa/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
        </sub>
    </td>
          <td align="center">
        <img src="https://avatars.githubusercontent.com/u/101332741?v=4" width="100px;" alt="Foto do Vagner"/><br>          
        <sub>
          <b>Vagner Mengali</b>  <br/>
            <a href="https://github.com/vagnermengali" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
                <a href="https://www.linkedin.com/in/vagnermengali/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
        </sub>
    </td>
          <td align="center">
        <img src="https://media.licdn.com/dms/image/D4D03AQEZVrNSny5gHw/profile-displayphoto-shrink_800_800/0/1664465804585?e=1672876800&v=beta&t=iMVf537WuAA627zj-A-Ipebj0SuLNhdSf8WeDLEWrQo" width="100px;" alt="Foto do Luan"/><br>          
        <sub>
          <b>Luan Marchi</b>  <br/>
            <a href="https://github.com/marchi8" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
                <a href="https://www.linkedin.com/in/luan-marchi2001/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
        </sub>
    </td>    
  </tr>
</table>

<h1 align="center">👥 Já participaram do projeto 👥</h1> 
<table align="center">
  <tr>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/88001200?v=4" width="100px;" alt="Foto do Welton"/><br>        
        <sub>
          <b>Welton Santos</b> <br/>
            <a href="https://github.com/WeltonSantosFr" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
                <a href="https://www.linkedin.com/in/welton-santos-7a2b7b214/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
        </sub>
    </td>
      <td align="center">
        <img src="https://i.imgur.com/yVKFKmI.png" width="100px;" alt="Foto da Katya"/><br>          
        <sub>
          <b>Katya Keila</b>  <br/>
            <a href="https://github.com/katyakeila" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
                <a href="https://www.linkedin.com/in/katya-oliveira/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
        </sub>
    </td>
  </tr>
</table>
