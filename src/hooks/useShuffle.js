export function useShuffle() {
  function shuffle(array) {
    const newArray = [...array];
    let currentIndex = newArray.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[currentIndex],
      ];
    }

    return newArray;
  }

  return { shuffle };
}
