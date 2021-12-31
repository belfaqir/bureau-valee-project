import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
import cliquerSur from './cliquerSur';
/**
 * Saisir un texte
 * @param  {String} texteASaisir - texte a saisir dans l'element
 * @param  {String} locateur - locateur de l'element dans lequel saisir
 */
export default (texteASaisir, locateur) => {

        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)


        $(locateur).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element
        const element = $(locateur)

        try {
            //Saisie du texte dans l'element
            element.setValue("")
            element.setValue(texteASaisir)

        } catch {
            attendreSecondes(1)
            //Saisie du texte dans l'element
            element.setValue("")
            element.setValue(texteASaisir)
        }
    
};
