const template = () => {
  return '<html lang="en">\n' +
    '<head>\n' +
    '  <link rel="preconnect" href="https://fonts.gstatic.com">\n' +
    '  <link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap" rel="stylesheet">\n' +
    '  <style>\n' +
    '    body {\n' +
    '      border: 0;\n' +
    '      padding: 0;\n' +
    '      margin: 0;\n' +
    '      font-family: "Courier New", sans-serif;\n' +
    '      font-size: 28px;\n' +
    '    }\n' +
    '    .newspaper-bg {\n' +
    '      height: 100%;\n' +
    '      background-size: cover;\n' +
    '      opacity: 50%;\n' +
    '      position: absolute;\n' +
    '      width: 100%;\n' +
    '      z-index: -1;\n' +
    '    }\n' +
    '    .title {\n' +
    '      padding-top: 50px;\n' +
    '      font-family: \'UnifrakturMaguntia\', cursive;\n' +
    '      font-size: 76px;\n' +
    '      text-align: center;\n' +
    '    }\n' +
    '    .name {\n' +
    '      padding-top: 20px;\n' +
    '      font-family: \'UnifrakturMaguntia\', cursive;\n' +
    '      font-size: 36px;\n' +
    '      text-align: center;\n' +
    '    }\n' +
    '    .descriptive-image {\n' +
    '      text-align: center;\n' +
    '    }\n' +
    '    .descriptive-image img {\n' +
    '      max-width: 350px;\n' +
    '      max-height: 350px;\n' +
    '    }\n' +
    '    .body {\n' +
    '      padding: 50px;\n' +
    '    }\n' +
    '  </style>\n' +
    '  <title>The Daily Dragon</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '<div class="newspaper-bg" style="background-image: url({{background_image}})">\n' +
    '</div>\n' +
    '<div class="title">The Daily Dragon</div>\n' +
    '<div class="name">{{name}}</div>\n' +
    '<div class="descriptive-image">\n' +
    '  <img src="{{image}}" alt=""/>\n' +
    '</div>\n' +
    '<div class="body">\n' +
    ' {{html_body}} ' +
    '</div>\n' +
    '</body>\n' +
    '</html>\n';
}
module.exports = template;
