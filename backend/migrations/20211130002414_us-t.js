
exports.up = function(knex) {
    knex.schema.createTableIfNotExists("messages", (table) => {
        table.increments("id").primary();
        table.string("email");
        table.string("message");
        table.string("date");
    }).then((res) => {
        // TODO: see how to handle this promise with async / await
        console.log("Tabla Creada!")
    }).catch((err) => {
        console.log("Error al crear la tabla", err)
    }) 
};

exports.down = function(knex) {
  
};
