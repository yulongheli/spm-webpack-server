'use strict';
var join = require('path').join;
var request = require('supertest');
var Server = require('..');
var sw = require('spm-webpack');
var fixtures = join(__dirname, 'fixtures');
var log = require('spm-log');
var spmArgv = require('spm-argv');
var extend = require('extend');

describe('server-with-pkg-name', function() {

  var app = null;
  var args = null;

  before(function (done) {
    args = {
      cwd : join(fixtures, 'server-with-pkg-name'),
      verbose : true
    };
    process.chdir(args.cwd);
    sw.build.getWebpackOpts(args, function (err, webpackOpts) {

      webpackOpts.output.filename = webpackOpts.output.filename.replace('-[hash]','');
      webpackOpts.output.chunkFilename = webpackOpts.output.chunkFilename.replace('-[hash]','');
      app = (new Server(sw.webpack(webpackOpts), args)).app;
      done();
    });
  });

  it('get /hello/a.js', function(done) {
      request(app.listen())
      .get('/hello/a.js')
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  });

  it('get /hello/a.css', function(done) {
      request(app.listen())
      .get('/hello/a.css')
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  });

});

describe('server-with-pkg-version', function() {

  var app = null;
  var args = null;

  before(function (done) {
    args = {
      cwd : join(fixtures, 'server-with-pkg-version'),
      verbose : true
    };
    process.chdir(args.cwd);
    sw.build.getWebpackOpts(args, function (err, webpackOpts) {

      webpackOpts.output.filename = webpackOpts.output.filename.replace('-[hash]','');
      webpackOpts.output.chunkFilename = webpackOpts.output.chunkFilename.replace('-[hash]','');
      app = (new Server(sw.webpack(webpackOpts), args)).app;
      done();
    });
  });

  it('get /0.0.1/a.js', function(done) {
      request(app.listen())
      .get('/0.0.1/a.js')
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  });

  it('get /0.0.1/a.css', function(done) {
      request(app.listen())
      .get('/0.0.1/a.css')
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  });

});

describe('server-with-pkg-name-and-version', function() {

  var app = null;
  var args = null;

  before(function (done) {
    args = {
      cwd : join(fixtures, 'server-with-pkg-name-and-version'),
      verbose : true
    };
    process.chdir(args.cwd);
    sw.build.getWebpackOpts(args, function (err, webpackOpts) {

      webpackOpts.output.filename = webpackOpts.output.filename.replace('-[hash]','');
      webpackOpts.output.chunkFilename = webpackOpts.output.chunkFilename.replace('-[hash]','');
      app = (new Server(sw.webpack(webpackOpts), args)).app;
      done();
    });
  });

  it('get /hello/0.0.1/a.js', function(done) {
      request(app.listen())
      .get('/hello/0.0.1/a.js')
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  });

  it('get /hello/0.0.1/a.css', function(done) {
      request(app.listen())
      .get('/hello/0.0.1/a.css')
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  });

});

describe('server-with-pkg-hash-is-enabled', function() {

  var app = null;
  var args = null;

  before(function (done) {
    args = {
      cwd : join(fixtures, 'server-with-pkg-hash-is-enabled'),
      verbose : true
    };
    process.chdir(args.cwd);
    sw.build.getWebpackOpts(args, function (err, webpackOpts) {

      webpackOpts.output.filename = webpackOpts.output.filename.replace('-[hash]','');
      webpackOpts.output.chunkFilename = webpackOpts.output.chunkFilename.replace('-[hash]','');
      app = (new Server(sw.webpack(webpackOpts), args)).app;
      done();
    });
  });

  it('get /hello/0.0.1/a-1bf5f00786e2ac980fde.js', function(done) {
      request(app.listen())
      .get('/hello/0.0.1/a-1bf5f00786e2ac980fde.js')
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  });

  it('get /hello/0.0.1/a-1bf5f00786e2ac980fde.css', function(done) {
      request(app.listen())
      .get('/hello/0.0.1/a-1bf5f00786e2ac980fde.css')
      .end(function(err, res){
        if (err) return done(err);
        done()
      });
  });

});

