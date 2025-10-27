# --- ETAPA 1: BUILD ---
# Usa a imagem oficial do Node para compilar o projeto.
FROM node:22-slim as builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de definição de dependência
COPY package.json package-lock.json ./

# Instala as dependências de produção e desenvolvimento
RUN npm install

# Copia o restante dos arquivos (incluindo o código-fonte)
COPY . .

# Comando de build do Vite (gera a pasta 'dist/')
RUN npm run build

# --- ETAPA 2: PRODUÇÃO (Servidor NGINX Leve) ---
# Usa uma imagem NGINX super leve para servir os arquivos estáticos.
FROM nginx:alpine as production

# Copia a configuração personalizada do NGINX
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos compilados da etapa de 'builder' para a pasta do NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80, que é a porta padrão do NGINX
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]