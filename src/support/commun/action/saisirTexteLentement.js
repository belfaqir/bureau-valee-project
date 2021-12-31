import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
import perdreFocusElement from '../navigation/perdreFocusElement';
import cliquerSur from './cliquerSur';
import taperTouche from './taperTouche';
/**
 * Saisir un texte lentement
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
export default (texteASaisir, locateur) => {

    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)


    $(locateur).waitForExist({
        timeout: 10000
    });

    browser.pause(250)

    //Recuperation de l'element
    const element = $(locateur)

    try {
        //Saisie du texte dans l'element
        element.click()
        for (var char = 0; char < texteASaisir.length; char++) {
            taperTouche(texteASaisir.charAt(char))
            attendreSecondes(0.2)
            taperTouche('ArrowRight')
            attendreSecondes(0.2)
        }

    } catch (StaleElementException) {
    }

};
