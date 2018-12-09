interface HtmlElement {
  element: string;

  // attributes
  className?: string;
  id?: string;
  textContent?: string;
  title?: string;

  // events
  click?: any;

  // children
  children?: Array<any>;
};

export default HtmlElement;
