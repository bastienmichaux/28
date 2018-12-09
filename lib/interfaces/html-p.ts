import HtmlElement from './html-element';

interface HtmlP extends HtmlElement {
  element: 'p',
  textContent: string;
};

export default HtmlP;
