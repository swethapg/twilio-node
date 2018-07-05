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
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Sample', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        assistantSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        intentSid: 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/Intents/<%= intentSid %>/Samples/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'language': 'language',
          'tagged_text': 'tagged_text',
          'date_updated': '2015-07-30T20:00:00Z',
          'source_channel': null
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'samples': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'language': 'language',
                  'tagged_text': 'tagged_text',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'source_channel': 'sms'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?PageSize=50&Page=0',
              'previous_page_url': null,
              'key': 'samples',
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?PageSize=50&Page=0',
              'page': 0,
              'page_size': 50
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .samples.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'samples': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'language': 'language',
                  'tagged_text': 'tagged_text',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'source_channel': 'sms'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?PageSize=50&Page=0',
              'previous_page_url': null,
              'key': 'samples',
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?PageSize=50&Page=0',
              'page': 0,
              'page_size': 50
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .samples.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/Intents/<%= intentSid %>/Samples',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'samples': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'language': 'language',
                  'tagged_text': 'tagged_text',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'source_channel': 'sms'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?PageSize=50&Page=0',
              'previous_page_url': null,
              'key': 'samples',
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?PageSize=50&Page=0',
              'page': 0,
              'page_size': 50
          }
      });
      holodeck.mock(new Response(200, body));
      client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                               .samples.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        assistantSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        intentSid: 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/Intents/<%= intentSid %>/Samples')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'samples': [],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?PageSize=50&Page=0',
              'previous_page_url': null,
              'key': 'samples',
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?PageSize=50&Page=0',
              'page': 0,
              'page_size': 50
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples.list();
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
          'samples': [
              {
                  'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:00:00Z',
                  'language': 'language',
                  'tagged_text': 'tagged_text',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'source_channel': 'sms'
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?PageSize=50&Page=0',
              'previous_page_url': null,
              'key': 'samples',
              'next_page_url': null,
              'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples?PageSize=50&Page=0',
              'page': 0,
              'page_size': 50
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {language: 'language', taggedText: 'taggedText'};
      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        assistantSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        intentSid: 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/Intents/<%= intentSid %>/Samples')(solution);

      var values = {Language: 'language', TaggedText: 'taggedText', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'language': 'language',
          'tagged_text': 'tagged_text',
          'date_updated': '2015-07-30T20:00:00Z',
          'source_channel': 'alexa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {language: 'language', taggedText: 'taggedText'};
      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples.create(opts);
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

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        assistantSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        intentSid: 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/Intents/<%= intentSid %>/Samples/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'url': 'https://preview.twilio.com/understand/Assistants/UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Intents/UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Samples/UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'intent_sid': 'UDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'UFaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'assistant_sid': 'UAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'language': 'language',
          'tagged_text': 'tagged_text',
          'date_updated': '2015-07-30T20:00:00Z',
          'source_channel': 'alexa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        assistantSid: 'UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        intentSid: 'UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://preview.twilio.com/understand/Assistants/<%= assistantSid %>/Intents/<%= intentSid %>/Samples/<%= sid %>')(solution);

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

      var promise = client.preview.understand.assistants('UAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .intents('UDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                             .samples('UFXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

