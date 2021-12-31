import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Attendre qu'un element ne soit plus visible
 * @param  {String} locateur - element a attendre
 */
export default (locateur) => {

        //Recuperation du locateur reel si alias donne

        locateur = getLocateur(locateur)


        const elem = $(locateur)
        elem.waitForDisplayed({
            reverse: true,
            timeout: 60000
        });
    
};
