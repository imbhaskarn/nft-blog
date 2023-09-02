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
      const page: any = parseInt(req.query.page) || 1; // Get page number from query parameter

      const offset = (page - 1) * 10;

      // Ensure that start and end values are within valid ranges
      const skip = Math.max(0, offset);

      // Retrieve the specified range of posts from the SQLite database
      const Posts = await db.all(`SELECT * FROM posts LIMIT 10 OFFSET ?`, [
        skip,
      ]);
      const allPosts: any = await db.all(`SELECT COUNT(*) FROM posts`);
      return res
        .status(200)
        .json({ posts: Posts, total: allPosts[0]["COUNT(*)"] });
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
