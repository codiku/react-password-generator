export const shuffle = (string) => {
  const array = [...string];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const getRandomChar = (text) => {
  return text[Math.floor(Math.random() * text.length)];
};