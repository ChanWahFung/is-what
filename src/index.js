/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
export function getType (payload) {
  return Object.prototype.toString.call(payload).slice(8, -1)
}

/**
 * Returns whether the payload is a string
 * @param {*} payload 
 * @returns {boolean}
 */
export function isString (payload) {
  return getType(payload) === 'String'
}

/**
 * Returns whether the payload is a number
 * @param {*} payload 
 * @returns {boolean}
 */
export function isNumber (payload) {
  return getType(payload) === 'Number'
}

/**
 * Returns whether the payload is a boolean
 * @param {*} payload 
 * @returns {boolean}
 */
export function isBoolean (payload) {
  return getType(payload) === 'Boolean'
}

/**
 * Returns whether the payload is a undefined
 * @param {*} payload 
 * @returns {boolean}
 */
export function isUndefined (payload) {
  return getType(payload) === 'Undefined'
}

/**
 * Returns whether the payload is a null
 * @param {*} payload 
 * @returns {boolean}
 */
export function isNull (payload) {
  return getType(payload) === 'Null'
}

/**
 * Returns whether the payload is a array
 * @param {*} payload 
 * @returns {boolean}
 */
export function isArray (payload) {
  return getType(payload) === 'Array'
}

/**
 * Returns whether the payload is a object
 * @param {*} payload 
 * @returns {boolean}
 */
export function isObject (payload) {
  return getType(payload) === 'Object'
}

/**
 * Returns whether the payload is a function
 * @param {*} payload 
 * @returns {boolean}
 */
export function isFunction (payload) {
  return getType(payload) === 'Function'
}

/**
 * Returns whether the payload is a date
 * @param {*} payload 
 * @returns {boolean}
 */
export function isDate (payload) {
  return getType(payload) === 'Date'
}

/**
 * Returns whether the payload is a RegExp
 *
 * @param {*} payload
 * @returns {boolean}
 */
export function isRegExp(payload) {
  return getType(payload) === 'RegExp'
}

/**
 * Returns whether the payload is a Set
 * @param {*} payload 
 * @returns {boolean}
 */
export function isSet (payload) {
  return getType(payload) === 'Set'
}

/**
 * Returns whether the payload is a WeakSet
 * @param {*} payload 
 * @returns {boolean}
 */
export function isWeakSet (payload) {
  return getType(payload) === 'WeakSet'
}

/**
 * Returns whether the payload is a Map
 * @param {*} payload 
 * @returns {boolean}
 */
export function isMap (payload) {
  return getType(payload) === 'Map'
}

/**
 * Returns whether the payload is a WeakMap
 * @param {*} payload 
 * @returns {boolean}
 */
export function isWeakMap (payload) {
  return getType(payload) === 'WeakMap'
}

/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {boolean}
 */
export function isSymbol(payload) {
  return getType(payload) === 'Symbol'
}

/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {boolean}
 */
export function isBlob(payload) {
  return getType(payload) === 'Blob'
}

/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {boolean}
 */
export function isFile(payload) {
  return getType(payload) === 'File'
}

/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {boolean}
 */
export function isPromise(payload) {
  return getType(payload) === 'Promise'
}

/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {boolean}
 */
export function isError(payload) {
  return getType(payload) === 'Error'
}

/**
 * Returns whether the payload is a positive number (but not 0)
 *
 * @param {*} payload
 * @returns {boolean}
 */
export function isPositiveNumber(payload) {
  return isNumber(payload) && payload > 0
}

/**
 * Returns whether the payload is a negative number (but not 0)
 *
 * @param {*} payload
 * @returns {boolean}
 */
export function isNegativeNumber(payload) {
  return isNumber(payload) && payload < 0
}

/**
 * Returns whether the payload is a negative zero
 * @param {*} payload 
 * @returns {boolean}
 */
export function isNegativeZero(payload) {  
  return payload === 0 && (1 / payload < 0)
}

/**
 * Returns whether the payload is a positive zero
 * @param {*} payload 
 * @returns {boolean}
 */
export function isPostiveZero(payload) {  
  return payload === 0 && (1 / payload > 0)
}