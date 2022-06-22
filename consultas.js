const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "postgres123",
  database: "skatepark",
  port: 5432,
});


const insertarSkater = async (skater) => {
    const { email, nombre, password, anos_experiencia, especialidad, foto } = skater;

    try {
        const config = {
            text: "INSERT INTO skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) values ($1, $2, $3, $4, $5, $6, 'f') RETURNING *",
            values: [email, nombre, password, anos_experiencia, especialidad, foto]
        };
        const resp = await pool.query(config);
        return resp;    
    } catch (error) {
        return error;
    }
};
