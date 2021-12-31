import getLocateur from '../../mapping/fonctions/locateurs'
import ajoutTexte from './ajoutTexte';
import saisirTexte from './saisirTexte';
/**
 * Saisir un texte si besoin
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
export default (texteASaisir, locateur) => {

        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        browser.pause(500)

        //Recuperation de l'element
        const element = $(locateur)

        try {
            //Si l'element est visible uniquement
            if (element.isDisplayed()) {
               // saisirTexte(texteASaisir, locateur)
                ajoutTexte(texteASaisir, locateur)
            }
        } catch (StaleElementException) {

        }
    
};
