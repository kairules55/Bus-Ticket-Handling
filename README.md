# Bus-Ticket-Handling

A ticket handler for a bus company build using node.js and express framework backed by a mongodb database.

## Install Dependencies

```bash
npm install
```

## Start the app

```bash
node index.js
```

# REST API

Below are the list of api endpoints and the data required.

## Create Bus

---

Api to create a bus, it require the bus-number and the number of seats in the bus

### Request

#### API endpoint

```url
localhost:8000/api/v1/create-bus/
```

#### Data

```data
{
    number: Number
    totalSeats: Number
}
```

### Response

This api endpoint will create the bus along with the desired number of seat in it and will give a success message in response. Initially all the seats will be not booked.

```data
{
    data: {
            {
            "seats": [
                    "5e73b83e619cbd3d5860c4be",
                    "5e73b83e619cbd3d5860c4c0",
                    "5e73b83e619cbd3d5860c4c2",
                    "5e73b83e619cbd3d5860c4c4",
                    "5e73b83e619cbd3d5860c4c6",
                    "5e73b83e619cbd3d5860c4c8",
                    "5e73b83e619cbd3d5860c4ca",
                    "5e73b83e619cbd3d5860c4cc",
                    "5e73b83e619cbd3d5860c4ce",
                    "5e73b83e619cbd3d5860c4d0",
                    "5e73b83e619cbd3d5860c4d2",
                    "5e73b83e619cbd3d5860c4d4",
                    "5e73b83e619cbd3d5860c4d6",
                    "5e73b83e619cbd3d5860c4d8",
                    "5e73b83e619cbd3d5860c4da",
                    "5e73b83e619cbd3d5860c4dc",
                    "5e73b83e619cbd3d5860c4de",
                    "5e73b83e619cbd3d5860c4e0",
                    "5e73b83e619cbd3d5860c4e2",
                    "5e73b83e619cbd3d5860c4e4",
                    "5e73b83e619cbd3d5860c4e6",
                    "5e73b83e619cbd3d5860c4e8",
                    "5e73b83e619cbd3d5860c4ea",
                    "5e73b83e619cbd3d5860c4ec",
                    "5e73b83e619cbd3d5860c4ee",
                    "5e73b83e619cbd3d5860c4f0",
                    "5e73b83e619cbd3d5860c4f2",
                    "5e73b83e619cbd3d5860c4f4",
                    "5e73b83e619cbd3d5860c4f6",
                    "5e73b83e619cbd3d5860c4f8",
                    "5e73b83e619cbd3d5860c4fa",
                    "5e73b83e619cbd3d5860c4fc",
                    "5e73b83e619cbd3d5860c4fe",
                    "5e73b83e619cbd3d5860c500",
                    "5e73b83e619cbd3d5860c502",
                    "5e73b83e619cbd3d5860c504",
                    "5e73b83e619cbd3d5860c506",
                    "5e73b83e619cbd3d5860c508",
                    "5e73b83e619cbd3d5860c50a",
                    "5e73b83e619cbd3d5860c50c"
                ],
                "_id": "5e73b83e619cbd3d5860c4bd",
                "number": 1234,
                "totalSeats": 40,
                "createdAt": "2020-03-19T18:21:50.557Z",
                "updatedAt": "2020-03-19T18:21:50.643Z",
                "__v": 1
            }
    }
}
```

## Create Ticket

---

Api to create a ticket for a specific seat in a bus

### Request

#### API endpoint

```url
localhost:8000/api/v1/create-ticket/
```

#### Data

```data
{
    name: String
    bus: ObjectId
    seat: ObjectId
}
```

### Response

This endpoint will create a ticket if the seat is not already booked else will notify that seat is already booked.

```data
{
    "data": {
        "ticket": {
            "_id": "5e73b8c6619cbd3d5860c50e",
            "status": true,
            "name": "Krishana",
            "bus": "5e73b1cdeb02f234450ceae4",
            "seat": "5e73b1ceeb02f234450ceae9",
            "createdAt": "2020-03-19T18:24:06.613Z",
            "updatedAt": "2020-03-19T18:24:06.613Z",
            "__v": 0
        }
    },
    "message": "Ticket Created"
}
```

## Close Ticket

---

Api to close a opened ticket

### Request

#### API endpoint

```url
localhost:8000/api/v1/close-ticket/
```

#### Data

```data
{
    ticket: ObjectId
}
```

### Response

This endpoint will close the ticket and also mark the respective seat as not booked

```data
{
    "data": {
        "ticket": {
            "_id": "5e73b8c6619cbd3d5860c50e",
            "status": false,
            "name": "Krishana",
            "bus": "5e73b1cdeb02f234450ceae4",
            "seat": {
                "_id": "5e73b1ceeb02f234450ceae9",
                "number": 3,
                "booked": false,
                "bus": "5e73b1cdeb02f234450ceae4",
                "createdAt": "2020-03-19T17:54:22.220Z",
                "updatedAt": "2020-03-19T18:25:45.275Z",
                "__v": 0
            },
            "createdAt": "2020-03-19T18:24:06.613Z",
            "updatedAt": "2020-03-19T18:25:45.273Z",
            "__v": 0
        }
    },
    "message": "Ticked Closed!"
}
```

## Open Ticket

---

Api to open a closed ticket

### Request

#### API endpoint

```url
localhost:8000/api/v1/open-ticket/
```

#### Data

```data
{
    ticket: ObjectId
}
```

### Response

This endpoint will open the closed ticket only if the seat is not already Booked!

```data
{
    "data": {
        "ticket": {
            "_id": "5e73b8c6619cbd3d5860c50e",
            "status": true,
            "name": "Krishana",
            "bus": "5e73b1cdeb02f234450ceae4",
            "seat": {
                "_id": "5e73b1ceeb02f234450ceae9",
                "number": 3,
                "booked": true,
                "bus": "5e73b1cdeb02f234450ceae4",
                "createdAt": "2020-03-19T17:54:22.220Z",
                "updatedAt": "2020-03-19T18:26:36.377Z",
                "__v": 0
            },
            "createdAt": "2020-03-19T18:24:06.613Z",
            "updatedAt": "2020-03-19T18:26:36.376Z",
            "__v": 0
        }
    },
    "message": "Ticket Opened!"
}
```

## All Ticket Status

---

Api to get all the ticket status for a particular bus

### Request

#### API endpoint

```url
localhost:8000/api/v1/all-ticket-status/
```

#### Data

```data
{
    bus: ObjectId
}
```

### Response

This endpoint will return all the ticket status for a particular bus.

```data
{
    "data":{
        "tickets":{
            {
                "_id": "5e73b3c06268b937fd4e062f",
                "status": false,
                "name": "Ali",
                "bus": "5e73b1cdeb02f234450ceae4",
                "seat": {
                    "_id": "5e73b1ceeb02f234450ceae7",
                    "number": 2,
                    "booked": true,
                    "bus": "5e73b1cdeb02f234450ceae4",
                    "createdAt": "2020-03-19T17:54:22.216Z",
                    "updatedAt": "2020-03-19T18:12:31.728Z",
                    "__v": 0
                },
                "createdAt": "2020-03-19T18:02:40.149Z",
                "updatedAt": "2020-03-19T18:11:37.403Z",
                "__v": 0
            },
            {
                "_id": "5e73b60f6b4b9a3b594ed48c",
                "status": true,
                "name": "Krishana",
                "bus": "5e73b1cdeb02f234450ceae4",
                "seat": {
                    "_id": "5e73b1ceeb02f234450ceae7",
                    "number": 2,
                    "booked": true,
                    "bus": "5e73b1cdeb02f234450ceae4",
                    "createdAt": "2020-03-19T17:54:22.216Z",
                    "updatedAt": "2020-03-19T18:12:31.728Z",
                    "__v": 0
                },
                "createdAt": "2020-03-19T18:12:31.720Z",
                "updatedAt": "2020-03-19T18:12:31.720Z",
                "__v": 0
            }
        }
    }
}
```

## All Open Ticket

---

Api to get all the open ticket for a particular bus.

### Request

#### API endpoint

```url
localhost:8000/api/v1/all-open-ticket/
```

#### Data

```data
{
    bus: ObjectId
}
```

### Response

This endpoint will return all the open ticket for the particular bus.

```data
{
    "data": {
        "tickets": [
            {
                "_id": "5e73b60f6b4b9a3b594ed48c",
                "status": true,
                "name": "Krishana",
                "bus": "5e73b1cdeb02f234450ceae4",
                "seat": {
                    "_id": "5e73b1ceeb02f234450ceae7",
                    "number": 2,
                    "booked": true,
                    "bus": "5e73b1cdeb02f234450ceae4",
                    "createdAt": "2020-03-19T17:54:22.216Z",
                    "updatedAt": "2020-03-19T18:12:31.728Z",
                    "__v": 0
                },
                "createdAt": "2020-03-19T18:12:31.720Z",
                "updatedAt": "2020-03-19T18:12:31.720Z",
                "__v": 0
            },
            {
                "_id": "5e73b8c6619cbd3d5860c50e",
                "status": true,
                "name": "Krishana",
                "bus": "5e73b1cdeb02f234450ceae4",
                "seat": {
                    "_id": "5e73b1ceeb02f234450ceae9",
                    "number": 3,
                    "booked": true,
                    "bus": "5e73b1cdeb02f234450ceae4",
                    "createdAt": "2020-03-19T17:54:22.220Z",
                    "updatedAt": "2020-03-19T18:26:36.377Z",
                    "__v": 0
                },
                "createdAt": "2020-03-19T18:24:06.613Z",
                "updatedAt": "2020-03-19T18:26:36.376Z",
                "__v": 0
            }
        ]
    },
    "message": "All Open Ticket!"
}
```

## All Closed Ticket

---

Api to get all the closed ticket for a particular bus.

### Request

#### API endpoint

```url
localhost:8000/api/v1/all-close-ticket/
```

#### Data

```data
{
    bus: ObjectId
}
```

### Response

This endpoint will return all the close ticket for the particular bus.

```data
{
    "data": {
        "tickets": [
            {
                "_id": "5e73b3346268b937fd4e062d",
                "status": false,
                "name": "Krishana",
                "bus": "5e73b1cdeb02f234450ceae4",
                "seat": {
                    "_id": "5e73b1cdeb02f234450ceae5",
                    "number": 1,
                    "booked": false,
                    "bus": "5e73b1cdeb02f234450ceae4",
                    "createdAt": "2020-03-19T17:54:22.002Z",
                    "updatedAt": "2020-03-19T18:11:37.392Z",
                    "__v": 0
                },
                "createdAt": "2020-03-19T18:00:20.276Z",
                "updatedAt": "2020-03-19T18:11:37.403Z",
                "__v": 0
            },
            {
                "_id": "5e73b37a6268b937fd4e062e",
                "status": false,
                "name": "Yash",
                "bus": "5e73b1cdeb02f234450ceae4",
                "seat": {
                    "_id": "5e73b1ceeb02f234450ceae9",
                    "number": 3,
                    "booked": true,
                    "bus": "5e73b1cdeb02f234450ceae4",
                    "createdAt": "2020-03-19T17:54:22.220Z",
                    "updatedAt": "2020-03-19T18:26:36.377Z",
                    "__v": 0
                },
                "createdAt": "2020-03-19T18:01:30.930Z",
                "updatedAt": "2020-03-19T18:11:37.403Z",
                "__v": 0
            },
            {
                "_id": "5e73b3c06268b937fd4e062f",
                "status": false,
                "name": "Ali",
                "bus": "5e73b1cdeb02f234450ceae4",
                "seat": {
                    "_id": "5e73b1ceeb02f234450ceae7",
                    "number": 2,
                    "booked": true,
                    "bus": "5e73b1cdeb02f234450ceae4",
                    "createdAt": "2020-03-19T17:54:22.216Z",
                    "updatedAt": "2020-03-19T18:12:31.728Z",
                    "__v": 0
                },
                "createdAt": "2020-03-19T18:02:40.149Z",
                "updatedAt": "2020-03-19T18:11:37.403Z",
                "__v": 0
            }
        ]
    },
    "message": "All Close Ticket!"
}
```

## All Closed Ticket

---

This endpoint will return all the close ticket for the particular bus.

### Request

#### API endpoint

```url
localhost:8000/api/v1/user-detail/
```

#### Data

```data
{
    ticket: ObjectId
}
```

### Response

```data
{
    "data": {
        "name": "Krishana"
    },
    "message": "User Details"
}
```

## Reset Ticket

---

This endpoint will close all the open ticket and make all the seats as non booked.

### Request

#### API endpoint

```url
localhost:8000/api/v1/reset-ticket/
```

#### Data

```data
{
    bus: ObjectId
}
```

### Response

```data
{
    "data": {
        "bus": {
            "seats": [
                "5e73b1cdeb02f234450ceae5",
                "5e73b1ceeb02f234450ceae7",
                "5e73b1ceeb02f234450ceae9",
                "5e73b1ceeb02f234450ceaeb",
                "5e73b1ceeb02f234450ceaed",
                "5e73b1ceeb02f234450ceaef",
                "5e73b1ceeb02f234450ceaf1",
                "5e73b1ceeb02f234450ceaf3",
                "5e73b1ceeb02f234450ceaf5",
                "5e73b1ceeb02f234450ceaf7",
                "5e73b1ceeb02f234450ceaf9",
                "5e73b1ceeb02f234450ceafb",
                "5e73b1ceeb02f234450ceafd",
                "5e73b1ceeb02f234450ceaff",
                "5e73b1ceeb02f234450ceb01",
                "5e73b1ceeb02f234450ceb03",
                "5e73b1ceeb02f234450ceb05",
                "5e73b1ceeb02f234450ceb07",
                "5e73b1ceeb02f234450ceb09",
                "5e73b1ceeb02f234450ceb0b",
                "5e73b1ceeb02f234450ceb0d",
                "5e73b1ceeb02f234450ceb0f",
                "5e73b1ceeb02f234450ceb11",
                "5e73b1ceeb02f234450ceb13",
                "5e73b1ceeb02f234450ceb15",
                "5e73b1ceeb02f234450ceb17",
                "5e73b1ceeb02f234450ceb19",
                "5e73b1ceeb02f234450ceb1b",
                "5e73b1ceeb02f234450ceb1d",
                "5e73b1ceeb02f234450ceb1f",
                "5e73b1ceeb02f234450ceb21",
                "5e73b1ceeb02f234450ceb23",
                "5e73b1ceeb02f234450ceb25",
                "5e73b1ceeb02f234450ceb27",
                "5e73b1ceeb02f234450ceb29",
                "5e73b1ceeb02f234450ceb2b",
                "5e73b1ceeb02f234450ceb2d",
                "5e73b1ceeb02f234450ceb2f",
                "5e73b1ceeb02f234450ceb31",
                "5e73b1ceeb02f234450ceb33"
            ],
            "_id": "5e73b1cdeb02f234450ceae4",
            "number": 1234,
            "totalSeats": 40,
            "createdAt": "2020-03-19T17:54:21.823Z",
            "updatedAt": "2020-03-19T17:54:22.280Z",
            "__v": 1
        }
    },
    "message": "Reset All Bus Ticket!"
}
```

## All Non Booked Seat

---

It will return all non reserved seats for the particular bus.

### Request

#### API endpoint

```url
localhost:8000/api/v1/all-non-booked/
```

#### Data

```data
{
    bus: ObjectId
}
```

### Response

```data
{
    "data": {
        "seats": [
            {
                "_id": "5e73b1cdeb02f234450ceae5",
                "number": 1,
                "booked": false,
                "bus": "5e73b1cdeb02f234450ceae4",
                "createdAt": "2020-03-19T17:54:22.002Z",
                "updatedAt": "2020-03-19T18:36:49.447Z",
                "__v": 0
            },
            {
                "_id": "5e73b1ceeb02f234450ceae7",
                "number": 2,
                "booked": false,
                "bus": "5e73b1cdeb02f234450ceae4",
                "createdAt": "2020-03-19T17:54:22.216Z",
                "updatedAt": "2020-03-19T18:36:49.447Z",
                "__v": 0
            }
        ]
    }
    "message": "All non booked seats"
```

## All Non Booked Seat

---

It will return all the buses

### Request

#### API endpoint

```url
localhost:8000/api/v1/buses/
```

#### Methoid

```
GET
```

### Response

```data
{
    "data": {
        "buses": [
            {
                "seats": [
                    "5e73b1cdeb02f234450ceae5",
                    "5e73b1ceeb02f234450ceae7",
                    "5e73b1ceeb02f234450ceae9",
                    "5e73b1ceeb02f234450ceaeb",
                    "5e73b1ceeb02f234450ceaed",
                    "5e73b1ceeb02f234450ceaef",
                    "5e73b1ceeb02f234450ceaf1",
                    "5e73b1ceeb02f234450ceaf3",
                    "5e73b1ceeb02f234450ceaf5",
                    "5e73b1ceeb02f234450ceaf7",
                    "5e73b1ceeb02f234450ceaf9",
                    "5e73b1ceeb02f234450ceafb",
                    "5e73b1ceeb02f234450ceafd",
                    "5e73b1ceeb02f234450ceaff",
                    "5e73b1ceeb02f234450ceb01",
                    "5e73b1ceeb02f234450ceb03",
                    "5e73b1ceeb02f234450ceb05",
                    "5e73b1ceeb02f234450ceb07",
                    "5e73b1ceeb02f234450ceb09",
                    "5e73b1ceeb02f234450ceb0b",
                    "5e73b1ceeb02f234450ceb0d",
                    "5e73b1ceeb02f234450ceb0f",
                    "5e73b1ceeb02f234450ceb11",
                    "5e73b1ceeb02f234450ceb13",
                    "5e73b1ceeb02f234450ceb15",
                    "5e73b1ceeb02f234450ceb17",
                    "5e73b1ceeb02f234450ceb19",
                    "5e73b1ceeb02f234450ceb1b",
                    "5e73b1ceeb02f234450ceb1d",
                    "5e73b1ceeb02f234450ceb1f",
                    "5e73b1ceeb02f234450ceb21",
                    "5e73b1ceeb02f234450ceb23",
                    "5e73b1ceeb02f234450ceb25",
                    "5e73b1ceeb02f234450ceb27",
                    "5e73b1ceeb02f234450ceb29",
                    "5e73b1ceeb02f234450ceb2b",
                    "5e73b1ceeb02f234450ceb2d",
                    "5e73b1ceeb02f234450ceb2f",
                    "5e73b1ceeb02f234450ceb31",
                    "5e73b1ceeb02f234450ceb33"
                ],
                "_id": "5e73b1cdeb02f234450ceae4",
                "number": 1234,
                "totalSeats": 40,
                "createdAt": "2020-03-19T17:54:21.823Z",
                "updatedAt": "2020-03-19T17:54:22.280Z",
                "__v": 1
            },
            {
                "seats": [
                    "5e73b83e619cbd3d5860c4be",
                    "5e73b83e619cbd3d5860c4c0",
                    "5e73b83e619cbd3d5860c4c2",
                    "5e73b83e619cbd3d5860c4c4",
                    "5e73b83e619cbd3d5860c4c6",
                    "5e73b83e619cbd3d5860c4c8",
                    "5e73b83e619cbd3d5860c4ca",
                    "5e73b83e619cbd3d5860c4cc",
                    "5e73b83e619cbd3d5860c4ce",
                    "5e73b83e619cbd3d5860c4d0",
                    "5e73b83e619cbd3d5860c4d2",
                    "5e73b83e619cbd3d5860c4d4",
                    "5e73b83e619cbd3d5860c4d6",
                    "5e73b83e619cbd3d5860c4d8",
                    "5e73b83e619cbd3d5860c4da",
                    "5e73b83e619cbd3d5860c4dc",
                    "5e73b83e619cbd3d5860c4de",
                    "5e73b83e619cbd3d5860c4e0",
                    "5e73b83e619cbd3d5860c4e2",
                    "5e73b83e619cbd3d5860c4e4",
                    "5e73b83e619cbd3d5860c4e6",
                    "5e73b83e619cbd3d5860c4e8",
                    "5e73b83e619cbd3d5860c4ea",
                    "5e73b83e619cbd3d5860c4ec",
                    "5e73b83e619cbd3d5860c4ee",
                    "5e73b83e619cbd3d5860c4f0",
                    "5e73b83e619cbd3d5860c4f2",
                    "5e73b83e619cbd3d5860c4f4",
                    "5e73b83e619cbd3d5860c4f6",
                    "5e73b83e619cbd3d5860c4f8",
                    "5e73b83e619cbd3d5860c4fa",
                    "5e73b83e619cbd3d5860c4fc",
                    "5e73b83e619cbd3d5860c4fe",
                    "5e73b83e619cbd3d5860c500",
                    "5e73b83e619cbd3d5860c502",
                    "5e73b83e619cbd3d5860c504",
                    "5e73b83e619cbd3d5860c506",
                    "5e73b83e619cbd3d5860c508",
                    "5e73b83e619cbd3d5860c50a",
                    "5e73b83e619cbd3d5860c50c"
                ],
                "_id": "5e73b83e619cbd3d5860c4bd",
                "number": 1234,
                "totalSeats": 40,
                "createdAt": "2020-03-19T18:21:50.557Z",
                "updatedAt": "2020-03-19T18:21:50.643Z",
                "__v": 1
            }
        ]
    },
    "message": "All Buses!"
}
```
