import HtmlElement from './html-element';

interface HtmlDiv extends HtmlElement {
  element: 'div',
  children: Array<any>;
};

export default HtmlDiv;
