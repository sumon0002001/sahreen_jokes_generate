"use client";

import React, { useEffect, useState } from "react";

const JokeFetcher = () => {
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

  return (
    <div>
      <p className="text-lg md:text-xl lg:text-2xl p-5">
        {joke || "Loading jokes....."}
      </p>
      <div>
        <button onClick={fetchJokes}>Regenerate</button>
      </div>
    </div>
  );
};

export default JokeFetcher;
