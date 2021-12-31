import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Cocher un element
 * @param  {String} locateur - locateur de l'element a cocher
 */
export default (locateur, locateurSelectType) => {


        //Recuperation du locateur reel si alias donne
        var locateurSelect = "//*[contains(@class,'"+locateurSelectType+"-selected')]"

        var elementSelect = $(locateurSelect)

        if (!elementSelect.isDisplayed()){

        var locateur2 = getLocateur(locateur)

        $(locateur2).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element
        const element = $(locateur2)

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

            var runInBrowser = function (argument) {
                argument.click();
            };
            browser.execute(runInBrowser, element);
        }

    
}
};
