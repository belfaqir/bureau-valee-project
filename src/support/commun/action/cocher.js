import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
/**
 * Cocher un element
 * @param  {String} locateur - locateur de l'element a cocher
 */
export default (locateur) => {


        //Recuperation du locateur reel si alias donne

        var locateur2 = getLocateur(locateur)

        $(locateur2).waitForExist({
            timeout: 10000
        });

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

        try {
            scrollerElement(locateur)
            attendreSecondes(1)
            element.click()
        }
        catch {
            attendreSecondes(1)

            try {
                element = $(locateur2)
                scrollerElement(locateur)
                attendreSecondes(1)
                element.click()
            }
            catch {
                attendreSecondes(1)
                try {
                    element = $(locateur2)
                    scrollerElement(locateur)
                    attendreSecondes(1)
                    element.click()
                }
                catch {
                    attendreSecondes(1)
                    try {
                        element = $(locateur2)
                        scrollerElement(locateur)
                        attendreSecondes(1)
                        element.click()
                    }
                    catch {
                        element = $(locateur2)
                        attendreSecondes(1)
    
                        var runInBrowser = function (argument) {
                            argument.click();
                        };
                        browser.execute(runInBrowser, element);
                    }
                }
            }
        }


};
