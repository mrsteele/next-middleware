const next = require('next')

const nextApp = next({dev: process.env.NODE_ENV !== 'production'})

console.log(nextApp.router.routes)
