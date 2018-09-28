---
templateKey: blog-post
title: 'ThingSpeak: Fazendo coisas falarem'
date: 2018-09-28T14:23:57.127Z
description: >-
  O ThingSpeak é uma plataforma opensource com foco na coleta, análise e
  realização de ações, baseada na comunicação com dispositivos físicos.
tags:
  - IOT
  - Arduino
  - Ethernet
  - ThingSpeak
  - Wifi
categories:
  - IOT
image: /img/dd8ragn.jpg
---
Há algum tempo atrás colocar dispositivos IoT conectados a serviços na Web não era, necessariamente, uma tarefa muito simples. Lembro que quando fui elaborar um primeiro projeto nesse contexto, utilizando um Arduino, precisei escrever um "parser" para receber e enviar requisições via HTTP: era necessário compreender como o protocolo funcionava (principalmente os cabeçalhos) para que fosse possível traduzir as solicitações.

Hoje em dia, felizmente, o ecossistema está muito mais maduro e ficou muito mais simples interagir com a web através de plataformas já prontas.

Recentemente esbarrei em uma destas plataforma, o **ThingSpeak**, e achei que seria interessante compartilhar o que pude fazer com ela em um projeto de menos de 30 minutos.

## ThingSpeak

O [ThingSpeak](https://thingspeak.com/) é uma plataforma opensource com foco na coleta, análise e realização de ações, baseada na comunicação com dispositivos físicos.

Na prática, o ThingSpeak funciona como uma grande base de dados capaz de armazenar dados oriundos de diversos sensores e, além disso, aplicar análises e ações de acordo com os dados obtidos.

A plataforma, basicamente, é composta por dois pilares: (1) os canais, que nada mais são do que "tabelas" onde os dados são armazenados e apresentados; e as (2) aplicações, que funcionam como gatilhos que podem ser acionados a partir dos dados obtidos.

![null](/img/captura-de-tela-de-2018-09-28-11-44-04.png)

Para que os dispositivos possam se comunicar com o ThingSpeak é necessário que o usuário possua cadastro na plataforma e crie pelo menos um canal e defina um campo. Esse campo funcionará como uma coluna em uma base de dados convencional.

Uma vez criado o canal o envio de dados pode ser realizada de, pelo menos, três maneiras diferentes, a depender do projeto: (1) via HTTP (REST); via MQTT; ou via MATLAB.

Aqui está um exemplo de envio de dados - neste caso estou realizando uma requisição HTTP enviando o valor do **campo 1** como sendo **315**.

```bash
$ curl https://api.thingspeak.com/update?api_key=[APY_KEY]&field1=315
```

Neste momento, se mais nenhuma mudança foi feita na definição do seu canal, será possível ver o valor enviado aparecendo no único gráfico disponível na tela do canal criado.

Ok Ok...

![](/img/show-me-the-code-and-stop-talking.jpg)

Vamos lá... para demonstrar como tudo funciona no mundo real re-editei um dos projetos mais clássicos do universo IoT: a planta "inteligente". Basicamente, instalei um sensor de umidade de solo em uma das plantas do escritório e conectei a saída deste sensor a um Arduino com Ethernet Shield. A idéia: eu quero saber quando aguar o solo da planta por que sou preguiçoso demais para fazer isso sem ninguém mandar.

O resultado real foi esse:

![null](/img/dd8ragn.jpg)

Já o modelo das ligações realizadas no dispositivo é esse aqui:

![null](/img/untitled-sketch-2_bb.png)

Nada de outro mundo. O sensor de umidade de solo funciona de maneira bastante simples: quanto menor for a resistência medida entre os as duas "pernas" do sensor menor será voltagem de saída (mais hidratado está o solo). Se a voltagem de saída for alta (acima de 400) o solo está apresentando alta resistência e, portanto, está seco.

O valor de saída analógica do sensor está ligada ao pin A0 do Arduino e, será, então, o valor captura por este pin que iremos enviar para o ThingSpeak - sem realizar qualquer alteração.

Para enviar os dados para o ThingSpeak utilizei a própria biblioteca [ThingSpeak](https://www.arduinolibraries.info/libraries/thing-speak) disponibilizada dentro da IDE do Arduino. O código completo para captura e envio dos códigos para o ThingSpeak não poderia ser mais simples:

<script src="https://gist.github.com/niltonheck/e3a5bdd432806d2faeb5146782551db2.js"></script>

Como no meu caso utilizei um shield Ethernet não precisei fazer nenhuma configuração adicional além da definição do Mac Address. No caso de conexões via WiFi será, naturalmente, necessário configurar SSID e senha.

Ao enviar o código ao Arduino os dados são imediatamente encaminhados ao ThingSpeak, que exibe no gráfico os dados coletados.

![null](/img/captura-de-tela-de-2018-09-28-12-03-13.png)

Para fazer a coisa toda ficar mais engraçadinha você pode, enviar um Tweet sempre que a umidade do solo, por exemplo, ultrapassar a marca de 400: tornando público a sua absoluta negligência com a vida da coitada da planta.

## Considerações Finais

Para quem já escreveu serviços "na unha" para integrar com a Web o ThingSpeak é como um salto no futuro. As integrações são simplíssimas de serem feitas, tanto para envio de dados quanto para leitura.

Evidentemente muitos dos projetos "conhecidos" tratam de usos triviais de IoT, mas o ThingSpeak pode ser uma excelente plataforma para prototipação de projetos reais - ou mesmo para produção, utilizando os planos pagos da plataforma.

Este mesmo projeto eu evolui para dois usos: envio de SMS (usando Twillio) e um tracker no meu painel do XFCE para monitorando da planta: tudo em menos de 1 hora de trabalho e com baixa complexidade.

As possibilidades são praticamente infinitas e, mais a frente, postarei a evolução deste projeto, e de outros, que vier a realizar enquanto exploro mais a plataforma.

Happy Hacking! ;-)
