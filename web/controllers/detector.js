const sys = require('sys')
const exec = require('child_process').exec;

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
  exec('pwd', (error, stdout, stderr) => {
    const diseases = ['a', 'b', 'c']// stdout.split("\n");

    res.render('result', {
      title: 'Result',
      diseases: diseases
    });
  });
}