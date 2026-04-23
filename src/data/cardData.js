import imageNotFound from "../assets/image-not-found.svg";

const pokemonNames = [
  "pikachu",
  "charmander",
  "eevee",
  "mewtwo",
  "greninja",
  "lucario",
  "mew",
  "umbreon",
  "blastoise",
  "rayquaza",
  "psyduck",
  "meowth",
];

export async function getCardData() {
  const requests = pokemonNames.map((name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.sprites.front_default;
        return {
          name: name.toUpperCase(),
          imageUrl: imageUrl,
          key: crypto.randomUUID(),
        };
      })
      .catch(() => {
        return {
          name: name.toUpperCase(),
          imageUrl: imageNotFound,
          key: crypto.randomUUID(),
        };
      });
  });

  const cardData = await Promise.all(requests);
  return cardData;
}
