import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element n'est pas present dans le DOM
 * @param  {String} locateur - element a verifier
 */
export default (locateur) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)

        expect(element).not.toBePresent()
    
};
