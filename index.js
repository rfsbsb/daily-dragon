const nodeHtmlToImage = require('node-html-to-image')
const Handlebars = require('handlebars');

const template = require('./src/template');
const getData = require('./src/get_data');
let month_arg = null;
let day_arg = null;

// Day, if exists
if (process.argv[2]) {
  day_arg = process.argv[2]
}

// Month, if exists
if (process.argv[3]) {
  month_arg = process.argv[3]
}

const {body, image, background_image, name, day, month} = getData(day_arg, month_arg);
const output = `./generated/dragon_${month}_${day}_${name}.png`;

nodeHtmlToImage({
  output,
  html: template(),
  content: { html_body: new Handlebars.SafeString(body), image, background_image, name }
})
  .then(() => console.log('The image was created successfully!'))
