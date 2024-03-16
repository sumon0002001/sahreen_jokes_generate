"use client";

import React, { useEffect, useState } from "react";
import { saveJoke } from "../data/joke/actions";

const JokeFetcher = ({ user }) => {
  const [joke, setJoke] = useState("");

  const fetchJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    setJoke(data.joke);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const saveJokeText = user ? "Save Jokes" : "login to save jokes";

  return (
    <div>
      <p className="text-lg md:text-xl lg:text-2xl p-5">
        {joke || "Loading jokes....."}
      </p>
      <div className="flex justify-center gap-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={fetchJokes}
        >
          Regenerate
        </button>

        <button
          disabled={!user}
          onClick={async () => {
            if (!user) return;
            await saveJoke(joke);
            alert("Joke saved");
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded"
        >
          {saveJokeText}
        </button>
      </div>
    </div>
  );
};

export default JokeFetcher;
