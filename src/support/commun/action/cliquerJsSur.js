import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element a cocher
 */
export default (locateur) => {


        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        $(locateur).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element
        const element = $(locateur)
        try {
            //Coche en JS
            var runInBrowser = function (argument) {
                argument.click();
            };
            browser.execute(runInBrowser, element);
        }

        catch (StaleElementException) {

            try {
                //Coche en JS
                var runInBrowser = function (argument) {
                    argument.click();
                };
                browser.execute(runInBrowser, element);
            }

            catch (StaleElementException) {
                try {
                    //Coche en JS
                    var runInBrowser = function (argument) {
                        argument.click();
                    };
                    browser.execute(runInBrowser, element);
                }

                catch (StaleElementException) {
                    //Coche en JS
                    var runInBrowser = function (argument) {
                        argument.click();
                    };
                    browser.execute(runInBrowser, element);
                }
            }

        }
    

};