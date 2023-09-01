import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default async function handler(req: any, res: any) {
  try {
    const dbPath = path.join(process.cwd(), "db", "database.db");
    if (req.method === "GET") {
      const db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
      });

      // Parse query parameters to determine the range of posts to retrieve
      const id: any = parseInt(req.query.id) || 1; // Get page number from query parameter

      // Ensure that start and end values are within valid ranges
      const postId = Math.max(0, id);

      // Retrieve the specified range of posts from the SQLite database
      const post = await db.all(`SELECT * FROM posts where id=?`, [postId]);
      return res.status(200).json({ post : post});
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
