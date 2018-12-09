interface AbstractHtmlElement {
  element: string;

  // global html attributes
  className?: string;
  id?: string;
  title?: string;

  // children
  children?: Array<any>;
};

export default AbstractHtmlElement;
