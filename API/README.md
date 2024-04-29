# API Clinic Documentation

## Features

- Create Medical Record
- Get All Data Medical Record
- Get Medical Record By ID
- Update Medical Record
- Delete Medical Record

## Tech

this Clinic API using:

- [Node Js](https://nodejs.org/en) - As a runtime Javascript
- [Express Js](https://expressjs.com/) - Framework NodeJS
- [Prisma](https://www.prisma.io/) - A tool used to facilitate application development with databases.
- [Postgres](https://www.postgresql.org/) - Open Source RDBMS
- [CORS](https://www.npmjs.com/package/cors) - CORS (Cross-Origin Resource Sharing)
- [Winston](https://www.npmjs.com/package/winstonn) - For Logger Application
- [dotenv](https://www.npmjs.com/package/dotenv) - Manage Variabel Environments
- [Joi](https://joi.dev/) - For Validation Input

## Installation

requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/MuhammadNurIlham/backend-dev-test.git
cd API
npm install
```

After following the commands above, create an .env file:

```sh
DATABASE_URL="postgresql://root@localhost:5432/clinic"
HOST_NAME=http://localhost:
PORT=3000
```

After following the commands above, run the code:

```sh
npm start
```

The response on the terminal will display:

```sh
App Server running on http://localhost:3000
```

## Try in Postman

### Access url

| Method | Access URL                                     |
| ------ | ---------------------------------------------- |
| POST   | http://localhost:3000/api/v1/medical-record/   |
| GET    | http://localhost:3000/api/v1/medical-record/   |
| GET ID | http://localhost:3000/api/v1/medical-record/id |
| PATCH  | http://localhost:3000/api/v1/medical-record/id |
| DELETE | http://localhost:3000/api/v1/medical-record/id |

**Create Data**

```sh
{
    "nama_pasien":"marcelino",
    "tanggal_pengobatan":"2024/04/17",
    "keluhan":["flu", "panas", "batuk"],
    "resep_obat":["tolak angin", "bodrex", "paracetamol"],
    "biaya":120.000,
    "nama_asuransi":"BPJS",
    "biaya_cover_asuransi":100.000
}
```
