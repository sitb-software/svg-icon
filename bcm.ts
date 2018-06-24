export default ({...props} = {}) => (global as any).createSvgComponent({
  width: '200',
  height: '200',
  ...props,
  path: [{
    d: 'M808.58871 767.98625c-60.121941 1.932998-115.686887 3.878996-175.782828 5.810994-38.066963 161.894842-352.843655 118.182885-317.77169-87.269914 17.624983-121.701881 182.079822-174.860829 284.120723-82.956919 22.412978 25.330975 33.407967 48.870952 40.60196 100.428902 50.418951-1.932998 118.424884-3.877996 168.831835-5.810995 2.546998-261.823744-294.834712-394.700615-517.823494-267.647738C76.992425 552.319461 101.670401 923.391098 325.683182 1018.162006V1023.999c-122.149881-2.405998-256.14075-97.023905-285.311721-209.458795l1.650998-603.622411C138.982364 144.972858 246.15726 65.932936 343.130165 0l11.647989 5.823994c-6.719993 90.994911-2.457998 241.036765 2.904997 350.540658 60.748941-58.956942 101.682901-120.614882 206.553798-141.094862 67.583934-13.195987 132.287871-5.234995 173.093831 8.729991 306.367701 104.959898 325.439682 500.837511 65.458936 637.093378-5.835994 0-18.482982 11.455989-28.133972 13.350987 0-1.932998 6.079994-10.34299 10.661989-19.174981l23.270977-87.282915z',
    fill: '#1D2087'
  }]
});
