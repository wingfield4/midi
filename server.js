const Koa = require('koa');
const send = require('koa-send');
app = new Koa();

// const {
//   default: sslify,
//   xForwardedProtoResolver: resolver
// } = require('koa-sslify');

// if(process.env.NODE_ENV === 'production') {
//   app.use(sslify({ resolver }));
// }

const static = require('koa-static-cache');
app.use(static(`${'./build'}`));

app.use(async (ctx) => {
  await send(ctx, `build/index.html`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})