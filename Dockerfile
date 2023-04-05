FROM node:18.15.0

# Crea un directorio de trabajo para la aplicación
WORKDIR /usr/src/app

# Copia el archivo de dependencias package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia los archivos de la aplicación al directorio de trabajo
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Establece el puerto en 3000
EXPOSE 3000

# Inicia la aplicación
CMD [ "npm", "start" ]