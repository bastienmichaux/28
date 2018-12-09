import HtmlElement from './html-element';

interface HtmlLabel extends HtmlElement {
  element: 'label';
  for: string;
};

export default HtmlLabel;
