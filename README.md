<img src="./public/logo.svg">

# Sobre

O SujeitoLink é um encurtado de link longo. Com o encurtador é possível diminuir o tamanho do link criando uma url curta para compartilhar.

Para acessar [clique aqui](https://sujeitolink.netlify.app).

## API

A API consumida é do bitly, para acessar a documentação [clique aqui](https://dev.bitly.com/).

Você vai precisar gerar um token de acesso genérico para usar a API você usará esse token no cabeçalho de autorização da sua solicitação clique em [saiba mais](https://dev.bitly.com/docs/getting-started/authentication).

Aqui está um exemplo:

```js
Authorization: Bearer {token}
```

Após gerar o token atribua na seguinte variável de ambiente no seu .env

`REACT_APP_API_KEY`

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:jonathan-lopes/sujeitoLink.git
```

Entre no diretório do projeto

```bash
  cd sujeitoLink
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```
