## Production Deployment
The app has been deployed to vercel.com, and you can access it using the following link: https://gigih-fp-api.vercel.app/

## Database Schema
Database: `gigih_fp`

Colletions:
1. `videoThumbnails` : This collection will store information about each video data.

    document structure
    
    ### Videos Object
    ```
    {
        _id: <ObjectID>,
        title: string,
        urlVideo: string,
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
        price: string,
        urlImageThumbnailProduct: string,
        linkProduct: string,
        videoId: string,
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
        videoId: string,
        createdAt: Date,
        updatedAt: Date
    }
    ```

## API Structure
Flow from request to get response.
### Videos
---
**GET /video-thumbnail-list**
```
request -> routes -> controller [videoThumbnailList()] -> services [findAll()] -> repository [findAll()] -> response
```

**GET /video-thumbnail/:id**
```
request -> routes -> controller [videoThumbnailListById()] -> services [findById()] -> repository [findById()] -> response
```

**POST /video-thumbnail**
```
request -> routes -> controller [createVideoThumbnail()] -> services [create()] -> repository [create()] -> response
```

**PUT /video-thumbnail/:id**
```
request -> routes -> controller [updateVideoThumbnail()] -> services [update()] -> repository [updateOne()] -> response
```

**DELETE /video-thumbnail/:id**
```
request -> routes -> controller [deleteVideoThumbnail()] -> services [delete()] -> repository [deleteOne()] -> response
```

### Products
---
**GET /product-list**
```
request -> routes -> controller [productList()] -> services [findAll()] -> repository [findAll()] -> response
```

**GET /product-list/:videoId/**
```
request -> routes -> controller [productListByVideoId()] -> services [findById()] -> repository [find()] -> response
```

**POST /product**
```
request -> routes -> controller [createProduct()] -> services [create()] -> repository [create()] -> response
```

**PUT /product/:id**
```
request -> routes -> controller [updateProduct()] -> services [update()] -> repository [updateOne()] -> response
```

**DELETE /product/:id**
```
request -> routes -> controller [deleteProduct()] -> services [delete()] -> repository [deleteOne()] -> response
```

### Comments
---
**GET /comment**
```
request -> routes -> controller [commentList()] -> services [findAll()] -> repository [findAll()] -> response
```

**GET /comment-list/:videoId**
```
request -> routes -> controller [commentVideoListById()] -> services [findById()] -> repository [find()] -> response
```

**POST /comment**
```
request -> routes -> controller [createComment()] -> services [create()] -> repository [create()] -> response
```

## List API Request Response
### VideosThumbnail
#### **GET /video-thumbnail-list**
---
Return all video.

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
                "_id": <ObjectID>,
                "title": "title",
                "urlVideo": "urlVideo",
                "urlImageThumbnail": "urlImageThumbnail",
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

#### **GET /video-thumbnail/:id**
---
Return video by id .

* **URL Params**
    
    /video-thumbnail/:id
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
                "_id": <ObjectID>,
                "title": "title",
                "urlVideo": "urlVideo",
                "urlImageThumbnail": "urlImageThumbnail",
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

#### **POST /video-thumbnail**
---
Post video.

* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**

    ```json
    {
        "title": "title",
        "urlVideo": "urlVideo",
        "urlImageThumbnail": "urlImageThumbnail",
    }
    ```
* **Success Response**
    - Code: 200 (OK)
    - Content:
    ```json
    {
        "status":"OK",
        "data": {
            "video": {
                "title": "title",
                "urlVideo": "urlVideo",
                "urlImageThumbnail": "urlImageThumbnail",
            }
        }
    }
    ```
* **Error Response**
    - Code: 400 (BAD REQUEST)
    - Content: 
    ```json
    { 
        "status": "Fail",
        "msg":"Failed to create video thumbnail",
        "error": "error.message" 
    }
    ```

#### **PUT /video-thumbnail/:id**
---
Put video by id.

* **URL Params**
    
    /video-thumbnail/:id
* **Headers**
  
    Content-Type: application/json
* **Body**

    ```json
    {
        "title": "title",
        "urlVideo": "urlVideo",
        "urlImageThumbnail": "urlImageThumbnail",
    }
    ```
* **Success Response**
    - Code: 200 (OK)
    - Content:
    ```json
    {
        "status": "OK",
        "msg": "Update success"
    }

    ```
* **Error Response**
    - Code: 400 (BAD REQUEST)
    - Content: 
    ```json
    { 
        "status": "Fail",
        "msg":"Failed to create video thumbnail",
        "error": "error.message" 
    }
    ```

#### **DELETE /video-thumbnail/:id**
---
Delete video by id.

* **URL Params**
    
    /video-thumbnail/:id
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
    ```json
    {
        "status": "OK",
        "msg": "Delete success"
    }

    ```
* **Error Response**
    - Code: 400 (BAD REQUEST)
    - Content: 
    ```json
    { 
        "status": "Fail",
        "msg":"Failed to delete video thumbnail",
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
                "_id": <ObjectId>,
                "title": "title",
                "price": "price",
                "urlImageThumbnailProduct":"urlImageThumbnailProduct",
                "linkProduct": "linkProduct",
                "videoID": "videoID"
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

#### **GET /product-list/:videoId/**
---
Return product by video id .

* **URL Params**
    
    /product-list/:videoId
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
                "_id": <ObjectID>,
                "title": "title",
                "price": "price",
                "urlImageThumbnailProduct":"urlImageThumbnailProduct",
                "linkProduct": "linkProduct",
                "videoID": "videoID"
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

#### **POST /product**
---
Post video.

* **URL Params**
    
    None
* **Headers**
  
    Content-Type: application/json
* **Body**

    ```json
    {
        "title": "title",
        "price": "price",
        "urlImageThumbnailProduct":"urlImageThumbnailProduct",
        "linkProduct": "linkProduct",
        "videoID": "videoID"
    }
    ```
* **Success Response**
    - Code: 200 (OK)
    - Content:
    ```json
    {
        "status":"OK",
        "data":{
            "product": {
                "title":"title",
                "price":"price",
                "urlImageThumbnailProduct":"urlImageThumbnailProduct",
                "linkProduct": "linkProduct",
                "videoID": "videoID"
            }
                
            
        }
    }
    ```
* **Error Response**
    - Code: 400 (BAD REQUEST)
    - Content: 
    ```json
    { 
        "status": "Fail",
        "msg":"Failed to create product",
        "error": "error.message" 
    }
    ```

#### **PUT /product/:id**
---
Put product by id.

* **URL Params**
    
    /product/:id
* **Headers**
  
    Content-Type: application/json
* **Body**

    ```json
    {
        "title":"title",
        "price":"price",
        "urlImageThumbnailProduct":"urlImageThumbnailProduct",
        "linkProduct": "linkProduct",
        "videoID": "videoID"
    }
    ```
* **Success Response**
    - Code: 200 (OK)
    - Content:
    ```json
    {
        "status": "OK",
        "msg": "Update success"
    }

    ```
* **Error Response**
    - Code: 400 (BAD REQUEST)
    - Content: 
    ```json
    { 
        "status": "Fail",
        "msg":"Failed to update product",
        "error": "error.message" 
    }
    ```

#### **DELETE /product/:id**
---
Delete product by id.

* **URL Params**
    
    /product/:id
* **Headers**
  
    Content-Type: application/json
* **Body**

    None
* **Success Response**
    - Code: 200 (OK)
    - Content:
    ```json
    {
        "status": "OK",
        "msg": "Delete success"
    }

    ```
* **Error Response**
    - Code: 400 (BAD REQUEST)
    - Content: 
    ```json
    { 
        "status": "Fail",
        "msg":"Failed to delete product",
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
            "username": "username",
            "comment": "comment",
            "videoId": "videoId",
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

#### **GET /comment-list/:videoId/**
---
Return comment by video id .

* **URL Params**
    
    /comment-list/:videoId
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
                "_id": <ObjectID>,
                "username": "title",
                "comment": "price",
                "videoId":"urlImageThumbnailProduct",
                "createdAt": Date,
                "updatedAt": Date
            }
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
        "username": "username",
        "comment": "comment",
        "videoID": "videoID"
    }
```
* **Success Response**
    - Code: 201 (CREATED)
    - Content:
```json
[
    "status": "Success"
    "data": {
        "commentData":{
            "username": "username",
            "comment": "comment",
            "videoID": "videoID",
            "_id": <ObjectID>,
            "createdAt": Date,
            "updatedAt": Date,
            "__v": 0
        }
    }
]
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

1. **Clone this github**, run this command line: `https://github.com/romi-ari/gigih-fp-api`
2. **Open your code editor** and accessing the project folder.
3. **Install dependencies** on project by running this command line: `npm install`. Make sure you are running in exact same folder project.
4. Open terminal and run this this command line `docker compose up` make sure to run it in the folder you just cloned .
5. Back to the **project folder** and **rename .env.sample** file into **.env** and do the instruction inside the file for configuration MongoDB connection Host.
7. Now you can **run the server** by following this command line: `npm run start`.
8. After make sure the server not getting any error, **open Postman or other app** to test the API.
9. **If you are using Postman**, you can import the *midterm.postman_collection.json* file on postman.
10. Configure the request to test if you are **not using Postman**, if you are **using postman**, you can jump into next step.
11. Finally, you can **test the API** by hit the request as much as you want.