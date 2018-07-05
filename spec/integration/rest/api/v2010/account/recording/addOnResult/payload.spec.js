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
var Holodeck = require('../../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Payload', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payloads('XHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        referenceSid: 'REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        addOnResultSid: 'XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'XHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Recordings/<%= referenceSid %>/AddOnResults/<%= addOnResultSid %>/Payloads/<%= sid %>.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'sid': 'XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'reference_sid': 'REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'add_on_configuration_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'add_on_result_sid': 'XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'label': 'XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'content_type': 'application/json',
          'date_created': 'Wed, 01 Sep 2010 15:15:41 +0000',
          'date_updated': 'Wed, 01 Sep 2010 15:15:41 +0000',
          'subresource_uris': {
              'data': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads/XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Data.json'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payloads('XHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'payloads': [
              {
                  'sid': 'XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'reference_sid': 'REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_configuration_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_result_sid': 'XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'label': 'XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'content_type': 'application/json',
                  'date_created': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_updated': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'subresource_uris': {
                      'data': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads/XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Data.json'
                  }
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json?PageSize=50&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .payloads.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'payloads': [
              {
                  'sid': 'XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'reference_sid': 'REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_configuration_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_result_sid': 'XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'label': 'XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'content_type': 'application/json',
                  'date_created': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_updated': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'subresource_uris': {
                      'data': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads/XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Data.json'
                  }
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json?PageSize=50&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .payloads.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Recordings/<%= referenceSid %>/AddOnResults/<%= addOnResultSid %>/Payloads.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'payloads': [
              {
                  'sid': 'XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'reference_sid': 'REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_configuration_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_result_sid': 'XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'label': 'XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'content_type': 'application/json',
                  'date_created': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_updated': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'subresource_uris': {
                      'data': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads/XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Data.json'
                  }
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json?PageSize=50&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .payloads.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payloads.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        referenceSid: 'REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        addOnResultSid: 'XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Recordings/<%= referenceSid %>/AddOnResults/<%= addOnResultSid %>/Payloads.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'payloads': [
              {
                  'sid': 'XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'reference_sid': 'REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_configuration_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_result_sid': 'XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'label': 'XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'content_type': 'application/json',
                  'date_created': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_updated': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'subresource_uris': {
                      'data': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads/XHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Data.json'
                  }
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json?PageSize=50&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payloads.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'payloads': [],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json?PageSize=50&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payloads.list();
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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payloads('XHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        referenceSid: 'REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        addOnResultSid: 'XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'XHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/Recordings/<%= referenceSid %>/AddOnResults/<%= addOnResultSid %>/Payloads/<%= sid %>.json')(solution);

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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .payloads('XHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

