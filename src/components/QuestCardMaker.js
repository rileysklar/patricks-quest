// import { useState, useEffect } from "react";

// export default function QuestCard({ character }) {
//   const [characters, setCharacters] = useState([character]);
//   const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

//   const fetchNewCharacter = async () => {
//     try {
//       const response = await fetch(
//         `https://swapi.dev/api/people/${currentCharacterIndex + 1}/`
//       );
//       const newCharacter = await response.json();

//       console.log("New Character Data:", newCharacter);

//       setCharacters([...characters, newCharacter]); // Update characters state
//       setCurrentCharacterIndex(currentCharacterIndex + 1); // Increment the character index
//     } catch (error) {
//       console.error("Error fetching character data:", error);
//     }
//   };

//   useEffect(() => {
//     console.log(characters);
//   }, [characters]);

//   return (
//     <div className="glass-morphism p-[2em] rounded-md">
//       <h3>Character Information</h3>
//       <p>Name: {characters[currentCharacterIndex].name}</p>
//       <p>Height: {characters[currentCharacterIndex].height}</p>
//       <p>Mass: {characters[currentCharacterIndex].mass}</p>

//       <button
//         onClick={fetchNewCharacter}
//         className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md"
//       >
//         Fetch New Character
//       </button>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { FaSpinner, FaArrowUp } from "react-icons/fa"; // Import the spinner icon from react-icons library

export default function QuestCardMaker({ character }) {
  const [characters, setCharacters] = useState([character]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const fetchNewCharacter = async () => {
    try {
      setLoading(true); // Set loading to true while fetching
      const response = await fetch(
        `https://swapi.dev/api/people/${characters.length + 1}/`
      );
      const newCharacter = await response.json();

      console.log("New Character Data:", newCharacter);

      setCharacters([...characters, newCharacter]); // Update characters state
    } catch (error) {
      console.error("Error fetching character data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching (success or error)
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the container when characters change
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [characters]);

  const scrollToTopOfContainer = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className=" flex flex-col gap-riley">
      <button
        onClick={fetchNewCharacter}
        className="mt-2 bg-green-300 text-gray-900 px-5 py-3 rounded-md"
        disabled={loading} // Disable the button while loading
      >
        {loading ? (
          <div className="flex gap-3 justify-center items-center">
            <FaSpinner className="animate-spin" />
            <span className="loader flex">Loading...</span>
          </div>
        ) : (
          "Fetch New Character"
        )}
      </button>

      <div className="flex flex-col gap-riley h-[150px] overflow-y-scroll">
        <div ref={containerRef} className="quest-trail flex flex-col gap-riley">
          {characters.map((char, index) => (
            <div key={index} className="glass-morphism-dark p-[2em] rounded-md">
              <h3></h3>
              <p>Name: {char.name}</p>
              <p>Height: {char.height}</p>
              <p>Mass: {char.mass}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollToTopOfContainer} // Use the new function here
        className="bg-green-300 flex items-center justify-center gap-2 text-gray-900 px-3 py-2 rounded-md z-10"
      >
        <span className="back-top-top">Back to Top</span>
        <FaArrowUp />
      </button>
    </div>
  );
}
