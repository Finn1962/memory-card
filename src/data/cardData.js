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
  "mimikyu-disguised",
  "rayquaza",
  "psyduck",
  "meowth",
];

export async function cardData() {
  const requests = pokemonNames.map((name) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.sprites.front_default;
        return { name: name, imageUrl: imageUrl };
      })
      .catch(() => {
        return { name: name, imageUrl: imageNotFound };
      });
  });

  const cardData = await Promise.all(requests);
  return cardData;
}

console.log(await cardData());
