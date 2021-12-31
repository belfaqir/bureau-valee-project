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


        $(locateur).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element
        const element = $(locateur)

        try {
            //Selection de l'option en fonction de sa valeur
            element.selectByAttribute('value', option)
            attendreSecondes(0.25)

        } catch {
            attendreSecondes(1)
            try {
                //Selection de l'option en fonction du texte
                element.selectByVisibleText(option)
                attendreSecondes(0.25)

            } catch {
                try {
                    //Selection de l'option en fonction du texte
                    element.selectByVisibleText(option)
                    attendreSecondes(0.25)

                } catch {
                    attendreSecondes(1)
                    //Selection de l'option en fonction de sa valeur
                    element.selectByAttribute('value', option)
                    attendreSecondes(0.25)

                }

            }

        }
    
};
