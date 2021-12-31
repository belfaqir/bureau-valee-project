import getLocateur from "../../mapping/fonctions/locateurs";
import scrollerElement from "../navigation/scrollerElement";
import attendreSecondes from "../navigation/attendreSecondes";
import actualiserPage from "../navigation/actualiserPage";

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element a cocher
 */
export default (locateur) => {
  //Recuperation du locateur reel si alias donne

  var locateur2 = getLocateur(locateur);
  var element = $(locateur2);

  /* if (!element.isExisting()) {
        throw Error('l element recherché n existe pas, vérifier le locateur: '+ locateur)
            } */

  /*  $(locateur2).waitForExist({
            timeout: 10000
        }); */
  attendreSecondes(3);

  //Recuperation de l'element
  if (element.isDisplayed()) {
    console.log("element  displayed, waiting click :" + locateur2);
    element.click();
  } else {
    console.log("element to click is not displayed :" + locateur2);
  }
};
