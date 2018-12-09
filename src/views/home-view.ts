import constants from '../constants/constants';
import HtmlElement from '../../lib/interfaces/html-element';

const click = () => console.log('lol');

const HomeView = (): HtmlElement => {
  return {
    element: 'div',
    children: [
      {
        element: 'button',
        textContent: 'click me',
        click: click
      }
    ]
  }
};

export default HomeView;
