---
templateKey: blog-post
title: 'Localtunnel: expondo serviços locais na Web'
date: 2018-09-18T01:08:13.427Z
description: >-
  Expor um serviço local na Web não precisa ser um trabalho demorado e caro.
  "Lets keep it simple!"
tags:
  - web
  - localtunnel
  - devops
categories:
  - Desenvolvimento
---
![](/img/captura-de-tela-de-2018-09-17-22-23-46.png)

Provavelmente você já precisou colocar algum serviço local disponível na Web. Este cenário é muitíssimo comum quando, por exemplo, você precisa disponibilizar um ambiente de testes momentâneo onde o seu cliente, ou sua equipe de trabalho, possam acessar e validar algo.

Normalmente você poderia utilizar algum serviço de deploy simples, como Heroku, ou mesmo um droplet do Digital Ocean, para rapidamente (e com baixo custo) disponibilizar um endereço acessível na web.

Porém, e se você pudesse simplesmente executar um único comando e imediatamente receber um endereço acessível? É isso que o [localtunnel](https://localtunnel.github.io/www/) se propões a fazer (e faz muito bem, aliás).

```bash
npm install -g localtunnel
```
