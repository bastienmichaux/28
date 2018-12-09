import HtmlElement from './html-element';

interface HtmlInput extends HtmlElement {
  element: 'input';
  type: 'text' | 'radio' | 'submit'
};

export default HtmlInput;
