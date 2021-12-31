import getLocateur from '../../mapping/fonctions/locateurs'
import scrollerElement from '../navigation/scrollerElement';
import attendreSecondes from '../navigation/attendreSecondes';
import actualiserPage from '../navigation/actualiserPage';

/**
 * Cliquer sur un locateur
 * @param  {String} locateur - locateur de l'element a cocher
 */
export default (locateur) => {


        //Recuperation du locateur reel si alias donne

        var locateur2 = getLocateur(locateur)
        var element = $(locateur2)

        /* if (!element.isExisting()) {
        throw Error('l element recherché n existe pas, vérifier le locateur: '+ locateur)
            } */

        $(locateur2).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element

        attendreSecondes(1)

        element.click()

    

};