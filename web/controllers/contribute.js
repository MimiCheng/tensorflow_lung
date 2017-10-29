const sys = require('sys')
const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');

exports.index = (req, res) => {
  fs.readdir('public/sample_image/', (err, files) => {
    const match_label = ['Atelectasis','Cardiomegaly','Consolidation','Edema','Effusion','Emphysema','Fibrosis','Hernia','Infiltration','Mass','Normal','Nodule','Pleural Thickening','Pneumonia','Pneumothorax'];

    res.render('contribute', {
      title: 'Contribution',
      images: files,
      diseases: match_label
    });
  })
};

exports.postDiagnose = (req, res) => {
  req.flash('success', { msg: 'Thank you for helping us' });
  res.redirect('/contribute');
}
