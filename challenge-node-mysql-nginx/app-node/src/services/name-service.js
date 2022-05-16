function generateName() {
  const firstNames = fetchNames(pickRandom(["male", "female"]));
  const lastNames = fetchNames("surnames");

  const firstName = pickRandom(firstNames);
  const lastName = pickRandom(lastNames);

  return `${firstName} ${lastName}`;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function fetchNames(nameType) {
  let names = [];

  switch (nameType) {
    case "female":
      names = ["Berthefried", "Tatiana", "Hildeburg"];
      break;
    case "male":
      names = ["Bilbo", "Frodo", "Theodulph"];
      break;
    case "surnames":
      names = ["Baggins", "Lightfoot", "Boulderhill"];
      break;
  }

  return names;
}

export { generateName };
