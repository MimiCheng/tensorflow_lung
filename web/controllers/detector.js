const sys = require('sys')
const exec = require('child_process').exec;
const path = require('path');

exports.index = (req, res) => {
  res.render('detector', {
    title: 'Detector'
  });
};

exports.postImage = (req, res, next) => {
  // req.flash('success', { msg: 'File was uploaded successfully.' });
  res.redirect('/detector/' + req.file.filename);
}

exports.getDetectDisease = (req, res) => {
  const scriptPath = path.join(__dirname, '/../../', '/scripts/label_image.py');
  console.log(scriptPath);
  const tfPath = path.join(__dirname, '/../../', '/tf_files/retrained_graph.pb');
  console.log(tfPath);
  const tfLabelsPath = path.join(__dirname, '/../../', '/tf_files/retrained_labels.txt');
  console.log(tfLabelsPath);
  const imagePath = path.join(__dirname, '/../', '/public/uploads/', req.params.fileHash);
  console.log(imagePath);
  const cmd = 'python ' + scriptPath + ' --graph=' + tfPath + ' --labels=' + tfLabelsPath + ' --image=' + imagePath;
  console.log(cmd);
  exec(cmd, (error, stdout, stderr) => {
    console.log(stdout);
    const diseases = stdout.split("\n");

    res.render('result', {
      title: 'Result',
      filehash: req.params.fileHash,
      diseases: diseases
    });
  });
}