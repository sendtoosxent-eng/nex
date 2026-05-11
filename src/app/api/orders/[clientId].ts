// pages/api/orders/[clientId].ts
import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { clientId } = req.query;

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "nexcell_gadgets"
  });

  const [rows] = await connection.execute(
    "SELECT * FROM orders WHERE client_id = ? ORDER BY order_date DESC LIMIT 5",
    [clientId]
  );

  res.status(200).json(rows);
}
