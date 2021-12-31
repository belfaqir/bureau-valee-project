import getLocateur from '../../mapping/fonctions/locateurs'
import focusIframe from '../navigation/focusIframe';
import perdreFocus from '../navigation/perdreFocus';
/**
 * Saisir un texte dans un iframe
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 * @param  {String} iframe - locateur de l'iframe dans lequel saisir
 * 
 */
export default (texteASaisir, locateur, iframe) => {

    //Recuperation du locateur reel si alias donne
    locateur = getLocateur(locateur)
    iframe = getLocateur(iframe)

    $(iframe).waitForExist({
        timeout: 10000
    });

    //Recuperation de l'element
    const elementLocateur = $(locateur)

    try {
        focusIframe(iframe)
        //Saisie du texte dans l'element
        elementLocateur.click()
        browser.keys(['Control', 'a'])
        browser.keys("Delete")
        elementLocateur.setValue(texteASaisir)
        perdreFocus

    } catch (StaleElementException) {
        focusIframe(iframe)
        //Saisie du texte dans l'element
        elementLocateur.click()
        browser.keys(['Control', 'a'])
        browser.keys("Delete")
        elementLocateur.setValue(texteASaisir)
        perdreFocus
    }
    perdreFocus

};
