import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Attendre qu'un element soit present
 * @param  {String} locateur - element a ettendre
 */
export default (locateur) => {



    //Recuperation du locateur reel si alias donne

    locateur = getLocateur(locateur)


    const elem = $(locateur)
    elem.waitForExist({
        timeout: 60000
    });


};
