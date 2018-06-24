import * as React from 'react';

/**
 * @author Sean(sean.snow@live.com) createAt 18-2-8
 */
import { SvgIcon } from './SvgIcon';

function getPathProps(path, fill) {
  let props = path;
  if (typeof path === 'string') {
    props = {
      d: path
    }
  }
  if (fill && fill !== props.fill) {
    props.fill = fill;
  }
  return props;
}

export default ({path, fill, ...props}: any = {}) => {

  let comp;
  if (Array.isArray(path)) {
    comp = path.map((item, index) => (
      <path {...getPathProps(item, fill)} key={index}/>
    ))
  } else {
    comp = <path {...getPathProps(path, fill)}/>
  }

  return (
    <SvgIcon {...props}>
      {comp}
    </SvgIcon>
  );
}
