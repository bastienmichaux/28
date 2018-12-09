import constants from '../constants/constants';
import HtmlDiv from '../../lib/interfaces/html-div';

const click = () => console.log('lol');

const HomeView = (): HtmlDiv => {
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
