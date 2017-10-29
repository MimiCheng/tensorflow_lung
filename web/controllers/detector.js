const sys = require('sys')
const exec = require('child_process').exec;
const path = require('path');

exports.index = (req, res) => {
  res.render('detector', {
    title: 'Detector'
  });
};

exports.postImage = (req, res, next) => {
  res.redirect('/detector/' + req.file.filename);
}

exports.getDetectDisease = (req, res) => {
  const scriptPath = path.join(__dirname, '/../../', '/scripts/label_image.py');
  const tfPath = path.join(__dirname, '/../../', '/tf_files/retrained_graph.pb');
  const tfLabelsPath = path.join(__dirname, '/../../', '/tf_files/retrained_labels.txt');
  const imagePath = path.join(__dirname, '/../', '/public/uploads/', req.params.fileHash);
  const cmd = 'python ' + scriptPath + ' --graph=' + tfPath + ' --labels=' + tfLabelsPath + ' --image=' + imagePath;

  exec(cmd, (error, stdout, stderr) => {
    const diseases = stdout.split("\n");

    res.render('result', {
      title: 'Result',
      filehash: req.params.fileHash,
      diseases: diseases
    });
  });
}