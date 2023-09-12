const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// ARROW FUNCTION
fetch(url)
	.then(response => response.json()
  .then(jsonBody => console.log("jsonBody =>", jsonBody)))
	.catch(error => console.error(error))
	.finally(() => console.log("Requisição finalizada"));
