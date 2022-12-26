# AIRPORTS

[GET] get all airports

```
http://localhost:3000/airports
```


[POST] post airports

```
http://localhost:3000/airports
```

body:
```
{
  "id": "1",
  "name": "Bandar Udara Soekarno Hatta",
  "code": "CGJ"
}
```

[PUT] put airports

```
http://localhost:3000/airports/1
```

body:
```
{
    "name": "Bandar Udara Soekarno Hatta",
    "code": "CGJ"
}
```
[DELETE] delete airports

```

http://localhost:3000/airports/1
```