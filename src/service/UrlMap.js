const hostUrl = "https://c.m.163.com/";
const picHost = "http://pic.news.163.com";
export const urlMap = {
  news_url: hostUrl + "/nc/article/list/T1467284926140/0-20.html",
  pic_url_tj:
    picHost + "/photocenter/api/list/0031/6LRK0031,6LRI0031/0/20.json",
  pic_url_news:
    picHost + "/photocenter/api/list/0001/00AP0001,3R710001,4T8E0001/0/20.json",
  pic_url_star:
    picHost +
    "/photocenter/api/list/0003/00AJ0003,0AJQ0003,3LF60003,00B70003,00B50003//0/20.json",
  pic_url_hot:
    picHost + "/photocenter/api/list/0001/00AN0001,00AO0001/0/20.json"
};
export const pic_url = [
  urlMap.pic_url_tj,
  urlMap.pic_url_news,
  urlMap.pic_url_star
];
