const fs = require('fs');

const getData = (day, month) => {
  const date = new Date();
  month = month ?? date.toLocaleDateString('default', {month: 'numeric'});
  day = day ?? date.toLocaleDateString('default', {day: 'numeric'})
  const image = fs.readFileSync(`./data/${month}/${day}/image.png`);
  const base64Image = new Buffer.from(image).toString('base64');
  const dataURI = 'data:image/jpeg;base64,' + base64Image;

  const html_buffer = fs.readFileSync(`./data/${month}/${day}/body.html`);
  const html_body = new Buffer.from(html_buffer).toString('utf8');
  const bg_image = fs.readFileSync(`./data/bg_image.png`);
  const base64BG = new Buffer.from(bg_image).toString('base64');
  const dataURIBG = 'data:image/jpeg;base64,' + base64BG

  const name_buffer = fs.readFileSync(`./data/${month}/${day}/name.txt`);
  const dragon_name = new Buffer.from(name_buffer).toString('utf8');

  return {
    name: dragon_name.replace(/^\s+|\s+$/g, ''),
    image: dataURI,
    body: html_body,
    background_image: dataURIBG,
    day,
    month
  }
}

module.exports = getData;
