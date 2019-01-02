/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type FeedbackSummaryStatus = 'queued'|'in-progress'|'completed'|'failed';

/**
 * @description Initialize the FeedbackSummaryList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account responsible for creating this Call
 */
declare function FeedbackSummaryList(version: V2010, accountSid: string): FeedbackSummaryListInstance;

interface FeedbackSummaryListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FeedbackSummaryContext;
  /**
   * create a FeedbackSummaryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FeedbackSummaryListInstanceCreateOptions, callback?: (error: Error | null, item: FeedbackSummaryInstance) => any): Promise<FeedbackSummaryInstance>;
  /**
   * Constructs a feedback_summary
   *
   * @param sid - A string that uniquely identifies this feedback summary resource
   */
  get(sid: string): FeedbackSummaryContext;
}

/**
 * Options to pass to create
 *
 * @property endDate - Only include feedback given on or before this date
 * @property includeSubaccounts - `true` includes feedback from the specified account and its subaccounts
 * @property startDate - Only include feedback given on or after this date
 * @property statusCallback - The URL that we will request when the feedback summary is complete
 * @property statusCallbackMethod - The HTTP method we use to make requests to the StatusCallback URL
 */
interface FeedbackSummaryListInstanceCreateOptions {
  endDate: Date;
  includeSubaccounts?: boolean;
  startDate: Date;
  statusCallback?: string;
  statusCallbackMethod?: string;
}

interface FeedbackSummaryPayload extends FeedbackSummaryResource, Page.TwilioResponsePayload {
}

interface FeedbackSummaryResource {
  account_sid: string;
  call_count: number;
  call_feedback_count: number;
  date_created: Date;
  date_updated: Date;
  end_date: Date;
  include_subaccounts: boolean;
  issues: string;
  quality_score_average: number;
  quality_score_median: number;
  quality_score_standard_deviation: number;
  sid: string;
  start_date: Date;
  status: FeedbackSummaryStatus;
}

interface FeedbackSummarySolution {
  accountSid?: string;
}


declare class FeedbackSummaryContext {
  /**
   * Initialize the FeedbackSummaryContext
   *
   * @param version - Version of the resource
   * @param accountSid - The unique sid that identifies this account
   * @param sid - A string that uniquely identifies this feedback summary resource
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FeedbackSummaryInstance) => any): Promise<FeedbackSummaryInstance>;
  /**
   * remove a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FeedbackSummaryInstance) => any): void;
}


declare class FeedbackSummaryInstance extends SerializableClass {
  /**
   * Initialize the FeedbackSummaryContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property callCount - The total number of calls
   * @property callFeedbackCount - The total number of calls with a feedback entry
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property endDate - The latest feedback entry date in the summary
   * @property includeSubaccounts - Whether the feedback summary includes subaccounts
   * @property issues - Issues experienced during the call
   * @property qualityScoreAverage - The average QualityScore of the feedback entries
   * @property qualityScoreMedian - The median QualityScore of the feedback entries
   * @property qualityScoreStandardDeviation - The standard deviation of the quality scores
   * @property sid - A string that uniquely identifies this feedback entry
   * @property startDate - The earliest feedback entry date in the summary
   * @property status - The status of the feedback summary
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account responsible for creating this Call
   * @param sid - A string that uniquely identifies this feedback summary resource
   */
  constructor(version: V2010, payload: FeedbackSummaryPayload, accountSid: string, sid: string);

  private _proxy: FeedbackSummaryContext;
  accountSid: string;
  callCount: number;
  callFeedbackCount: number;
  dateCreated: Date;
  dateUpdated: Date;
  endDate: Date;
  /**
   * fetch a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FeedbackSummaryInstance) => any): void;
  includeSubaccounts: boolean;
  issues: string;
  qualityScoreAverage: number;
  qualityScoreMedian: number;
  qualityScoreStandardDeviation: number;
  /**
   * remove a FeedbackSummaryInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FeedbackSummaryInstance) => any): void;
  sid: string;
  startDate: Date;
  status: FeedbackSummaryStatus;
  /**
   * Produce a plain JSON object version of the FeedbackSummaryInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
}


declare class FeedbackSummaryPage extends Page<V2010, FeedbackSummaryPayload, FeedbackSummaryResource, FeedbackSummaryInstance> {
  /**
   * Initialize the FeedbackSummaryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: FeedbackSummarySolution);

  /**
   * Build an instance of FeedbackSummaryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FeedbackSummaryPayload): FeedbackSummaryInstance;
}

export { FeedbackSummaryContext, FeedbackSummaryInstance, FeedbackSummaryList, FeedbackSummaryListInstance, FeedbackSummaryListInstanceCreateOptions, FeedbackSummaryPage, FeedbackSummaryPayload, FeedbackSummaryResource, FeedbackSummarySolution }