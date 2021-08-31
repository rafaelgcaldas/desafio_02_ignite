# desafio_02_ignite
O desafio consiste em alterar uma aplicação que já está totalmente funcional, mas grande parte do seu código está diretamente no arquivo App.tsx. 
Para resolver isso da melhor forma, é necessário dividir a aplicação em pelo menos duas partes principais: sidebar e o conteúdo principal que possui o header 
e a listagem de filmes.

# Solução do desafio
O componente <b>"src/App.tsx"</b> foi em dividido em 3 componentes, <b>"src/components/Content.tsx"</b>, <b>"src/components/SideBar.tsx"</b> e <b>"src/components/Header.tsx"</b> dividindo
as responsabilidades de cada um. Foi criado tbm o <b>"src/contexts/NavigationContext.tsx"</b>responsável por gerenciar o estado da aplicação.
