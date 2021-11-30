import Knex from 'knex'

const knex = Knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'ecommerce',
    },

    pool: {
        min: 2,
        max: 8,
    }
})

/* knex.schema.createTableIfNotExists("messages", (table) => {
    table.increments("id").primary();
    table.string("email");
    table.string("message");
    table.string("date");
}).then((res) => {
    // TODO: see how to handle this promise with async / await
    console.log("Tabla Creada!")
}).catch((err) => {
    console.log("Error al crear la tabla", err)
}) */

knex.schema.createTableIfNotExists("products", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("description");
    table.string("code");
    table.string("price");
    table.string("thumbnail");
    table.string("timestamp");
    table.string("stock");
    table.string("color");
}).then((res) => {
    console.log("Tabla Creada!")
}).catch((err) => {
    console.log("Error al crear la tabla", err)
})

export default knex;