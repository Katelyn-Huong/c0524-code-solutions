import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select "description" ,"title", "filmId"
    from "films"
    order by "replacementCost" desc
    limit 2 `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (!Number.isInteger(+filmId)) {
      throw new ClientError(400, 'filmId must be an integer');
    }
    const sql = `
    select *
    from "films"
    where "filmId" = $1`;
    const params = [filmId];
    const result = await db.query(sql, params);
    if (result.rows.length === 0) {
      throw new ClientError(400, `filmId ${filmId} not found`);
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
