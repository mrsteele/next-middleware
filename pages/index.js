const Middleware = require('../')

const middleware = new Middleware()

middleware.add(async () => {
  return { test: 'working!' }
})

const Page = ({ test }) => (
  <div>
    Hello! {test}
  </div>
)

export default middleware.build(Page)
