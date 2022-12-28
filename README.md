# Ticket App - Backend

## Sections

### List



-  [x] [API Reference - Airlines](#api-reference---airlines)
-  [x] [API Reference - Stock Ticket](#api-reference---stock-ticket)
-  [x] [API Reference - Ticket](#api-reference---ticket)
-  [x] [API Reference - Ticket Status](#api-reference---ticket-status)
-  [x] [API Reference - Airports](#api-reference---airports)



## Run Locally

Clone Project

```bash
  git clone https://github.com/Rdhwnzaki/BackEnd-Ticketing-App.git
```

Go to the project directory

```bash
  cd BackEnd-Ticketing-App
```

Install dependencies

```bash
  npm install
```

Setup ENV

```bash
  DB_USER= 
  DB_HOST=
  DB_NAME=
  DB_PASS= 
  DB_PORT=
  MAIL_USERNAME=  
  MAIL_PASSWORD= 
  OAUTH_CLIENTID=  
  OAUTH_CLIENT_SECRET=
  OAUTH_REFRESH_TOKEN=
  PORT=
  HOST=
  JWT_KEY=

  CLOUD_NAME=
  API_KEY=
  API_SECRET= 
  CLOUDINARY_URL=
```

Start the server

```bash
  npm run dev
```

## Demo


## API Referense - Airlines

<details>
<summary>Show</summary>
<br>

#### Get Airlines

```
  Get Airlines http://localhost:3006/airlines/all-airlines
```

Body
```json
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id": 23,
            "name": "Panjul Airlines",
            "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672190939/ticketing/l7nr8kn8yh74fpiwa6wk.png",
            "phone": "6132654"
        },
        ],
    "message": "get data success"
}
```

#### Post Airlines

```
  Post Airlines http://localhost:3006/airlines/all-airlines
```

Body
```json
{
  "id": 23,
  "name": "Panjul Airlines",
  "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672190939/ticketing/l7nr8kn8yh74fpiwa6wk.png",
  "phone": "6132654"
}
```

#### Put Airlines

```
  Put Airlines http://localhost:3006/airlines/all-airlines/23
```

Body
```json
{
  "id": 23,
  "name": "Panjul Airlines",
  "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672190939/ticketing/l7nr8kn8yh74fpiwa6wk.png",
  "phone": "6132654"
}
```

#### Delete Airlines

```
  Delete Airlines http://localhost:3006/airlines/all-airlines/23
```

Body
```json
{
  "id": 23,
  "name": "Panjul Airlines",
  "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672190939/ticketing/l7nr8kn8yh74fpiwa6wk.png",
  "phone": "6132654"
}
```
</details>



## API Reference - Stock Ticket

<details>
<summary>Show</summary>
<br>


#### Get Stock Ticket

```
  Get Stock Ticket http://localhost:3006/ticket/getstockticket
```

Body
```json

{
      "id": 3,
      "airlines_id": "1",
      "origin": "jkt",
      "destination": "bali",
      "departure": "13.00",
      "arrived": "15.00",
      "stock": 10,
      "price": 20000,
      "code": "jt-111",
      "terminal": "3C",
      "gate": "2",
      "type": "businness"
}
```

#### Post Stock Ticket

```
  Post Stock Ticket http://localhost:3006/ticket/getstockticket
```

Body
```json
{
      "id": 3,
      "airlines_id": "1",
      "origin": "jkt",
      "destination": "bali",
      "departure": "13.00",
      "arrived": "15.00",
      "stock": 10,
      "price": 20000,
      "code": "jt-111",
      "terminal": "3C",
      "gate": "2",
      "type": "businness"
}
```

#### Put Stock Ticket

```
  Put Stock Ticket http://localhost:3006/ticket/getstockticket/3
```

Body
```json
{
      "id": 3,
      "airlines_id": "1",
      "origin": "jkt",
      "destination": "bali",
      "departure": "13.00",
      "arrived": "15.00",
      "stock": 10,
      "price": 20000,
      "code": "jt-111",
      "terminal": "3C",
      "gate": "2",
      "type": "businness"
}
```

#### Delete Stock Ticket

```
  Delete Stock Ticket http://localhost:3006/ticket/getstockticket/3
```

Body
```json
{
      "id": 3,
      "airlines_id": "1",
      "origin": "jkt",
      "destination": "bali",
      "departure": "13.00",
      "arrived": "15.00",
      "stock": 10,
      "price": 20000,
      "code": "jt-111",
      "terminal": "3C",
      "gate": "2",
      "type": "businness"
}
```
</details>



## API Referece - Ticket


<details>
<summary>Show</summary>
<br>

#### Get Ticket

```
  Get Ticket http://localhost:3006/ticket/get-ticket
```

Body

```json
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id": "7",
            "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
            "detail_user": "Mr",
            "total_ticket": 1,
            "total_price": "2500",
            "status": "0",
            "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
            "date": "2022-12-26T22:18:01.057Z",
            "stock_id": null,
            "custommer_name": "Revanda",
            "nationality": "ID",
            "insurance": "0",
            "grand_total": "0"
        },
 ],
    "message": "Get ticket success"
}
```

#### Post Ticket

```
  Post Ticket http://localhost:3006/ticket/post-ticket
```

Body
```json
{
    "user_id":"0ef98410-8f58-40c7-906b-05a5d4f25f5a",
    "detail_user":"abcdefg",
    "total_ticket":2,
    "total_price":"800000",
    "status":1,
    "uuid":"barcode guys"
}
```

#### Put Ticket

```
  Put Ticket http://localhost:3006/ticket/put-ticket/6
```

Body
```json
{
    "user_id":"0ef98410-8f58-40c7-906b-05a5d4f25f5a",
    "detail_user":"abcdefghijgl",
    "total_ticket":2,
    "total_price":"800000",
    "status":1,
    "uuid":"barcode guys baru"
}
```

#### Delete Ticket

```
  Delete Ticket http://localhost:3006/ticket/delete-ticket/6
```

Body

```json
{
            "id": "6",
            "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
            "detail_user": "Mr",
            "total_ticket": 1,
            "total_price": "2500",
            "status": "0",
            "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
            "date": "2022-12-26T22:13:55.279Z",
            "stock_id": null,
            "custommer_name": "Revanda",
            "nationality": "ID",
            "insurance": "0",
            "grand_total": "0"
}
```
</details>



## API Reference - Ticket Status

<details>
<summary>Show</summary>
<br>

#### Get Detail Ticket Status

```
  Get Ticket Status http://localhost:3006/ticket-status/get-ticket-status
```

Body

```json
"success": true,
    "statusCode": 200,
    "data": {
        "command": "SELECT",
        "rowCount": 2,
        "oid": null,
        "rows": [
            {
                "id": 4,
                "info": "1",
                "detail": "Eticket issued"
            },
            {
                "id": 7,
                "info": "0",
                "detail": "Waiting for payment"
            }
        ],
  "message": "Get ticket success"
}
```

#### Post Ticket Status

```
  Post Ticket Status http://localhost:3006/ticket-status/post-ticket-status
```

Body

```json
{
  "id": 7,
  "info": "0",
  "detail": "Waiting for payment"
}
```

#### Put Ticket Status

```
  Put Ticket Status http://localhost:3006/ticket-status/put-ticket-status/4
```

Body

```Json
{
  "id": 4,
  "info": "1",
  "detail": "Eticket issued"
}
```

#### Delete Ticket Status

```
  Delete Ticket Status http://localhost:3006/ticket-status/delete-ticket-status/6
```

Body
```json
{
  "id": 6,
  "info": "1",
  "detail": "Waiting For Payment"
}
```
</details>



## API Reference - Airports

<details>
<summary>Show</summary>
<br>

#### Get Detail Airports

```
  Get All airports http://localhost:3000/airports
```

Body
```json
{
  "id": "1",
  "name": "Bandar Udara Soekarno Hatta",
  "code": "CGJ"
}
```

#### Post Airports

```
  Post Airports http://localhost:3000/airports
```

Body
```json
{
  "id": "1",
  "name": "Bandar Udara Soekarno Hatta",
  "code": "CGJ"
}
```

#### Put Airports

```
  Put Airport http://localhost:3000/airports/1
```

Body
```json
{
    "name": "Bandar Udara Soekarno Hatta",
    "code": "CGJ"
}
```

#### Delete Airports

```
  Delete Airports http://localhost:3000/airports/1
```

Body
```json
{
  "id": "1",
  "name": "Bandar Udara Soekarno Hatta",
  "code": "CGJ"
}
```

</details>
