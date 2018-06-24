export default ({...props} = {}) => (global as any).createSvgComponent({
  width: '200',
  height: '200',
  ...props,
  path: [{
    d: 'M1020.943676 489.577653c-6.566272-181.308464-118.384891-304.877255-118.384892-304.877255C729.646956-18.48284 507.89128 0.473591 507.89128 0.473591c-236.820982-7.590252-382.456542 172.924628-382.456542 172.924628-99.633257 119.626467-110.884238 229.857918-110.884238 229.857918-44.184738 185.14839 47.909466 344.710078 47.909466 344.710078 68.593862 125.347956 140.950851 183.356425 258.388561 238.331352 117.476109 55.179724 296.058227 47.589472 406.942465-8.435035 110.858638-56.101306 178.518119-117.821702 240.545709-234.593826 61.963592-116.887321 52.606974-253.691053 52.606975-253.691053M459.956215 910.382248s-186.069972-10.418997-288.493575-190.933877c0 0-88.369477-127.293518-51.723791-285.908025C156.422934 274.938639 241.925266 211.362278 258.872136 195.221793c16.92127-16.114886 126.397535-82.008001 201.084079-80.804824v189.026714h-78.936061s-107.133911 6.65587-110.897037 126.320737v174.754992s2.828745 107.377106 113.712982 119.690466h76.107316v186.17237M396.021462 613.108044s-18.764434 4.735908-21.58038-17.074867V428.855637s2.803145-18.034848 16.895671-18.034848h232.097874s19.775614-3.865525 21.618778 18.034848v162.403233s4.723108 25.6507-14.092525 21.861974H396.021462m452.048785 122.468012C772.871713 851.452197 630.026498 904.686359 563.326999 910.382248V724.209878h88.318278s94.039766-18.96923 99.620457-117.783303V407.940845s-15.103705-99.671656-119.306473-104.497162H563.326999V114.468168s117.463309 9.459016 212.360659 97.841292c94.910149 88.305478 119.319273 176.623756 129.687071 224.136429 10.316599 47.499874 17.855652 183.266826-57.304482 299.142967z',
    fill: '#972030'
  }]
});
