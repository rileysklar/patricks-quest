// pages/api/character.js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://swapi.dev/api/people/1/");
    const character = await response.json();

    res.status(200).json(character);
  } catch (error) {
    console.error("Error fetching character data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
