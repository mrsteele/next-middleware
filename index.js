const noop = async () => {}

module.exports = class {
  constructor () {
    this.middlewares = []
  }

  add (fn) {
    this.middlewares.push(fn)
  }

  build (Component) {
    const oldGetInitialProps = Component.getInitialProps || noop

    Component.getInitialProps = async (args) => {
      let combinedProps = {}
      for (let midware of this.middlewares) {
        const data = await midware(args)
        combinedProps = {
          ...combinedProps,
          ...data
        }
      }

      const initialProps = await oldGetInitialProps(args)

      return {
        ...combinedProps,
        ...initialProps
      }
    }

    return Component
  }
}
