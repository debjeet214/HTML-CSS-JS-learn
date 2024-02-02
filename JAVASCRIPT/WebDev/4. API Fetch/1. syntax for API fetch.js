async function fetchMoviesJSON() {
  const response = await fetch('/URLs');
  const output = await response.json();  // returns in json string format
  return output;
}

fetchMoviesJSON().then(output => {
  output; // fetched outputs
});
