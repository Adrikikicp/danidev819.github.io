import mustache from 'https://github.com/janl/mustache.js/blob/master/mustache.js';
import Handlebars from 'https://cdn.jsdelivr.net/handlebars/';

var templates = {
  
  "developer": "templates/developer.hbs",
  //Aquí van mas proximamente
  
}
//Mustache será proximamente
var compiledTemplate1 = Handlebars.compile(templates.developer);
