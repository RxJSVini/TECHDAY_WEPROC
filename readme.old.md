
**** CONTAINER PARA PHP COM APACHE ****

 

DOCKERFILE:

 

nome:Dockerfile

FROM php:7.2-apache

 

WORKDIR /var/www/html

 

COPY index.php /var/www/html/index.php

 

EXPOSE 80

 

ARQUIVO phpinfo();

 

nome:index.php

<?php

    phpinfo()

?>

 

 

 

BUILD COMMAND: docker image build -t myphp:proc . 

RUN CONTAINER COMMAND: docker run -d -p 80:80 --name webprocphp myphp:proc

 

 

***** CONTAINER PARA NGINX *****

 

DOCKERFILE:

nome:Dockerfile

 

FROM nginx

 

WORKDIR /usr/share/nginx/html

 

COPY index.html /usr/share/nginx/html

 

EXPOSE 80

 

Arquivo .html

 

nome:index.html

 

<!DOCTYPE html>

<html>

<head>

    <title>Explorando Containers</title>

    <meta charset="utf-8"/>

</head>

<body>

    <h1>Explorando Containers</h1>

    <p>Os containers são uma tecnologia poderosa que revolucionou a forma como desenvolvemos, implantamos e gerenciamos aplicações. Eles fornecem uma maneira consistente e eficiente de empacotar, distribuir e executar software.</p>


    <h2>O que são Containers?</h2>

    <p>Containers são ambientes isolados que contêm todos os componentes necessários para que uma aplicação funcione, incluindo códigos, bibliotecas e configurações. Eles encapsulam tudo o que a aplicação precisa para ser executada de maneira consistente em diferentes ambientes.</p>


    <h2>Vantagens dos Containers</h2>

    <ul>

        <li><strong>Portabilidade:</strong> Os containers podem ser executados em qualquer ambiente que suporte a tecnologia de containerização, garantindo consistência entre ambientes de desenvolvimento, teste e produção.</li>

        <li><strong>Isolamento:</strong> Cada aplicação em um container é isolada de outras, proporcionando segurança e evitando conflitos.</li>

        <li><strong>Escalabilidade:</strong> Os containers podem ser facilmente replicados e dimensionados horizontalmente para lidar com aumentos de demanda.</li>

        <li><strong>Consistência:</strong> Garante que a aplicação funcione da mesma forma em diferentes ambientes, eliminando problemas de "funciona na minha máquina".</li>

        <li><strong>Eficiência:</strong> Containers compartilham recursos do sistema operacional, permitindo um uso mais eficiente dos recursos do servidor.</li>

    </ul>


    <h2>Ferramentas Populares de Containerização</h2>

    <ul>

        <li><strong>Docker:</strong> Plataforma líder em containerização, que simplifica a criação e o gerenciamento de containers.</li>

        <li><strong>Podman:</strong> Alternativa ao Docker que oferece benefícios como execução sem privilégios de root.</li>

        <li><strong>Kubernetes:</strong> Sistema de orquestração de containers que facilita a implantação e o gerenciamento de aplicações em grande escala.</li>

    </ul>


    <p>Em resumo, containers são uma ferramenta essencial para modernizar o desenvolvimento de software e a implantação de aplicações, tornando todo o processo mais eficiente, consistente e escalável.</p>

</body>

</html>

 

BUILD COMMAND: docker image build -t nginx:proc . 

RUN CONTAINER COMMAND: docker container run -d -p 80:80 nginx:proc



**** CONTAINER NGINX REACTJS ****



DOCKERFILE:

nome:Dockerfile
# Nosso primeiro estágio, que é o Construtor
FROM node:16 as builder

WORKDIR /app/frontend

COPY package* ./

COPY . .

RUN npm install && npm run build

# Nossa segunda etapa, que cria uma imagem para produção

FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder  /app/frontend/build /usr/share/nginx/html

EXPOSE 80


BUILD COMMAND: docker build -t reactjs:proc .

RUN CONTAINER COMMAND: docker run -d --name reactjs -p 80:80 reactjs:proc