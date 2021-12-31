import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Attendre qu'un element soit visible
 * @param  {String} locateur - element a ettendre
 */
export default (locateur) => {

        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)


        const elem = $(locateur)
        elem.waitForDisplayed({
            timeout: 60000
        });
    
};
