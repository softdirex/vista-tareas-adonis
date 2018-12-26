# Adonis Vista Tareas

Esta es una aplicacion de prueba cuya funcionalidad es visualizar los datos obtenidos tanto desde la base de datos como de la api

## Configuración de entorno

Copie el siguiente fragmento y péguelo en su archivo `.env`

```.env
HOST=127.0.0.1
PORT=3333
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
API_SERVER=http://localhost:4444
```

Luego ejecute el comando `npm install`.


### Migraciones

Clone this repo and run

```bash
npm install
```
Then install npm got
```bash
npm install got
```


Ejecute el siguiente comando para servir la aplicación.

```terminal
adonis serve --dev
```

En su navegador diríjase a la siguiente url `http://localhost:3333`
