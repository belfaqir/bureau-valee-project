import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
import actualiserPage from '../navigation/actualiserPage';
import cliquerSur from './cliquerSur';

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element sur lequel cliquer
 */
export default (locateur) => {


        //Recuperation du locateur reel si alias donne

        browser.pause(2000)

        var locateur2 = getLocateur(locateur)

        //Recuperation de l'element
        var element = $(locateur2)

        if ($('#activationCodeForm').isDisplayed()) {
            actualiserPage()
        }

        if ($('.continueContainer-sc a').isDisplayed()) {
            $('.continueContainer-sc a').click()
        }

        if ($('.ctaStyle-sc').isDisplayed()) {
            $('.ctaStyle-sc').click()
        }

        attendreSecondes(1)

        if (element.isExisting()) {
            cliquerSur(locateur)
        }
        else {
            try {
                if (element.isExisting()) {
                    cliquerSur(locateur)
                }
            }
            catch {
                console.log("cliquerSurSiBesoin - Tentative 2")
                attendreSecondes(1)

                try {
                    if (element.isExisting()) {
                        cliquerSur(locateur)
                    }
                }
                catch {
                    console.log("cliquerSurSiBesoin - Tentative 3")
                    attendreSecondes(2)
                    element = $(locateur2)
                    //scrollerElement(locateur)
                    attendreSecondes(2)
                    if (element.isExisting()) {
                        cliquerSur(locateur)
                    }
                }
            }
        }




};
