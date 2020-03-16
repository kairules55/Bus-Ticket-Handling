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
    "message": "Bus Created!"
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
    "message": "Ticket Created!"
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
    "message": "Ticket Closed!"
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
    "data": {
        "tickets": [
            {
                "_id": "5e6f8dee553188147b933ec0",
                "status": true,
                "name": "Krishana",
                "bus": "5e6f8bf5553188147b933e6f",
                "seat": "5e6f8bf5553188147b933e70",
                "createdAt": "2020-03-16T14:32:14.593Z",
                "updatedAt": "2020-03-16T14:32:14.593Z",
                "__v": 0
            },
            {
                "_id": "5e6f8f30553188147b933ec1",
                "status": false,
                "name": "Kartik",
                "bus": "5e6f8bf5553188147b933e6f",
                "seat": "5e6f8bf5553188147b933e72",
                "createdAt": "2020-03-16T14:37:36.021Z",
                "updatedAt": "2020-03-16T14:44:28.832Z",
                "__v": 0
            }
        ]
    },
    "message": "All Ticket Details!"
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
                "_id": "5e6f8dee553188147b933ec0",
                "status": true,
                "name": "Krishana",
                "bus": "5e6f8bf5553188147b933e6f",
                "seat": "5e6f8bf5553188147b933e70",
                "createdAt": "2020-03-16T14:32:14.593Z",
                "updatedAt": "2020-03-16T14:32:14.593Z",
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
                "_id": "5e6f8f30553188147b933ec1",
                "status": false,
                "name": "Kartik",
                "bus": "5e6f8bf5553188147b933e6f",
                "seat": "5e6f8bf5553188147b933e72",
                "createdAt": "2020-03-16T14:37:36.021Z",
                "updatedAt": "2020-03-16T14:44:28.832Z",
                "__v": 0
            }
        ]
    },
    "message": "All Close Ticket!"
}
```
