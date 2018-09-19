---
templateKey: blog-post
title: 'Localtunnel: expondo serviços locais na Web'
date: 2018-09-18T01:08:13.427Z
description: Utilizando Localtunnel para expor publicamente um serviço local.
tags:
  - web
  - localtunnel
  - devops
categories:
  - Desenvolvimento
image: /img/-post-1-thumb.png
---
![null](/img/captura-de-tela-de-2018-09-17-22-23-46.png)

Provavelmente você já precisou colocar algum serviço local disponível na Web. Este cenário é  comum quando, por exemplo, você precisa disponibilizar um ambiente de testes momentâneo onde o seu cliente, ou sua equipe de trabalho, que não estão na mesma rede que você, possam acessar e validar algo.

Normalmente, para resolver essa situações você tem, pelo menos, duas opções bem comuns: configurar o DNS e firewall local para permitir conexões externas; ou utilizar algum serviço de IaaS (Digital Ocean, por ex.) e configurar um servidor remoto temporário.

As duas soluções são válidas e, em muitos casos, são o suficiente. Porém, o trabalho envolvido, muitas das vezes não compensa.

Porém, e se você pudesse simplesmente executar um único comando e imediatamente receber um endereço público acessível? É isso que o [localtunnel](https://localtunnel.github.io/www/) se propões a fazer (e faz muito bem, aliás).

## Localtunnel: O que é?

O Localtunnel é uma aplicações NodeJS, instalável via NPM, que cria um "socket" de comunicação em tempo real  entre a sua máquina (client) e o servidor remoto do próprio serviço. (server).

Na prática, o Localtunnel utiliza [express](https://expressjs.com/pt-br/) para "rotear" as requisições para a sua aplicação local.

Para instalar, como já disse, basta apenas o uso do NPM:

```bash
$ npm install -g localtunnel
```

Agora, para executar a aplicação precisaremos indicar ao localtunnel, utilizando o comando **lt**, em qual porta local a nossa aplicação está rodando: No meu caso, tenho um container com nginx rodando na porta 8080 local.

Então...

```bash
$ lt --port 8080

your url is: https://big-pug-86.localtunnel.me
```

Como resposta, o Localtunnel irá me indicar a URL pública para acessar o meu conteúdo "local".

O comando "lt --porta \[num]" geralmente é suficiente em muitos casos, mas há ainda um conjunto de opções que podem ser utilizadas.

```bash
Usage: lt --port [num] <options>

Opções:
  -h, --host        Upstream server providing forwarding
                                              [padrão: "https://localtunnel.me"]
  -s, --subdomain   Request this subdomain
  -l, --local-host  Tunnel traffic to this host instead of localhost, override
                    Host header to this host
  -o, --open        opens url in your browser
  -p, --port        Internal http server port                      [obrigatório]
  --print-requests  Print basic request info                           [boolean]
  --help            Show this help and exit                            [boolean]
  --version         Exibe a versão                                     [boolean]
```

Por exemplo, podemos solicitar ao server remoto do localtunnel que nos disponibilize um subdomínio específico:

```bash
$ lt --port 8080 --subdomain niltonheck

your url is: https://niltonheck.localtunnel.me
```
