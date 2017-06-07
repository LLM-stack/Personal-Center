
// const requestUrl = 'http://test.qmjbuy.com';
// const agentUrl = 'https://bird.ioliu.cn/v1?url=';
// const allUrl= agentUrl+requestUrl

const requestUrl = (window.location.host=='localhost:8080' || window.location.host=='test.qmjbuy.com' )?'http://test.qmjbuy.com':'http://www.qmjbuy.com';
const agentUrl = requestUrl=='http://www.qmjbuy.com'?'':'https://bird.ioliu.cn/v1?url=';
const allUrl=agentUrl+requestUrl

export default {
  agent: agentUrl,
  requestUrl: requestUrl,
  allUrl:allUrl
}
