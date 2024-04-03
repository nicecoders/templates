import fs from 'fs';

export const uploadFile = (filePath: File['path'], sender) => {
  const fileSize = fs.statSync(filePath).size;
  let uploadedSize = 0;

  const readStream = fs.createReadStream(filePath);

  readStream.on('data', (chunk) => {
    uploadedSize += chunk.length;
    const progress = Math.round((uploadedSize / fileSize) * 100);
    sender.send('upload-progress', progress);
  });

  readStream.on('end', () => {
    sender.send('upload-success');
  });

  readStream.on('error', (err) => {
    sender.send('upload-error', err.message);
  });
}