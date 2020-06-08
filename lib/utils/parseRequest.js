module.exports = rawRequest => {
  const [method, path, http,, host,, language, body] = rawRequest.toString()
    // replace all newlines with spaces for more accurate splitting
    .replace(/\n/g, ' ')
    // split strings at spaces
    .split(' ')
    // remove empty elements from extra newlines, to keep destructuring accurate
    .filter(str => str !== '');

  return (!body) ? { method, path } : { method, path, body };
};
