# Home Library Service

# Docker Install and testing

```
docker compose up --build
```

# Docker scout for vulnerabilities scanning

- install

```
curl -fsSL https://raw.githubusercontent.com/docker/scout-cli/main/install.sh -o install-scout.sh
sh install-scout.sh
```

- use
  `nmp run scan` or `docker scout cves mcnic/rs-nest-service-app`

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

To run only one of all test suites

```
npm run test -- <path to suite>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization

```
npm run test:auth -- <path to suite>
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging

### Swagger

after run node, open web page http://localhost:4000/api/

## Manuals

### Containers

run postgres container:

```
cd db
docker build -t pgres .
docker run -it --rm -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword pgres
```

shell in docker container `docker compose exec db sh`

may be add '-d' key for daemon mode

container for main app container:

```
docker build -t node-service .
docker run -it --rm -p 4000:4000 -v ./src:/app/src node-service
```

### Test database:

`psql -h localhost -p 5432 -U postgres -d postgres -W`

run all containers: `docker compose up`

### Pgadmin:

1. `http://localhost:8080` with login `PGADMIN_DEFAULT_EMAIL` and password `PGADMIN_DEFAULT_PASSWORD` from .env
1. add server. Hostname may be found: run `docker inspect postgres-db`, then find "Config" : {"Hostname": "<you need this!>"}, e.g. a043d2f46a82. Login and password - from .env

### Migration

`npx prisma migrate dev`

to add new megration `npx prisma migrate dev --name "init"`

to seed `npx prisma db seed`

### Share

for clear all cache `docker system prune -a`
show log watch `docker compose logs -f`, or once `docker logs <container>`
