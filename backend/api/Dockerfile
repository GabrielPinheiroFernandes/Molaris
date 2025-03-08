FROM node:alpine

# Defininindo diretório
WORKDIR /app

# Instalando nodemon para hot reload
RUN npm install -g nodemon

# Copiando os arquivos de dependendencias
COPY package.json package-lock.json ./

# Instalando dependencias
RUN npm install

# Copiando os arquivos de dentro
COPY . .

# Exportando a porta
EXPOSE 3000

# Executando o servidor com nodemon para hot reload
CMD ["npm", "run", "start"]
