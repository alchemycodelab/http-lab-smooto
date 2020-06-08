// split at newline
// reduce -> 
//// split[0] -> split at spaces, add to acc { method: [0], path: [1]}
//// 

module.exports = rawRequest => {
  const splitBody = rawRequest.toString()
    .replace(/\r/g, '')
    .split('\n')

  const [method, path] = splitBody[0].split(' ')

  const getBody = () => {
    const index = splitBody.indexOf('') + 1
    if(index <= 0) return;
    return splitBody[index]
  }

  return !getBody() ? { method, path } : {method, path, body: getBody()}
  // const body = splitBody[bodyIndex]

  // const obj = {method, path, body: getBody()}
  // console.log(obj)

  // const [method, path, http,, host,, language, body] = rawRequest.toString()
  //   // replace all newlines with spaces for more accurate splitting
  //   .replace(/\n/g, ' ')
  //   // split strings at spaces
  //   .split(' ')
  //   // remove empty elements from extra newlines, to keep destructuring accurate
  //   .filter(str => str !== '');

  // return (!body) ? { method, path } : { method, path, body };
};
