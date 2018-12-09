import HtmlElement from '../types/html-element';
import getView from './get-view';

const setView = (appRootId: string, tpl: HtmlElement): void => {
  const appRoot: Node = document.getElementById(appRootId);
  while (appRoot.firstChild) {
    appRoot.removeChild(appRoot.firstChild);
  }
  appRoot.appendChild(getView(tpl));
};

export default setView;
