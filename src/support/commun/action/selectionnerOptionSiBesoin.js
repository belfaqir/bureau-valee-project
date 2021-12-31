import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
/**
 * Selectionne une option dans une liste select
 * @param  {String} option - option a selectionner
 * @param  {String} locateur - liste contenant l'option
 */
export default (option, locateur) => {

        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)

        //Recuperation de l'element
        const element = $(locateur)

        try {
            //Si l'element est visible uniquement
            if (element.isDisplayed()) {
                //Selection de l'option en fonction de sa valeur
                element.selectByAttribute('value', option)
            }

        } catch {
            attendreSecondes(1)
            //Si l'element est visible uniquement
            if (element.isDisplayed()) {
                //Selection de l'option en fonction de sa valeur
                element.selectByAttribute('value', option)
            }

        }
    
};
