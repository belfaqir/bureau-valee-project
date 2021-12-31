import getLocateur from '../../mapping/fonctions/locateurs';
import cliquerSur from './cliquerSur';

/**
 * Cliquer sur un locateur x fois si besoin
 * @param  {String} nombreClics - nombre de clics a effectuer
 * @param  {String} locateur    - locateur de l'element sur lequel cliquer
 */
export default (nombreClics, locateur) => {


        //Recuperation du locateur reel si alias donne
        locateur = getLocateur(locateur);

        //Recuperation de l'element
        browser.pause(1500);
        var element = $(locateur);

        try {
            //Tant que l'element est visible et on a pas atteint encore le nombre de clic demandés, on continue à cliquer 
            let i = 0;
            let intNombreClics = parseInt(nombreClics);
            while (element.isDisplayed() && i < intNombreClics) {
                //Cliquer sur l'element
                cliquerSur(locateur);
                browser.pause(1500);
                //Recuperer l'element
                element = $(locateur);
                //Incrementer "i"
                i++;    
            }
        } catch (StaleElementException) {
            try {
                //Tant que l'element est visible et on a pas atteint encore le nombre de clic demandés, on continue à cliquer 
                let i = 0;
                while (element.isDisplayed() && i < intNombreClics) {
                //Cliquer sur l'element
                cliquerSur(locateur);
                browser.pause(1500);
                //Recuperer l'element
                element = $(locateur);
                //Incrementer "i"
                i++;   
            }
            } catch (StaleElementException) {
            }
        }
    
}
