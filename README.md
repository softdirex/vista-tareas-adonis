# Adonis Vista Tareas

Esta es una aplicacion de prueba cuya funcionalidad es visualizar los datos obtenidos tanto desde la base de datos como de la api

## Configuración de entorno

Copie el siguiente fragmento y péguelo en su archivo `.env`

```.env
HOST=127.0.0.1
PORT=4444
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=Wn1ysVHJ5dOsjFN5gFEuMyHnfzLSOdOK
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis-tareas
SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt
```

Luego ejecute el comando `npm install`.


### Migraciones

Ejecute el siguiente comando para iniciar la migración.

```js
adonis migration:run
```
