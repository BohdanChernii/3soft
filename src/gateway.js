const fetchCreate = (imageData) => {
  fetch('https://614b503de4cc2900179eb033.mockapi.io/images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(imageData),
  }).then((response) => response.json());
};
export default fetchCreate;
