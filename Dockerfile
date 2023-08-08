# Nosso primeiro estágio, que é o Construtor
FROM node:16 as builder

WORKDIR /app/frontend

COPY package* ./

COPY . .

RUN npm install && npm run build --production

# Nossa segunda etapa, que cria uma imagem para produção

FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder  /app/frontend/build /usr/share/nginx/html

EXPOSE 80
