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
};
