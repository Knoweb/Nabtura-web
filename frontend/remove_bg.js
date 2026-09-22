const Jimp = require('jimp');

async function removeWhiteBackground(inputPath, outputPath) {
  try {
    const image = await Jimp.read(inputPath);
    
    const tolerance = 40; // Threshold for "white"
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is close to white, make it transparent
      if (red > 255 - tolerance && green > 255 - tolerance && blue > 255 - tolerance) {
        this.bitmap.data[idx + 3] = 0; // alpha to 0
      }
    });

    await image.writeAsync(outputPath);
    console.log('Background removed successfully and saved to ' + outputPath);
  } catch (err) {
    console.error(err);
  }
}

const args = process.argv.slice(2);
removeWhiteBackground(args[0], args[1]);
