'use strict';

class BlogPost {
  private authorName: string;
  private title: string;
  private text: string;
  private publicationDate: string;
  constructor(title: string, authorName: string, publicationDate: string, text: string) {
    this.title = title;
    this.authorName = authorName;
    this.publicationDate = publicationDate;
    this.text = text;
  }

}

let johnDoeText: string = 'Lorem ipsum dolor sit amet.';
let timUrbanText: string = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
let williamTurtonText: string = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';

let blogPostJohnDoe: BlogPost = new BlogPost('Lorem Ipsum', 'John Doe', '2000.05.04.', johnDoeText);
let blogPostTimUrban: BlogPost = new BlogPost('Wait but why', 'Tim Urban', '2010.10.10.', timUrbanText);
let blogPostWilliamTurton: BlogPost = new BlogPost('One Engineer Is Trying to Get IBM to Reckon With Trump', 'William Turton', '2017.03.28.', williamTurtonText);


