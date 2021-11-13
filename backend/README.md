## Instalación
`git clone https://github.com/arielabaruffaldi/ecommerce-back`

`cd ecommerce-back && cd backend`

`npm install`

`npm run dev`

## Products
----
#### Get all products
**GET**
`http://localhost:8080/api/productos`

-----
#### Get product by id
**GET**
`http://localhost:8080/api/productos/:id`

-----
#### Create a new product
**POST**
`http://localhost:8080/api/productos/`

example body:
  <pre><code>
    {
        "name": "product example name",
        "price": 200,
        "thumbnail": "product example thumbnail",
        "code": "product example code",
        "stock": 10
    },
    </pre></code>
    
-----
#### Edit a product
**PUT**
`http://localhost:8080/api/productos/:id`
 <pre><code>
    {
        "price": 100,
    },
    </pre></code>

----    

#### Delete a product
**DELETE**
`http://localhost:8080/api/productos/:id`

    


## Cart
----
#### Create a new cart
**POST**
`http://localhost:8080/api/carrito`

*products*: array of products id's

example body:
  <pre><code>
    {
        "products": [
            1, 2, 3
        ]
    }
    </pre></code>

----

#### Delete a cart
**DELETE**
`http://localhost:8080/api/carrito/:id`


----

#### Get products in cart
**GET**
`http://localhost:8080/api/carrito/:id`

----

#### Add products in an existing cart
**POST**
`http://localhost:8080/api/carrito/:id`
example body:
  <pre><code>
    {
        "products": [
            1, 2, 3
        ]
    }
    </pre></code>
    
   ----

#### Delete products in cart
**DELETE**
`http://localhost:8080/api/carrito/:id_cart/:id_prod`
