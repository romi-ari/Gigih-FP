# Mid Term Gigih Backend Project

## Database Schema
Database: `midterm_db`

Colletions:
1. `videoThumbnail` : This collection will store information about each video data.

    document structure
    
    ### Videos Object
    ```
    {
        _id: <ObjectID>,
        urlImageThumbnail: string
    }
    ```

2. `products` : This collection will store information about each product data.

    document structure
    
    ### Products Object
    ```
    {
        _id: <ObjectID>,
        title: string,
        linkProduct: string,
        price: string,
        videoID: string,
        createdAt: Date,
        updatedAt: Date        
    }
    ```

3. `comments` : This collection will store information about each comment data.

    document structure
    
    **#Comments Object**
    ```
    {
        _id: <ObjectID>,
        username: string,
        comment: string,
        videoID: string,
        createdAt: Date,
        updatedAt: Date
    }
    ```

## API Structure
Flow from request to get response.
### Videos
---
**GET /videos**
```
request -> routes -> controller [findAll()] -> services [findAll()] -> repository [findAll()] -> response
```

### Products
---
**GET /product-list**
```
request -> routes -> controller [findAll()] -> services [findAll()] -> repository [findAll()] -> response
```

### Comments
---
**GET /comment**
```
request -> routes -> controller [findAll()] -> services [findAll()] -> repository [findAll()] -> response
```
**POST /comment-list**
```
request -> routes -> controller [create()] -> services [create()] -> repository [create()] -> response
```

## List API Request Response
### VideosThumbnail
#### **GET /video-thumbnail-list**
---
Return all video thumbnail in the system.

* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```json
[
    {...},
    {...},
    {...}[
        {
            "_id": "64c36698045faf4ab81c2793",
            "urlImageThumbnail": "localhost.com"
        }
    ]
]
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: 
    ```json
    { 
        "msg":"Video thumbnail not found",
        "error": "error.message" 
    }
    ```

### Products
#### **GET /product-list**
---
Return all product.

* **URL Params**
    
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```json
[
    {...},
    {...},
    {...}[
        {
            "_id": "64c37c30045faf4ab81c2795",
            "linkProduct": "localhost.com",
            "title": "barang 1",
            "price": "100000",
            "videoID": "64c36698045faf4ab81c2793"
        }
    ]
]
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: 
    ```json
    { 
        "msg":"Product not found",
        "error": "error.message" 
    }
    ```

### Comments
#### **GET /comment**
---
Return all comment.

* **URL Params**
    
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
```json
[
    {...},
    {...},
    {...},[
        {
            "_id": <ObjectID>,
            "username": "string",
            "comment": "string",
            "video_id": "string",
            "createdAt": Date,
            "updatedAt": Date,
        },
    ]
]
```
* **Error Response**
    - Code: 404 (NOT FOUND)
    - Content: 
    ```json
    { 
        "msg":"Comment not found",
        "error": "error.message" 
    }
    ```  
#### **POST /comments**
---
Create a new comments 
* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**
```json
{
    "username": "string",
    "comment": "string",
    "videoID": "string"
}
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```json
{
    "status": "Success"
    {...}{
        {...} {
            "username": "string",
            "comment": "string",
            "videoID": "string",
            "_id": <ObjectID>,
            "createdAt": Date,
            "updatedAt": Date,
            "__v": 0
        }
    }
}
```
* **Error Response**
    - Code: 400 (BAD REQUEST)
    - Content: 
    ```json
    { 
        "msg":"Failed to post comment",
        "error": "error.message" 
    }
    ```

## How to Run the Server
To run this server API, you have to follow instruction below:

1. **Clone this github**, run this command line: `https://github.com/romi-ari/midterm-GG3`
2. **Open your code editor** and accessing the project folder.
3. **Install dependencies** on project by running this command line: `npm install`. Make sure you are running in exact same folder project.
4. Open terminal and run this this command line `docker compose up` make sure to run it in the folder you just cloned .
5. Back to the **project folder** and **rename .env.sample** file into **.env** and do the instruction inside the file for configuration MongoDB connection Host.
7. Now you can **run the server** by following this command line: `npm run start`.
8. After make sure the server not getting any error, **open Postman or other app** to test the API.
9. **If you are using Postman**, you can import the *midterm.postman_collection.json* file on postman.
10. Configure the request to test if you are **not using Postman**, if you are **using postman**, you can jump into next step.
11. Finally, you can **test the API** by hit the request as much as you want.