# Usar imagem oficial do Nginx
FROM nginx:alpine

# Copiar arquivos do projeto para a pasta padrão do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]
