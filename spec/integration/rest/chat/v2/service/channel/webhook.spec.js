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

describe('Webhook', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 5,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'next_page_url': null,
              'key': 'webhooks'
          },
          'webhooks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'webhook',
                  'configuration': {
                      'url': 'dummy',
                      'method': 'GET',
                      'filters': [
                          'onMessageSent',
                          'onChannelDestroyed'
                      ],
                      'retry_count': 2
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'trigger',
                  'configuration': {
                      'url': 'dummy',
                      'method': 'POST',
                      'filters': [
                          'keyword1',
                          'keyword2'
                      ],
                      'retry_count': 3
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'studio',
                  'configuration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .webhooks.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 5,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'next_page_url': null,
              'key': 'webhooks'
          },
          'webhooks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'webhook',
                  'configuration': {
                      'url': 'dummy',
                      'method': 'GET',
                      'filters': [
                          'onMessageSent',
                          'onChannelDestroyed'
                      ],
                      'retry_count': 2
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'trigger',
                  'configuration': {
                      'url': 'dummy',
                      'method': 'POST',
                      'filters': [
                          'keyword1',
                          'keyword2'
                      ],
                      'retry_count': 3
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'studio',
                  'configuration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .webhooks.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://chat.twilio.com/v2/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Webhooks',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 5,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'next_page_url': null,
              'key': 'webhooks'
          },
          'webhooks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'webhook',
                  'configuration': {
                      'url': 'dummy',
                      'method': 'GET',
                      'filters': [
                          'onMessageSent',
                          'onChannelDestroyed'
                      ],
                      'retry_count': 2
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'trigger',
                  'configuration': {
                      'url': 'dummy',
                      'method': 'POST',
                      'filters': [
                          'keyword1',
                          'keyword2'
                      ],
                      'retry_count': 3
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'studio',
                  'configuration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                    .webhooks.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        channelSid: 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://chat.twilio.com/v2/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Webhooks')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 5,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'previous_page_url': null,
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'next_page_url': null,
              'key': 'webhooks'
          },
          'webhooks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'webhook',
                  'configuration': {
                      'url': 'dummy',
                      'method': 'GET',
                      'filters': [
                          'onMessageSent',
                          'onChannelDestroyed'
                      ],
                      'retry_count': 2
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'trigger',
                  'configuration': {
                      'url': 'dummy',
                      'method': 'POST',
                      'filters': [
                          'keyword1',
                          'keyword2'
                      ],
                      'retry_count': 3
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'studio',
                  'configuration': {
                      'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks.list();
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
          'meta': {
              'page': 0,
              'page_size': 5,
              'first_page_url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks?PageSize=5&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'webhooks'
          },
          'webhooks': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        channelSid: 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://chat.twilio.com/v2/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Webhooks/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'type': 'studio',
          'configuration': {
              'flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:50Z',
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var opts = {type: 'webhook'};
      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        channelSid: 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://chat.twilio.com/v2/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Webhooks')(solution);

      var values = {Type: 'webhook', };
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
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'type': 'webhook',
          'configuration': {
              'url': 'dummy',
              'method': 'GET',
              'filters': [
                  'onMessageSent',
                  'onChannelDestroyed'
              ],
              'retry_count': 2
          },
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:50Z',
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {type: 'webhook'};
      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks.create(opts);
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

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        channelSid: 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://chat.twilio.com/v2/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Webhooks/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'type': 'trigger',
          'configuration': {
              'url': 'dummy',
              'method': 'POST',
              'filters': [
                  'keyword1',
                  'keyword2'
              ],
              'retry_count': 3
          },
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:51Z',
          'url': 'https://chat.twilio.com/v2/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Webhooks/WHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        channelSid: 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://chat.twilio.com/v2/Services/<%= serviceSid %>/Channels/<%= channelSid %>/Webhooks/<%= sid %>')(solution);

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

      var promise = client.chat.v2.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .channels('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                  .webhooks('WHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

