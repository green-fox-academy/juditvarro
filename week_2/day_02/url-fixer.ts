'use strict';

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

// one version:

let goodUrl: string = url.replace('https//www.reddit.com/r/nevertellmethebots', 'https://www.reddit.com/r/nevertellmetheodds')

console.log(goodUrl);

// second version:

let goodUrlToo: string = url.replace('bots','odds');
goodUrlToo = goodUrlToo.replace('https', 'https:');

console.log(goodUrlToo);

