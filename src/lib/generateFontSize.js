function generateFontSize(imageSize) {
  const scale = imageSize / 100;
  return Math.round(scale * 50);
}

module.exports = generateFontSize;
