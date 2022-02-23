# Desafio 02 - Componentizando a aplicação

### Sobre o desafio

O desafio consiste em criar uma aplicação para treinar o que foi abordado até agora (Capítulo 2) no ReactJS.

Essa será uma aplicação onde o principal objetivo é refatorar uma página para listagem de filmes de acordo com gênero. 

A aplicação já está totalmente funcional mas grande parte do seu código está diretamente no arquivo `App.tsx`. Para resolver isso da melhor forma, é necessário dividir a aplicação em **pelo menos** duas partes principais: sidebar e o conteúdo principal que possui o header e a listagem de filmes.

- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- Na sidebar é possível selecionar qual categoria de filmes deve ser listada;
- A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.

### Template da aplicação
https://github.com/rocketseat-education/ignite-template-componentizando-a-aplicacao

### Fake API com JSON Server
Foi utilizado o JSON Server para simular uma API que possui as informações de gêneros e filmes. 
Navegue até a pasta criada, abra no Visual Studio Code e execute os seguintes comandos no terminal:

```bash
yarn
yarn server
```

 Será inicializado uma fake API com os recursos /genres e /movies em localhost na porta 3333 a partir das informações do arquivo server.json localizado na raiz do seu projeto.
 
 ### Para inicializar a aplicação
 
 ```bash
yarn start
```

### O que foi editado na aplicação?

- **src/App.tsx**
Esse componente contém toda a aplicação com exceção do componente `Button` que não precisa ser alterado e `Icon` que também não precisa de alteração.

- **src/components/Content.tsx**
Esse componente, ainda vazio, deve possuir toda a lógica e corpo responsável pelo header e conteúdo da aplicação.

- **src/components/SideBar.tsx**
Esse componente, também vazio, deve possuir toda a lógica e corpo responsável pela seção que contém o título do site e a parte de navegação à esquerda da página.

### Como a aplicação ficou no final

![watchme](https://user-images.githubusercontent.com/26827923/133713154-5b346635-ef55-403f-8291-3da8b14cbb6b.png)
