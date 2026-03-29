const Tesseract = require("tesseract.js");

exports.scan = async (image) => {
  const { data } = await Tesseract.recognize(image, "eng");
  return data.text;
};
