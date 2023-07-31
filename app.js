import express from 'express';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import hbs from 'hbs';
import 'dotenv/config';



const app = express();
const port = process.env.PORT;
// Obtener __filename
const __filename = fileURLToPath(import.meta.url);
// Obtener __dirname
const __dirname = dirname(__filename);

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

//Home
app.get('/', (req, res) => {
  res.render('home',{
    nombre:'Juan Pablo',
    titulo:'curse de node'
  });
});

//Generic
app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre:'Juan Pablo',
    titulo:'curse de node'
  });
});

//elements
app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre:'Juan Pablo',
    titulo:'curse de node'
  });
});

// Redireccionar también a páginas html, señalando el path (Señalar que es sendFile) y usar el join para crear rutta definitiva.
// app.get('/generic', (req, res) => {
//   console.log('ruta alcanzada');
//   const filePath = join(__dirname, 'public','generic.html');
//   res.sendFile(filePath);
// });
// app.get('/elements', (req, res) => {
//   const filePath = join(__dirname, 'public','elements.html');
//   res.sendFile(filePath);
// });

//Redireccionar por defeccto a una pagina con el "*"
app.get('*', (req, res) => {
  const filePath = join(__dirname, 'public', '404ERROR.html');
  res.sendFile(filePath);
});

//Puerto de funcionamiento()
app.listen(port, () => {
  console.log(`Example app listening at htpps://localhost:${port}`);
});





