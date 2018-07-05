'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Device', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices('THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        fleetSid: 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/DeployedDevices/Fleets/<%= fleetSid %>/Devices/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'friendly_name': 'friendly_name',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enabled': true,
          'deployment_sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'bob@twilio.com',
          'date_created': '2016-07-30T20:00:00Z',
          'date_updated': '2016-07-30T20:00:00Z',
          'date_authenticated': null,
          'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices/THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices('THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices('THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        fleetSid: 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/DeployedDevices/Fleets/<%= fleetSid %>/Devices/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices('THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {fleetSid: 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/DeployedDevices/Fleets/<%= fleetSid %>/Devices')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'sid': 'THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'friendly_name': 'friendly_name',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enabled': true,
          'deployment_sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'bob@twilio.com',
          'date_created': '2016-07-30T20:00:00Z',
          'date_updated': '2016-07-30T20:00:00Z',
          'date_authenticated': null,
          'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices/THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'devices': [
              {
                  'sid': 'THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'friendly_name': 'friendly_name',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'enabled': true,
                  'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'deployment_sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'bob@twilio.com',
                  'date_created': '2016-07-30T20:00:00Z',
                  'date_updated': '2016-07-30T20:00:00Z',
                  'date_authenticated': null,
                  'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices/THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices?PageSize=50&Page=0',
              'key': 'devices',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .devices.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'devices': [
              {
                  'sid': 'THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'friendly_name': 'friendly_name',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'enabled': true,
                  'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'deployment_sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'bob@twilio.com',
                  'date_created': '2016-07-30T20:00:00Z',
                  'date_updated': '2016-07-30T20:00:00Z',
                  'date_authenticated': null,
                  'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices/THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices?PageSize=50&Page=0',
              'key': 'devices',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .devices.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://preview.twilio.com/DeployedDevices/Fleets/<%= fleetSid %>/Devices',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'devices': [
              {
                  'sid': 'THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'friendly_name': 'friendly_name',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'enabled': true,
                  'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'deployment_sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'bob@twilio.com',
                  'date_created': '2016-07-30T20:00:00Z',
                  'date_updated': '2016-07-30T20:00:00Z',
                  'date_authenticated': null,
                  'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices/THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices?PageSize=50&Page=0',
              'key': 'devices',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices?PageSize=50&Page=0'
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                     .devices.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {fleetSid: 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://preview.twilio.com/DeployedDevices/Fleets/<%= fleetSid %>/Devices')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'devices': [],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices?PageSize=50&Page=0',
              'key': 'devices',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'devices': [
              {
                  'sid': 'THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'friendly_name': 'friendly_name',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'enabled': true,
                  'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'deployment_sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'identity': 'bob@twilio.com',
                  'date_created': '2016-07-30T20:00:00Z',
                  'date_updated': '2016-07-30T20:00:00Z',
                  'date_authenticated': null,
                  'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices/THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices?PageSize=50&Page=0',
              'key': 'devices',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices('THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        fleetSid: 'FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/DeployedDevices/Fleets/<%= fleetSid %>/Devices/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'sid': 'THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'friendly_name': 'friendly_name',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'fleet_sid': 'FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enabled': true,
          'deployment_sid': 'DLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'bob@twilio.com',
          'date_created': '2016-07-30T20:00:00Z',
          'date_updated': '2016-07-30T20:00:00Z',
          'date_authenticated': null,
          'url': 'https://preview.twilio.com/DeployedDevices/Fleets/FLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Devices/THaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.deployed_devices.fleets('FLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                                   .devices('THXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

