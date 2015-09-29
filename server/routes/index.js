var express = require('express');
var router = express.Router();
var Company = require('../models/companies.js');

//get all Companies
router.get('/companies', function(req, res, next){
  Company.findQ()
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    }).done();
});
//post all Companies
router.post('/companies', function(req, res, next){
  newCompany = new Company({
    companyName: req.body.companyName,
    companyUrl: req.body.companyUrl,
    industry: req.body.industry,
    location: req.body.location,
    positionTitle: req.body.positionTitle,
    positionUrl: req.body.positionUrl,
    salary: req.body.salary,
    requirements: req.body.requirements,
    contactName: req.body.contactName,
    contactTitle: req.body.contactTitle,
    contactEmail: req.body.contactEmail,
    contactPhone: req.body.contactPhone,
    status: req.body.status,
    applied: req.body.applied,
    recentContact: req.body.recentContact,
    notes: req.body.notes
  }).saveQ()
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    }).done();
});

//get single Company
router.get('/company/:id', function(req, res, next){
  Company.findByIdQ(req.params.id)
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    }).done();
});

//put single Company
router.put('/company/:id', function(req, res, next){
  var update = {
  companyName: req.body.companyName,
  companyUrl: req.body.companyUrl,
  industry: req.body.industry,
  location: req.body.location,
  positionTitle: req.body.positionTitle,
  positionUrl: req.body.positionUrl,
  salary: req.body.salary,
  requirements: req.body.requirements,
  contactName: req.body.contactName,
  contactPosition: req.body.contactPosition,
  contactEmail: req.body.contactEmail,
  contactPhone: req.body.contactPhone,
  status: req.body.status,
  applied: req.body.applied,
  recentContact: req.body.recentContact,
  notes: req.body.notes
  };
  Company.findByIdAndUpdateQ(req.params.id, update, {new:true})
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    }).done();
});

//delete single Company
router.delete('/company/:id', function(req, res, next){
  Company.findByIdAndRemoveQ(req.params.id)
    .then(function(results){
      res.json(results);
    }).catch(function(results){
      res.json({'message': results});
    }).done();
});

module.exports = router;
