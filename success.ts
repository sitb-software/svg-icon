export default ({...props} = {}) => (global as any).createSvgComponent({
  ...props,
  viewBox: '0 0 1024 1024',
  path: 'M449.486 554.962l-178.64-142.25-79.189 64.444 308.929 319.051c53.412-138.117 221.894-408.381 427.695-600.365l-18.86-44.201c-224.206 139.519-386.717 314.937-459.935 403.319zM939.659 422.143h-44.309c6.754 28.854 10.304 58.928 10.304 89.857 0 217.415-176.255 393.671-393.671 393.671s-393.653-176.255-393.653-393.671 176.255-393.671 393.671-393.671c52.939 0 103.42 10.467 149.514 29.401v-46.385c-47.787-17.422-97.995-26.251-149.514-26.251-58.964 0-116.18 11.559-170.084 34.352-52.029 22.010-98.741 53.503-138.864 93.626-40.105 40.105-71.616 86.835-93.607 138.864-22.791 53.885-34.352 111.102-34.352 170.066s11.559 116.18 34.352 170.084c21.991 52.029 53.503 98.759 93.607 138.864 40.123 40.105 86.835 71.616 138.864 93.626 53.903 22.773 111.12 34.334 170.084 34.334 58.946 0 116.199-11.559 170.084-34.352 52.029-22.010 98.759-53.503 138.864-93.626s71.616-86.835 93.626-138.864c22.773-53.885 34.334-111.102 34.334-170.066 0-30.493-3.131-60.512-9.248-89.857z'
});
