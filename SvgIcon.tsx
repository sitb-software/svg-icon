import * as React from 'react';

export interface Props {

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess?: string,

  /**
   * Allows you to redefine what the coordinates without units mean inside an svg element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the svg will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox?: string
}

export class SvgIcon extends React.Component<Props> {

  props: any;

  static defaultProps = {
    display: 'inline-block',
    fill: 'currentColor',
    height: 24,
    width: 24,
    viewBox: '0 0 1024 1024'
  };

  render() {
    const {children, viewBox, titleAccess, ...other} = this.props;
    return (
      <svg focusable="false"
           viewBox={viewBox}
           aria-hidden={titleAccess ? 'false' : 'true'}
           {...other}
      >
        {titleAccess ? <title>{titleAccess}</title> : null}
        {children}
      </svg>
    );
  }

}
