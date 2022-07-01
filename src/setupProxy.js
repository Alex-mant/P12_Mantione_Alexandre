const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    createProxyMiddleware(
      '/UriOfApi',
      {
        target: "baseUrlOfApi",
        changeOrigin: true
      }
    )
  )
}