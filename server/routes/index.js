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
    name: req.body.name,
    url: req.body.url,
    location: req.body.location,
    industry: req.body.industry,
    position: req.body.position,
    contact: req.body.contact,
    status: req.body.status,
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
  name: req.body.name,
  url: req.body.url,
  location: req.body.location,
  industry: req.body.industry,
  position: req.body.position,
  contact: req.body.contact,
  status: req.body.status,
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
