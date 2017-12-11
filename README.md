# next-middleware
Create middleware for your next route

### Install

You can install using npm

```
npm i next-middleware --save
```

### Usage

The first step is to create your **middleware.js** file:

```js
// import this module
import Middleware from 'next-middleware'

// Create a new middleware pipeline
const middleware = new Middleware()

// we can go ahead and export the build function as the default
export default middleware.build

// Add whatever middleware you want
middleware.add(async ({ req }) => {
  const users = fetch(`/users?id=${req.query.id}`)
  return { users }
})

```

Then you can use it anywhere in `/pages/*.js`

```js
import middleware from '../middleware'

const Page = ({ users }) => (
  <div>
    Users: {users.map(user => user.name).join()}
  </div>
)

// wrap it with your middleware
export default middleware(Page)
```

### License

MIT
