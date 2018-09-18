window.onload = () => {
  const host = 'http://localhost:8082';
  const http = new XMLHttpRequest();
  const articleParent = document.querySelector('#articles');
  http.open('GET', `${host}/api/v1/nytimes/articles`, true);

  http.onload = () => {
    if(http.status === 200) {
      let source = JSON.parse(http.response);
      console.log(source);
      // let articleContent = source.docs;
      // console.log(articleContent);
      let eachArticle = document.createElement('h1');

      source.forEach(element => {
        if(element.web_url === "https://query.nytimes.com/gst/abstract.html?res=940DE4DB1738E63ABC4951DFB1668382679EDE"){
        eachArticle.innerText = element.headline;
        articleParent.appendChild(eachArticle);
      }
      })
    }
  } 
http.send();
}