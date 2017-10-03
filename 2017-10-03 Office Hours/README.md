# 2017-10-03 Office Hours

Led by @justinhaaheim

## Agenda:

- What does bodyParser *get* from express?
- How do we look visually at the body and headers in these requests and responses?
  - Two options: use `curl -v "URL"`, or use postman.
- Why it's important to know how bodyParser works...?
- What are "named placeholders" in express? what else can we pass to an express route?


## Questions:

*What goes into `Expires:` header? How is it used?*

The `Expires:` header is part of a HTTP response and gets a date/timestamp. What the response is saying is "the resource (html page, image, etc) that you're getting here will go stale on X date". What that means is that the browser can safely use the cached version up until that date rather than re-requesting it. This might be used on static pages, images, etc. If you're serving a page with content that changes, you do NOT want the browser to cache the page. In that case you can use `Expires: -1`.

From: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires

> The Expires header contains the date/time after which the response is considered stale.

> Invalid dates, like the value 0, represent a date in the past and mean that the resource is already expired.

> If there is a Cache-Control header with the "max-age" or "s-max-age" directive in the response, the Expires header is ignored.


Further reading: https://jakearchibald.com/2016/caching-best-practices/


## For next office hours:

- stubbing, mocking, dependency injection: sinon
- connection pools
- database schemas
- More express server live coding -- Building a REST api!
