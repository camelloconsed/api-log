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



