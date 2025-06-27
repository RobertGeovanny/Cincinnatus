// Esto es un objeto de JavaScript
let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
} 

console.log(infoCurso);
console.log(typeof infoCurso);  

// Ahora lo transfomaremos a un formato JSON para poder enviarlo al servidor o guardarlo en un archivo
// Objeto -> JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// Objeto <- JSON
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoJSON);