export default ({width = 32, height = 32, colors = [], ...props}: any = {}) => (global as any).createSvgComponent({
  ...props,
  width,
  height,
  path: [{
    d: 'M1024 203.2c0-52.8-43.2-96-96-96H96c-52.8 0-96 43.2-96 96v83.2h1024v-83.2z',
    fill: colors[0]
  }, {
    d: 'M0 416v404.8c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96V416H0z m881.6 404.8H702.4l48-118.4H928l-46.4 118.4z',
    fill: colors[1]
  }]
});
