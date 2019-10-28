# API LOG

## Iniciando

Clonar repositorio de git y cambiar a la rama que se usará.

```
git clone git clone https://jnavarroq@bitbucket.org/jumpitt_blockchain/log.git
git checkout "rama"
```

### Requisitos previos

Necesitas instalar las siguientes cosas en tu maquina para ejecutar la API:
```
Node JS
MongoDB

```

### Instalación

Lo primero a instalar son las dependencias del proyecto.

Al estar en el directorio donde se descargo la API se debe ejecutar el siguiente comando:

```
npm install
```

Obtenemos la última imagen de MongoDB ejecutando el comando a continuación

```
docker pull mongo:latest
```
Creamos el archivo init-mongo.js antes de la carpeta raiz del proyecto y luego editamos.

```
db.createUser(
    {
        user : "admin",
        pwd : "123123",
        roles: [
            {
                role : "readWrite",
                db : "logDB"
            }
        ]
    }
)
```

Creamos el archivo docker-compose.yml antes de la carpeta raíz y luego lo editamos con los siguientes datos

```
version: '3'
services:
  database:
    image: 'mongo'
    container_name: 'logDB'
    environment:
      ['MONGO_INITDB_DATABASE=logDB',
      'MONGO_INITDB_ROOT_USERNAME=admin',
      'MONGO_INITDB_ROOT_PASSWORD=123123']
    volumes:
      - ./init-mongo.js:/docker-entrypoint-initdb.d/init-mongo.js:ro
      - ./mongo-volume:/data/db
    ports:
      - '27017-27019:27017-27019'
```

Luego corremos el archivo docker-compose con el siguiente comando:

```
docker-compose up -d
```

Con esto tendremos la API configurada y lista para iniciar.

## Deployment

...

## Built With

* [KoaJS](https://koajs.com/) - The JS framework used
* [npm](https://www.npmjs.com/) - Dependency Management



