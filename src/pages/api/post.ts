import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const dbPath = path.join(process.cwd(), "db", "database.db");
    console.log(dbPath);
    if (req.method === "GET") {
      const db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
      });

      // Parse query parameters to determine the range of posts to retrieve
      const {offset } = req.query;

      // Convert query parameters to integers
      const start = parseInt(offset as string, 10) || 0;

      // Ensure that start and end values are within valid ranges
      const skip = Math.max(0, start);

      // Retrieve the specified range of posts from the SQLite database
      const selectedPosts = await db.all(
        `SELECT * FROM posts LIMIT 10 OFFSET ?`,[skip] 
      );

      return res.status(200).json(selectedPosts);
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
