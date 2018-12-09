import HtmlElement from './html-element';

interface HtmlForm extends HtmlElement {
  element: 'form';
  children: Array<any>;
};

export default HtmlForm;
