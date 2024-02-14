import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    // Perform server-side authentication
    await serverAuth(req, res); // Call serverAuth with both req and res

    // Fetch the total count of movies in the database
    const moviesCount = await prismadb.movie.count();

    if (moviesCount === 0) {
      // Return a 404 response if no movies are found
      return res.status(404).json({ message: "No movies found." });
    }

    // Generate a random index to fetch a random movie
    const randomIndex = Math.floor(Math.random() * moviesCount);

    // Fetch a random movie from the database
    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex
    });

    // Return the random movie as a JSON response
    return res.status(200).json(randomMovies[0]);
  } catch (error) {
    // Log any errors to the console
    console.error("Error:", error);

    // Return a 500 response for any unexpected errors
    return res.status(500).end();
  }
}
