import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * Scroller jusqu'a l'element
 * @param  {String} locateur - element vers lequel scroller
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

            element.scrollIntoView();

        }
        catch (StaleElementException) {
            try {

                element.scrollIntoView();

            }
            catch (StaleElementException) {
            }
        }
    

};
