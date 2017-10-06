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

describe('WorkspaceCumulativeStatistics', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .cumulativeStatistics().fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        workspaceSid: 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://taskrouter.twilio.com/v1/Workspaces/<%= workspaceSid %>/CumulativeStatistics')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'reservations_accepted': 100,
          'tasks_completed': 100,
          'start_time': '2015-07-30T20:00:00Z',
          'reservations_rescinded': 100,
          'tasks_timed_out_in_workflow': 100,
          'end_time': '2015-07-30T20:00:00Z',
          'avg_task_acceptance_time': 100,
          'tasks_canceled': 100,
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CumulativeStatistics',
          'tasks_moved': 100,
          'tasks_deleted': 100,
          'tasks_created': 100,
          'reservations_canceled': 100,
          'reservations_timed_out': 100,
          'wait_duration_until_canceled': {
              'avg': 0,
              'min': 0,
              'max': 0,
              'total': 0
          },
          'wait_duration_until_accepted': {
              'avg': 0,
              'min': 0,
              'max': 0,
              'total': 0
          },
          'split_by_wait_time': {
              '5': {
                  'above': {
                      'tasks_canceled': 0,
                      'reservations_accepted': 0
                  },
                  'below': {
                      'tasks_canceled': 0,
                      'reservations_accepted': 0
                  }
              },
              '10': {
                  'above': {
                      'tasks_canceled': 0,
                      'reservations_accepted': 0
                  },
                  'below': {
                      'tasks_canceled': 0,
                      'reservations_accepted': 0
                  }
              }
          },
          'reservations_created': 100,
          'reservations_rejected': 100,
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                        .cumulativeStatistics().fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

