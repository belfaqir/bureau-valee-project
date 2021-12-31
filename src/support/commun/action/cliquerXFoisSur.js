import cliquerSurSiBesoin from './cliquerSurSiBesoin';
import getLocateur from '../../mapping/fonctions/locateurs'
import cliquerSur from './cliquerSur';

/**
 * Cliquer sur un locateur
 * @param  {String} nombreClics - nombre de clics a effectuer
 * @param  {String} locateur - locateur de l'element a cocher
 */
export default (nombreClics, locateur) => {

    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)

    $(locateur).waitForExist({
        timeout: 10000
    });

    //Recuperation de l'element
    const element = $(locateur)

    for (var i = 0; i < nombreClics; i++) {

        cliquerSur(locateur)

    }

};
