import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const movies = await prismadb.movie.findMany();
    
    // Log the movies to see if they are fetched successfully
    console.log("Fetched movies:", movies);

    return res.status(200).json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error); // Log the error
    return res.status(500).end();
  }
}