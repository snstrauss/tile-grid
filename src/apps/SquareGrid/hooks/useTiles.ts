import { useMemo } from "react";

function getRandomInt(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

function makeTile(shape, i) {
  return { key: i, shape, multi: getRandomInt(0, 3) };
}

function shuffleArray(arr) {
  const newArr = [...arr]; // Create a copy of the array to avoid modifying the original
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Get a random index
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]]; // Swap elements
  }
  return newArr;
}

export default function useTiles(trianglePercentage, circlePercentage) {
  const tiles = useMemo(() => {
    const totalItems = 525;
    const triangleCount = Math.round((trianglePercentage / 100) * totalItems);
    const circleCount = Math.round((circlePercentage / 100) * totalItems);

    const items = [];
    for (let i = 0; i < totalItems; i++) {
      if (i < triangleCount) {
        items.push(makeTile("triangle", i));
      } else if (i < triangleCount + circleCount) {
        items.push(makeTile("circle", i));
      } else {
        items.push(makeTile("plain", i));
      }
    }

    return shuffleArray(items);
  }, [trianglePercentage, circlePercentage]);

  return tiles;
}