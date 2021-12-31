import getLocateur from '../../mapping/fonctions/locateurs'
import cliquerJsSur from './cliquerJsSur';

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element sur lequel cliquer
 */
export default (locateur) => {

        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        browser.pause(2500)

        //Recuperation de l'element
        const element = $(locateur)

        try {
            //Si l'element est visible uniquement
            if (element.isExisting()) {
               // Clic sur l'element
               cliquerJsSur(element)
            }
        } catch (StaleElementException) {
            try {
                //Si l'element est visible uniquement
                if (element.isExisting()) {
                    // Clic sur l'element
                    cliquerJsSur(element)
                }
            } catch (StaleElementException) {
            }
        }
    
};
