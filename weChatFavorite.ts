export default ({...props}:any = {}) => (global as any).createSvgComponent({
  ...props,
  path: [{
    d: 'M511.1808 73.3184l445.0304 215.8592-445.0304 233.8816L66.3552 289.1776 511.1808 73.3184z m0 0',
    fill: '#00AEFF'
  }, {
    d: 'M501.3504 963.3792L66.3552 753.2544V315.8016L501.3504 540.672v422.7072z m0 0',
    fill: '#F8D200'
  }, {
    d: 'M521.216 540.672l434.9952-224.8704v437.4528L521.216 963.3792V540.672z m0 422.7072',
    fill: '#FF494A'
  }]
});
