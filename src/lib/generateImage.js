const gm = require('gm');
const generateFontSize = require('./generateFontSize');

const imageMagick = gm.subClass({ imageMagick: true });

function generateImage(imageSize, backgroundColor, color, font, text, format) {
  return imageMagick(imageSize, imageSize, backgroundColor)
    .fill(color)
    .font(font, generateFontSize(imageSize))
    .drawText(2, -3, text, 'Center')
    .setFormat(format);
}

module.exports = generateImage;
