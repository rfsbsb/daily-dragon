const nodeHtmlToImage = require('node-html-to-image')
const Handlebars = require('handlebars');

const template = require('./src/template');
const getData = require('./src/get_data');

const {body, image, background_image, name} = getData();
const output = `./dragon_${name}.png`;

nodeHtmlToImage({
  output,
  html: template(),
  content: { html_body: new Handlebars.SafeString(body), image, background_image, name }
})
  .then(() => console.log('The image was created successfully!'))
