export default ({width = 32, height = 32, colors = [], ...props} = {}) => (global as any).createSvgComponent({
  ...props,
  width,
  height,
  path: [{
    d: 'M853.021082 384c-107.008-35.328-64-102.4-128-128-108.544-45.056-212.992-43.008-212.992-43.008s-103.936-2.048-212.992 43.008c-64 25.6-20.992 92.672-128 128C57.885082 420.864-1.506918 366.592 0.029082 299.008c1.536-45.056 28.672-96.256 84.992-129.536C230.429082 86.528 512.029082 84.992 512.029082 84.992s281.6 1.536 427.008 84.992c55.808 31.744 82.944 82.944 84.992 128 1.536 68.608-57.344 122.88-171.008 86.016z',
    fill: colors[0]
  }, {
    d: 'M658.461082 427.008V353.792h-73.728v73.728H437.789082V353.792H365.597082l1.024 73.728-293.376 256v158.72c0 53.76 43.52 97.28 97.28 97.28h684.032c53.76 0 97.28-43.52 97.28-97.28v-158.72l-293.376-256.512zM512.029082 829.44c-80.896 0-146.944-65.536-146.944-146.944s65.536-146.944 146.944-146.944 146.944 65.536 146.944 146.944S592.925082 829.44 512.029082 829.44z',
    fill: colors[1]
  }]
});