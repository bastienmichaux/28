import HtmlElement from '../interfaces/html-element';

const getView = (tpl: HtmlElement) => {
  const view = document.createElement(tpl.element);

  if (tpl.className) view.className = tpl.className;
  if (tpl.id) view.id = tpl.id;
  if (tpl.textContent) view.textContent = tpl.textContent;

  if (tpl.click) view.addEventListener('click', tpl.click, false);

  if (tpl.children) {
    const children = tpl.children;
    children.forEach(child => {
      view.appendChild(getView(child));
    });
  }

  return view;
};

export default getView;
