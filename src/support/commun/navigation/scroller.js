import getLocateur from '../../mapping/fonctions/locateurs'
import scrollerElement from './scrollerElement';

/**
 * Scroller jusqu'a l'element
 * @param  {String} locateur - element vers lequel scroller
 */
export default (locateur) => {

    //browser.scroll(locateur,xoffset,yoffset);

    scrollerElement(locateur,"0","0");

};
