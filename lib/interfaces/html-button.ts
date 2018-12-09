import HtmlElement from './html-element';

interface HtmlButton extends HtmlElement {
  element: 'button';
  click: any;
};

export default HtmlButton;
