var assert = require('assert');
var db_connector = require('../dist/db_connector.js');
var DBConnector = new db_connector.DBConnector();

describe('DBConnector', function() {

  describe('db_connect_rw', function() {
    
    it('should return undefined when connexion succed', function() {
      
      assert.equal("azpefzoepfzp", dbConnector.init());
    
    });

  });

  describe('db_connect_r', function() {
    
    it('should return undefined when connexion succed', function() {
      
      assert.equal("azpefzoepfzp", dbConnector.init());
    
    });

  });

});