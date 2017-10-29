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
  exec(cmd, (error, stdout, stderr) => {
    const diseases = stdout.split("\n");

    res.render('result', {
      title: 'Result',
      filehash: req.params.fileHash,
      diseases: diseases
    });
  });
}