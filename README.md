# Ankasa Ticketing - Backend

## Sections

### List

- [x] [API Reference - Users](#api-reference---users)
- [x] [API Reference - Airlines](#api-reference---airlines)
- [x] [API Reference - Stock Ticket](#api-reference---stock-ticket)
- [x] [API Reference - Ticket](#api-reference---ticket)
- [x] [API Reference - Ticket Status](#api-reference---ticket-status)
- [x] [API Reference - Airports](#api-reference---airports)

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

## API Referense - Users

<details>
<summary>Show</summary>
<br>

#### Post Login

```
  Post Login https://gentle-tights-jay.cyclic.app/auth/login
```

Body

```json
{
  "email": "mgc08959@nezid.com",
  "password": "123"
}
```

#### Post Verification

```
  Post Verification https://gentle-tights-jay.cyclic.app/auth/verification
```

Body

```json
{
  "email": "mgc08959@nezid.com",
  "otp": "2457275"
}
```

#### Post Register

```
  Post Register https://gentle-tights-jay.cyclic.app/auth/register
```

```json
{
  "fullname": "wan",
  "email": "wan80@gmail.com",
  "password": "123"
}
```

#### Get Detail User

```
  Get Detail User https://gentle-tights-jay.cyclic.app/auth/user
```

Body

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "email": "mgc08959@nezid.com",
      "fullname": "wanwan",
      "password": "$2a$10$froPKPe7obT8qySZHXWjXeoHU7HGOW78pg.XW7XDmrmEvrHOix/IS",
      "otp": 219333,
      "status": 1,
      "role": "admin",
      "phone": "0834374344",
      "city": "Bandung",
      "address": "Bandung Barat",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672327013/ticketing/vxh97mx00noeldbr8uxo.png",
      "postcode": "40553"
    }
  ],
  "message": "Success Get User By Token"
}
```

#### Put User

```
  Put User https://gentle-tights-jay.cyclic.app/auth/update
```

Body

```json
{
  "fullname": "Ridhwan",
  "phone": "6132654",
  "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672327013/ticketing/vxh97mx00noeldbr8uxo.png",
  "city": "Bandung",
  "address": "Bandung Barat",
  "postcode": "40553"
}
```

#### Put Photo

```
  Put Photo https://gentle-tights-jay.cyclic.app/auth/edit-photo
```

Body

```json
{
  "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672327013/ticketing/vxh97mx00noeldbr8uxo.png"
}
```

</details>

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
      "id": 11,
      "name": "Garuda",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074680/ticketing/h35men4kh2keujehbhsy.png",
      "phone": "2123456"
    },
    {
      "id": 13,
      "name": "Lion Air",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074787/ticketing/dq7wnlyahfnhb888piue.png",
      "phone": "3123654"
    },
    {
      "id": 14,
      "name": "Etihad Airlines",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074927/ticketing/gsf9elr1rwycfhawyn3s.png",
      "phone": "6321654"
    },
    {
      "id": 15,
      "name": "Fly Emirates",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074987/ticketing/sr6yglpytcymbwmvnlwt.png",
      "phone": "931778"
    },
    {
      "id": 17,
      "name": "Qatar Airways",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672075320/ticketing/yuypeqbqx5adkcy4qkgh.png",
      "phone": "765432156"
    },
    {
      "id": 18,
      "name": "British Airways",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672075344/ticketing/cuocuaffkhugfgn3vdim.png",
      "phone": "55532154"
    },
    {
      "id": 19,
      "name": "Singapore Airlines",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672075638/ticketing/qpxtwypmpnqsekg8w7hn.png",
      "phone": "456321987"
    },
    {
      "id": 16,
      "name": "Batavia Airlines",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672080733/ticketing/loavt4uheefenpjfci5a.png",
      "phone": "932161222"
    },
    {
      "id": 22,
      "name": "Irfan Airlines",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672189238/ticketing/fkq5jns6ehyqbk7sy1l6.png",
      "phone": "3112654"
    }
  ],
  "message": "get data success"
}
```

#### Get Detail Airlines

```
  Get Detail Airlines https://gentle-tights-jay.cyclic.app/airlines/get-detail-airlines/13
```

Body

```json
{
  "success": true,
  "statusCode": 200,
  "data": [
    {
      "id": 13,
      "name": "Lion Air",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074787/ticketing/dq7wnlyahfnhb888piue.png",
      "phone": "3123654"
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
    }
  ],
  "message": "get data success"
}
```

#### Post Airlines

```
  Post Airlines https://gentle-tights-jay.cyclic.app/airlines/register
```

Body

```json
{
  "name": "Air Asia",
  "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672190939/ticketing/l7nr8kn8yh74fpiwa6wk.png",
  "phone": "6132654"
}
```

#### Put Airlines

```
  Put Airlines https://gentle-tights-jay.cyclic.app/airlines/edit/23
```

Body

```json
{
  "name": "Panjul Airlines",
  "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672190939/ticketing/l7nr8kn8yh74fpiwa6wk.png",
  "phone": "6132654"
}
```

#### Edit Photo Airlines

```
  Edit Photo Airlines https://gentle-tights-jay.cyclic.app/airlines/photo/23
```

```json
{
  "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672190939/ticketing/l7nr8kn8yh74fpiwa6wk.png"
}
```

#### Delete Airlines

```
  Delete Airlines https://gentle-tights-jay.cyclic.app/airlines/delete/27
```

Body

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "delete data success"
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
    },
    {
      "id": 20,
      "origin": "SFRC",
      "destination": "TKY",
      "departure": "03:09",
      "arrived": "20:15",
      "stock": 13,
      "price": 2500,
      "code": "GRD-212",
      "terminal": "12",
      "gate": "AB-2",
      "type": "Economy",
      "airlines_id": 14,
      "airlines": "Etihad Airlines",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074927/ticketing/gsf9elr1rwycfhawyn3s.png"
    },
    {
      "id": 18,
      "origin": "KMT",
      "destination": "JKT",
      "departure": "11:57",
      "arrived": "15:00",
      "stock": 19,
      "price": 100,
      "code": "KMT-22",
      "terminal": "B",
      "gate": "ET-6",
      "type": "Economy",
      "airlines_id": 15,
      "airlines": "Fly Emirates",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074987/ticketing/sr6yglpytcymbwmvnlwt.png"
    },
    {
      "id": 16,
      "origin": "BDG",
      "destination": "PAPUA",
      "departure": "06:40",
      "arrived": "10:46",
      "stock": 200,
      "price": 2000000,
      "code": "GRD-212",
      "terminal": "AW-11",
      "gate": "3",
      "type": "Economy",
      "airlines_id": 13,
      "airlines": "Lion Air",
      "photo": "https://res.cloudinary.com/dsxjgmjtz/image/upload/v1672074787/ticketing/dq7wnlyahfnhb888piue.png"
    }
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
  Post Stock Ticket https://gentle-tights-jay.cyclic.app/stock-ticket/register
```

Body

```json
{
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
  "airlines_id": 14
}
```

#### Put By Id Stock Ticket

```
  Put Stock By Id Ticket https://gentle-tights-jay.cyclic.app/stock-ticket/edit/5
```

Body

```json
{
  "origin": "ACH",
  "destination": "MDR",
  "departure": "10:30",
  "arrived": "01:30",
  "stock": 11,
  "price": 6000,
  "code": "GRD-212",
  "terminal": "B",
  "gate": "3",
  "type": "Business",
  "airlines_id": 14
}
```

#### Edit Stock Ticket

```
  Edit Stock Ticket https://gentle-tights-jay.cyclic.app/stock-ticket/edit-stock
```

Body

```json
{
  "stock": 10
}
```

#### Delete Stock Ticket

```
  Delete Stock Ticket https://gentle-tights-jay.cyclic.app/stock-ticket/delete/5
```

Body

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
  "message": "Success delete ticket stock data"
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
      "date": "2022-12-27T05:18:01.057Z",
      "stock_id": null,
      "custommer_name": "Revanda",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "8",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T05:59:29.838Z",
      "stock_id": null,
      "custommer_name": "Pramudia Syahrul Fanani",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "9",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T06:02:56.311Z",
      "stock_id": null,
      "custommer_name": "Revanda",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "10",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T06:15:09.743Z",
      "stock_id": null,
      "custommer_name": "Eca",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "1",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "abc",
      "total_ticket": 1,
      "total_price": "700000",
      "status": "1",
      "uuid": "barcodess",
      "date": "2022-12-24T09:56:46.618Z",
      "stock_id": null,
      "custommer_name": null,
      "nationality": null,
      "insurance": null,
      "grand_total": null
    },
    {
      "id": "2",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "abcde",
      "total_ticket": 2,
      "total_price": "800000",
      "status": "1",
      "uuid": "barcode",
      "date": "2022-12-24T15:36:19.850Z",
      "stock_id": 3,
      "custommer_name": null,
      "nationality": null,
      "insurance": null,
      "grand_total": null
    },
    {
      "id": "4",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "70",
      "status": "0",
      "uuid": "231dsfs56f4",
      "date": "2022-12-26T19:42:23.390Z",
      "stock_id": null,
      "custommer_name": "Beckham",
      "nationality": "UK",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "5",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T04:10:30.475Z",
      "stock_id": null,
      "custommer_name": "Revanda",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "6",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T05:13:55.279Z",
      "stock_id": null,
      "custommer_name": "Revanda",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "3",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "abcdefg",
      "total_ticket": 2,
      "total_price": "800000",
      "status": "1",
      "uuid": "barcode guys",
      "date": "2022-12-25T09:03:57.979Z",
      "stock_id": 6,
      "custommer_name": null,
      "nationality": null,
      "insurance": null,
      "grand_total": null
    },
    {
      "id": "11",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "1",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T09:57:44.856Z",
      "stock_id": null,
      "custommer_name": "Mawou",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "12",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "6000",
      "status": "1",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T10:08:44.100Z",
      "stock_id": null,
      "custommer_name": "Ruban",
      "nationality": "UK",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "13",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "55",
      "status": "1",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T10:17:18.425Z",
      "stock_id": null,
      "custommer_name": "Marcheilla",
      "nationality": "SG",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "32",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "800000",
      "status": "0",
      "uuid": "barcode guys",
      "date": "2022-12-29T03:08:16.922Z",
      "stock_id": 20,
      "custommer_name": "ahmad",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "18",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "700000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-29T09:18:43.189Z",
      "stock_id": 19,
      "custommer_name": "March",
      "nationality": "UK",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "19",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "700000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-29T09:21:38.627Z",
      "stock_id": 19,
      "custommer_name": "Marchel",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "14",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "1",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-28T17:28:32.460Z",
      "stock_id": 20,
      "custommer_name": "Ahmad Rizky Revanda",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "15",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "2000000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-28T17:28:51.915Z",
      "stock_id": 16,
      "custommer_name": "Wann",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0"
    },
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
      "id": "7",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T05:18:01.057Z",
      "stock_id": null,
      "custommer_name": "Revanda",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "8",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T05:59:29.838Z",
      "stock_id": null,
      "custommer_name": "Pramudia Syahrul Fanani",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "9",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T06:02:56.311Z",
      "stock_id": null,
      "custommer_name": "Revanda",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "10",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T06:15:09.743Z",
      "stock_id": null,
      "custommer_name": "Eca",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "1",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "abc",
      "total_ticket": 1,
      "total_price": "700000",
      "status": "1",
      "uuid": "barcodess",
      "date": "2022-12-24T09:56:46.618Z",
      "stock_id": null,
      "custommer_name": null,
      "nationality": null,
      "insurance": null,
      "grand_total": null
    },
    {
      "id": "2",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "abcde",
      "total_ticket": 2,
      "total_price": "800000",
      "status": "1",
      "uuid": "barcode",
      "date": "2022-12-24T15:36:19.850Z",
      "stock_id": 3,
      "custommer_name": null,
      "nationality": null,
      "insurance": null,
      "grand_total": null
    },
    {
      "id": "4",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "70",
      "status": "0",
      "uuid": "231dsfs56f4",
      "date": "2022-12-26T19:42:23.390Z",
      "stock_id": null,
      "custommer_name": "Beckham",
      "nationality": "UK",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "5",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T04:10:30.475Z",
      "stock_id": null,
      "custommer_name": "Revanda",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "6",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "0",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T05:13:55.279Z",
      "stock_id": null,
      "custommer_name": "Revanda",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "3",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "abcdefg",
      "total_ticket": 2,
      "total_price": "800000",
      "status": "1",
      "uuid": "barcode guys",
      "date": "2022-12-25T09:03:57.979Z",
      "stock_id": 6,
      "custommer_name": null,
      "nationality": null,
      "insurance": null,
      "grand_total": null
    },
    {
      "id": "11",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "1",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T09:57:44.856Z",
      "stock_id": null,
      "custommer_name": "Mawou",
      "nationality": "ID",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "12",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "6000",
      "status": "1",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T10:08:44.100Z",
      "stock_id": null,
      "custommer_name": "Ruban",
      "nationality": "UK",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "13",
      "user_id": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "55",
      "status": "1",
      "uuid": "87b406c3-bc9f-4726-8266-c4ed53b053ca",
      "date": "2022-12-27T10:17:18.425Z",
      "stock_id": null,
      "custommer_name": "Marcheilla",
      "nationality": "SG",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "32",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "800000",
      "status": "0",
      "uuid": "barcode guys",
      "date": "2022-12-29T03:08:16.922Z",
      "stock_id": 20,
      "custommer_name": "ahmad",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "18",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "700000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-29T09:18:43.189Z",
      "stock_id": 19,
      "custommer_name": "March",
      "nationality": "UK",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "19",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "700000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-29T09:21:38.627Z",
      "stock_id": 19,
      "custommer_name": "Marchel",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "14",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "1",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-28T17:28:32.460Z",
      "stock_id": 20,
      "custommer_name": "Ahmad Rizky Revanda",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0"
    },
    {
      "id": "15",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "2000000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-28T17:28:51.915Z",
      "stock_id": 16,
      "custommer_name": "Wann",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0"
    },
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
    {
      "id": "14",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "2500",
      "status": "1",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-28T17:28:32.460Z",
      "stock_id": 20,
      "custommer_name": "Ahmad Rizky Revanda",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0",
      "info": "1",
      "detail": "Eticket issued",
      "origin": "SFRC",
      "destination": "TKY",
      "code": "GRD-212",
      "name": "Etihad Airlines"
    },
    {
      "id": "15",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "2000000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-28T17:28:51.915Z",
      "stock_id": 16,
      "custommer_name": "Wann",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0",
      "info": "0",
      "detail": "Waiting for payment",
      "origin": "BDG",
      "destination": "PAPUA",
      "code": "GRD-212",
      "name": "Lion Air"
    },
    {
      "id": "19",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "700000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-29T09:21:38.627Z",
      "stock_id": 19,
      "custommer_name": "Marchel",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0",
      "info": "0",
      "detail": "Waiting for payment",
      "origin": "BDG",
      "destination": "KLP",
      "code": "BDG-12",
      "name": "Singapore Airlines"
    },
    {
      "id": "18",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "700000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-29T09:18:43.189Z",
      "stock_id": 19,
      "custommer_name": "March",
      "nationality": "UK",
      "insurance": "0",
      "grand_total": "0",
      "info": "0",
      "detail": "Waiting for payment",
      "origin": "BDG",
      "destination": "KLP",
      "code": "BDG-12",
      "name": "Singapore Airlines"
    },
    {
      "id": "32",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "800000",
      "status": "0",
      "uuid": "barcode guys",
      "date": "2022-12-29T03:08:16.922Z",
      "stock_id": 20,
      "custommer_name": "ahmad",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0",
      "info": "0",
      "detail": "Waiting for payment",
      "origin": "SFRC",
      "destination": "TKY",
      "code": "GRD-212",
      "name": "Etihad Airlines"
    },
    {
      "id": "15",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "2000000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-28T17:28:51.915Z",
      "stock_id": 16,
      "custommer_name": "Wann",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0",
      "info": "0",
      "detail": "Waiting for payment",
      "origin": "BDG",
      "destination": "PAPUA",
      "code": "GRD-212",
      "name": "Lion Air"
    },
    {
      "id": "19",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "700000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-29T09:21:38.627Z",
      "stock_id": 19,
      "custommer_name": "Marchel",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0",
      "info": "0",
      "detail": "Waiting for payment",
      "origin": "BDG",
      "destination": "KLP",
      "code": "BDG-12",
      "name": "Singapore Airlines"
    },
    {
      "id": "18",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mrs",
      "total_ticket": 1,
      "total_price": "700000",
      "status": "0",
      "uuid": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "date": "2022-12-29T09:18:43.189Z",
      "stock_id": 19,
      "custommer_name": "March",
      "nationality": "UK",
      "insurance": "0",
      "grand_total": "0",
      "info": "0",
      "detail": "Waiting for payment",
      "origin": "BDG",
      "destination": "KLP",
      "code": "BDG-12",
      "name": "Singapore Airlines"
    },
    {
      "id": "32",
      "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
      "detail_user": "Mr",
      "total_ticket": 1,
      "total_price": "800000",
      "status": "0",
      "uuid": "barcode guys",
      "date": "2022-12-29T03:08:16.922Z",
      "stock_id": 20,
      "custommer_name": "ahmad",
      "nationality": "IND",
      "insurance": "0",
      "grand_total": "0",
      "info": "0",
      "detail": "Waiting for payment",
      "origin": "SFRC",
      "destination": "TKY",
      "code": "GRD-212",
      "name": "Etihad Airlines"
    }
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
  "id": "90",
  "user_id": "0ef98410-8f58-40c7-906b-05a5d4f25f5a",
  "detail_user": "abcdefg",
  "total_price": "800000",
  "uuid": "barcode guys",
  "stock_id": 20,
  "custommer_name": "Ahmad",
  "nationality": "IND"
}
```

#### Put Ticket

```
  Put Ticket https://gentle-tights-jay.cyclic.app/ticket/put-ticket/90
```

Body

```json
{
  "status": 1
}
```

#### Delete Ticket

```
  Delete Ticket https://gentle-tights-jay.cyclic.app/ticket/delete-ticket/90
```

Body

```json
{
  "success": true,
  "statusCode": 200,
  "data": [],
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
  "data": [],
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
