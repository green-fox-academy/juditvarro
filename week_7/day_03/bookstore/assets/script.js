window.onload = () => {
  const host = 'http://localhost:8082';
  const http = new XMLHttpRequest();
  const bookParent = document.querySelector("#books");

  http.open('GET', `${host}/api/v1/books`, true);

  http.onload = () => {
    if (http.status === 200) {
      const books = JSON.parse(http.response);

      const upperpart = document.createElement('thead');
      const upperPartBody = document.createElement('tr');
      const upperPartBodyContentOne = document.createElement('th');
      const upperPartBodyContentTwo = document.createElement('th');
      const upperPartBodyContentThree = document.createElement('th');
      const upperPartBodyContentFour = document.createElement('th');
      const upperPartBodyContentFive = document.createElement('th');

      upperPartBodyContentOne.innerText = 'TITLE';
      upperPartBodyContentTwo.innerText = 'AUTHOR';
      upperPartBodyContentThree.innerText = 'CATEGORY';
      upperPartBodyContentFour.innerText = 'PUBLISHER';
      upperPartBodyContentFive.innerText = 'PRICE';

      upperPartBody.appendChild(upperPartBodyContentOne);
      upperPartBody.appendChild(upperPartBodyContentTwo);
      upperPartBody.appendChild(upperPartBodyContentThree);
      upperPartBody.appendChild(upperPartBodyContentFour);
      upperPartBody.appendChild(upperPartBodyContentFive);

      upperpart.appendChild(upperPartBody);

      books.forEach(element => {
        
        const tableRowOne = document.createElement('tr');
        const columnOne = document.createElement('td');
        const columnTwo = document.createElement('td');
        const columnThree = document.createElement('td');
        const columnFour = document.createElement('td');
        const columnFive = document.createElement('td');

        columnOne.innerText = element.book_name;
        columnTwo.innerText = element.aut_name;
        columnThree.innerText = element.cate_descrip;
        columnFour.innerText = element.pub_name;
        columnFive.innerText = element.book_price;

        tableRowOne.appendChild(columnOne);
        tableRowOne.appendChild(columnTwo);
        tableRowOne.appendChild(columnThree);
        tableRowOne.appendChild(columnFour);
        tableRowOne.appendChild(columnFive);

        upperpart.appendChild(tableRowOne);

        bookParent.appendChild(upperpart);

      });
    }
  }
  http.send();
}


