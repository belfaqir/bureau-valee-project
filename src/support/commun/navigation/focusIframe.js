import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Mettre le focus sur un iframe
 * @param  {String} locateur - locateur de l'iframe sur lequel mettre le focus
 */
export default (locateur) => {

        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)


        browser.pause(1500)

        //Recuperation de l'element
        const element = $(locateur)

        element.waitForExist({
            timeout: 10000
        });
        element.waitForDisplayed({
            timeout: 10000
        });

        try {
            browser.switchToFrame(element);
        }
        catch (StaleElementException) {
            try {
                browser.switchToFrame(element);
            }
            catch (StaleElementException) {
            }
        }
    
};
