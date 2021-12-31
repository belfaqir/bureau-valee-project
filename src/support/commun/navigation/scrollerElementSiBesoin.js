import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from './attendreSecondes';

/**
 * Scroller jusqu'a l'element
 * @param  {String} locateur - element vers lequel scroller
 */
export default (locateur) => {

        //Recuperation du locateur reel si alias donne

        //Recuperation du locateur reel si alias donne
        locateur = getLocateur(locateur);

        //Recuperation de l'element
        const element = $(locateur);

        //*RAU - Start : 13/07/2021
        //La modification apportee à cette fonction sert dans le cas ou il y a plusieus Scroll à effectuer pour atteindre un element
        //Le code mis en commentaire ne permettait pas de realiser ce type de Scroll
        
        /*
        try {
            if (element.isDisplayed()) {
                element.scrollIntoView();
            }
        }
        catch (StaleElementException) {
            try {
                if (element.isDisplayed()) {
                    element.scrollIntoView();
                }
            }
            catch (StaleElementException) {
            }
        }
        */

        //Scroller jusqu'en haut de la page avant de commencer le scroll vers le bas (Position initiale) 
        browser.executeScript("window.scrollTo(0, -document.body.scrollHeight)");
        attendreSecondes(3);

        //Scroller vers le bas de la page jusqu'à ce que l'element recherché soit affiche sur la page
        let n = 0;
        while(n <50) {
            browser.executeScript("window.scrollBy(0,500)");
            attendreSecondes(3);

            if(element.isDisplayed() == true) {
                break;
            } else {
                n++;
            }
        }
        //*RAU - End : 13/07/2021
    
};
