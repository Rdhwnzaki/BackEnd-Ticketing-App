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
  DB_PORT=5826
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

#### Get All Airlines

```
  Get All Airlines https://gentle-tights-jay.cyclic.app/airlines/all-airlines
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
        {
            "id": 22,
            "name": "Irfan Airlines",
            "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672189238/ticketing/fkq5jns6ehyqbk7sy1l6.png",
            "phone": "3112654"
        },
    ],
    "message": "get data success"
}
```

#### Get Detail Airlines

```
  Get Detail Airlines https://gentle-tights-jay.cyclic.app/airlines/get-detail-airlines
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
        }
    ],
    "message": "Get detail airlines success"
}
```


#### Get Airlines By Search Name

```
  Get Airlines By Search Name https://gentle-tights-jay.cyclic.app/airlines/search/Fly Emirates
```

```json
{
    "success": true,
    "statusCode": 200,
    "data": [
          {
            "id": 15,
            "name": "Fly Emirates",
            "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074987/ticketing/sr6yglpytcymbwmvnlwt.png",
            "phone": "931778"
        },
    ],
    "message": "get data success"
}
```



#### Post Airlines

```
  Post Airlines https://gentle-tights-jay.cyclic.app/airlines/airlines/all-airlines
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
  Put Airlines https://gentle-tights-jay.cyclic.app/airlines/23
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


####

```
  Edit Photo Airline https://gentle-tights-jay.cyclic.app/airlines/23
```

```json
{
  "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672190939/ticketing/l7nr8kn8yh74fpiwa6wk.png",
}
```



#### Delete Airlines

```
  Delete Airlines https://gentle-tights-jay.cyclic.app/airlines/all-airlines/23
```

Body
```json
{
    "success": true,
    "statusCode": 200,
    "data":[
        {
            "id": 23,
            "name": "Panjul Airlines",
            "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672190939/ticketing/l7nr8kn8yh74fpiwa6wk.png",
            "phone": "6132654"
        }
    ],
    "message": "Delete stock ticket success"
}
```
</details>



## API Reference - Stock Ticket

<details>
<summary>Show</summary>
<br>


#### Get Stock Ticket

```
  Get Stock Ticket https://gentle-tights-jay.cyclic.app/stock-ticket/getstockticket
```

Body
```json
{
    "success": true,
    "statusCode": 200,
    "data": [
          {
            "id": 19,
            "origin": "BDG",
            "destination": "KLP",
            "departure": "09:00",
            "arrived": "11:15",
            "stock": 66,
            "price": 700000,
            "code": "BDG-12",
            "terminal": "12",
            "gate": "AB",
            "type": "business",
            "airlines_id": 19,
            "airlines": "Singapore Airlines",
            "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672075638/ticketing/qpxtwypmpnqsekg8w7hn.png"
        },
    ],
    "message": "Success get ticket stock data"
}
```

#### Get Stock Ticket By Id

```
  Get Stock Ticket By Id https://gentle-tights-jay.cyclic.app/stock-ticket/getstockticket/19
```

Body
```json
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id": 19,
            "origin": "BDG",
            "destination": "KLP",
            "departure": "09:00",
            "arrived": "11:15",
            "stock": 66,
            "price": 700000,
            "code": "BDG-12",
            "terminal": "12",
            "gate": "AB",
            "type": "business",
            "airlines_id": 19,
            "airlines": "Singapore Airlines",
            "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672075638/ticketing/qpxtwypmpnqsekg8w7hn.png"
        }
    ],
    "message": "Success get ticket stock data"
}
```



#### Post Stock Ticket

```
  Post Stock Ticket https://gentle-tights-jay.cyclic.app/stock-ticket
```

Body
```json
{
    "id": 5,
    "origin": "SFRC",
    "destination": "YGK",
    "departure": "10:30",
    "arrived": "01:30",
    "stock": 11,
    "price": 6000,
    "code": "GRD-212",
    "terminal": "B",
    "gate": "3",
    "type": "Business",
    "airlines_id": 14,
    "airlines": "Etihad Airlines",
    "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074927/ticketing/gsf9elr1rwycfhawyn3s.png"
}
```

#### Put By Id Stock Ticket

```
  Put Stock By Id Ticket https://gentle-tights-jay.cyclic.app/stock-ticket/edit/3
```

Body
```json
{
    "id": 5,
    "origin": "SFRC",
    "destination": "YGK",
    "departure": "10:30",
    "arrived": "01:30",
    "stock": 11,
    "price": 6000,
    "code": "GRD-212",
    "terminal": "B",
    "gate": "3",
    "type": "Business",
    "airlines_id": 14,
    "airlines": "Etihad Airlines",
    "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074927/ticketing/gsf9elr1rwycfhawyn3s.png"
}
```


#### Edit Stock Ticket

```
  Edit Stock Ticket https://gentle-tights-jay.cyclic.app/stock-ticket/edit-stock
```

Body
```json
{
 "id": 5,
  "origin": "SFRC",
  "destination": "YGK",
  "departure": "10:30",
  "arrived": "01:30",
  "stock": 11,
}
```


#### Delete Stock Ticket

```
  Delete Stock Ticket http://localhost:3006/ticket/getstockticket/3
```

Body
```json
{
   "success": true,
    "statusCode": 200,
    "data": [
        { 
            "id": 5,
            "origin": "SFRC",
            "destination": "YGK",
            "departure": "10:30",
            "arrived": "01:30",
            "stock": 11,
            "price": 6000,
            "code": "GRD-212",
            "terminal": "B",
            "gate": "3",
            "type": "Business",
            "airlines_id": 14,
            "airlines": "Etihad Airlines",
            "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074927/ticketing/gsf9elr1rwycfhawyn3s.png"
      }
    ],
    "message": "Delete stock ticket success"
}
```
</details>



## API Referece - Ticket


<details>
<summary>Show</summary>
<br>

#### Get Ticket

```
  Get Ticket https://gentle-tights-jay.cyclic.app/ticket/get-ticket
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


#### Get All Ticket

```
  Get All Ticket https://gentle-tights-jay.cyclic.app/ticket/get-all-ticket
```

Body
```json
 {
    "success": true,
    "statusCode": 200,
    "data": [
           {
            "id": "16",
            "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
            "detail_user": "Mrs",
            "total_ticket": 1,
            "total_price": "100",
            "status": "1",
            "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
            "date": "2022-12-28T17:34:04.757Z",
            "stock_id": 18,
            "custommer_name": "Ahmad Rizky Revanda",
            "nationality": "IND",
            "insurance": "0",
            "grand_total": "0"
        }
    ],
    "message": "Get ticket success"
}
```



#### Get Ticket Join

```
  Get Ticket Join https://gentle-tights-jay.cyclic.app/ticket/get-ticket-join
```

Body
```json
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id": "16",
            "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
            "detail_user": "Mrs",
            "total_ticket": 1,
            "total_price": "100",
            "status": "1",
            "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
            "date": "2022-12-28T17:34:04.757Z",
            "stock_id": 18,
            "custommer_name": "Ahmad Rizky Revanda",
            "nationality": "IND",
            "insurance": "0",
            "grand_total": "0",
            "info": "1",
            "detail": "Eticket issued",
            "origin": "KMT",
            "destination": "JKT",
            "code": "KMT-22",
            "name": "Fly Emirates"
        },
    ],
    "message": "Success Get Ticket By Token"
}
```



#### Post Ticket

```
  Post Ticket https://gentle-tights-jay.cyclic.app/ticket/post-ticket
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
  Put Ticket https://gentle-tights-jay.cyclic.app/ticket/put-ticket/6
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
  Delete Ticket https://gentle-tights-jay.cyclic.app/ticket/delete-ticket/6
```

Body

```json
{
    "success": true,
    "statusCode": 200,
    "data": [
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
    ],
    "message": "Delete ticket success"
}
```
</details>



## API Reference - Ticket Status

<details>
<summary>Show</summary>
<br>

#### Get Ticket Status

```
  Get Ticket Status https://gentle-tights-jay.cyclic.app/ticket-status/get-ticket-status
```

Body

```json
{
    "success": true,
    "statusCode": 200,
    "data": [
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
  Post Ticket Status https://gentle-tights-jay.cyclic.app/ticket-status/post-ticket-status
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
  Put Ticket Status https://gentle-tights-jay.cyclic.app/ticket-status/put-ticket-status/8
```

Body

```Json
{
  "id": 8,
  "info": "1",
  "detail": "Eticket issued"
}
```

#### Delete Ticket Status

```
  Delete Ticket Status https://gentle-tights-jay.cyclic.app/ticket-status/delete-ticket-status/8
```

Body
```json
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
          "id": 8,
          "info": "1",
          "detail": "Waiting For Payment"
        }
    ],
    "message": "Delete ticket success"
}
```
</details>



## API Reference - Airports

<details>
<summary>Show</summary>
<br>

#### Get Detail Airports

```
  Get All airports https://gentle-tights-jay.cyclic.app/airports
```

Body
```json
{
  "success": true,
    "statusCode": 200,
    "data": [
            {
            "id": "1",
            "name": "Bandar Udara Soekarno Hatta",
            "code": "CGJ"
            }
    ],
    "message": "Get airports success"
}



```

#### Post Airports

```
  Post Airports https://gentle-tights-jay.cyclic.app/airports
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
  Put Airport https://gentle-tights-jay.cyclic.app/airports/1
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
  Delete Airports https://gentle-tights-jay.cyclic.app/airports/1
```

Body
```json
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
          "id": "1",
          "name": "Bandar Udara Soekarno Hatta",
          "code": "CGJ"
        }
    ],
    "message": "Delete airports success"
}
```

</details>
