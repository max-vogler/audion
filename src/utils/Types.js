/** @namespace Utils */

/**
 * An abstraction of the observer idiom.
 *
 * @typedef Utils.Observer
 * @property {Utils.ObserverObserveMethod<T>} observe
 * @template T
 */

/**
 * Install callbacks for each value observed, when the observer completes, if it
 * does, or if the observer errors.
 *
 * @callback Utils.ObserverObserveMethod
 * @param {Utils.SubscribeOnNext<T>} onNext called with each observed value
 * @param {function(): void} [onComplete] called when the observer completes, if
 *   it does
 * @param {function(*): void} [onError] called when the observer produces an
 *   error, if it does
 * @return {function(): void} function to unsubscribe from this installation
 * @template T
 */

/**
 * @callback Utils.SubscribeCallback
 * @param {Utils.SubscribeOnNext<T>} onNext
 * @param {function(): void} onComplete
 * @param {function(*): void} onError
 * @return {function(): void}
 * @template T
 * @alias SubscribeCallback
 */

/**
 * @callback Utils.SubscribeOnNext
 * @param {T} value
 * @return {void}
 * @template T
 * @alias SubscribeOnNext
 */

/**
 * @typedef Utils.Cancelable
 * @property {T} [value]
 * @property {boolean} canceled
 * @template T
 * @alias Cancelable
 */

/**
 * @typedef Utils.CancelablePromise
 * @property {Promise<Utils.Cancelable<T>>} promise
 * @property {function(): void} cancel
 * @template T
 * @alias CancelablePromise
 */

/**
 * @typedef Utils.ThrottleObserverOptions
 * @property {function(T): *} [key]
 * @property {function(): Promise<void>} [timeout]
 * @alias ThrottleObserverOptions
 * @template T
 */

/**
 * @typedef Utils.RetryOptions
 * @property {function(): Promise<void>} [timeout]
 * @property {number} [times=10]
 */

/**
 * @callback Utils.DataEventListener
 * @param {{data: T}} event
 * @return {void}
 * @template T
 */

/**
 * @callback Utils.ModifyDataEventListeners
 * @param {string} eventName
 * @param {Utils.DataEventListener<T>} listener
 * @return {void}
 * @template T
 */

/**
 * @typedef Utils.DataEmitter
 * @property {Utils.ModifyDataEventListeners<T>} addEventListener
 * @property {Utils.ModifyDataEventListeners<T>} removeEventListener
 * @template T
 */

/**
 * @typedef Utils.Poster
 * @property {function(T): void} postMessage
 * @template T
 */
