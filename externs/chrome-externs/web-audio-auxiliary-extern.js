/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview An extern for web audio symbols that have not been defined in
 *     the default extern used by Chrome. This extern should go away one day (
 *     once the official externs update).
 * @externs
 */


/**
 * @constructor
 */
function AudioWorkerNode() {}


/**
 * @constructor
 */
function AudioWorker() {}


/**
 * @param {number} numberOfInputs
 * @param {number} numberOfOutputs
 * @return {!AudioWorkerNode}
 */
AudioWorker.prototype.createNode = function(numberOfInputs, numberOfOutputs) {};


/**
 * @constructor
 */
function IIRFilterNode() {}


/**
 * @param {!Array.<number>} feedforward
 * @param {!Array.<number>} feedback
 * @return {!IIRFilterNode}
 */
AudioContext.prototype.createIIRFilter = function(feedforward, feedback) {};
