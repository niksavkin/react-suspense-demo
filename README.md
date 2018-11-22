# react-suspense-demo

Long story short
- npm install
- npm run start

Best view with Slow 3G Network enabled at devtools. You'll see this (i hope):

- Initial load (black) - static label at index.html shown while the main bundle is being loaded
- Loading module (magenta) - indicator shown while module chunk dynamycally loaded
- Loading data (blue) - fething some stuff

Don't look at naive inversify usage, look at declarative manner instead.
Or keep going with SOMETHING_FETCH_REQUEST, SOMETHING_FETCH_SUCCESS, SOMETHING_FETCH_ERROR :)

