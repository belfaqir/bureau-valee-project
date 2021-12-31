import getLocateur from '../../mapping/fonctions/locateurs';
import getUrl from '../../mapping/fonctions/url'

/**
 * verifier la cible d'un lien
 * @param  {String} locateur - element a verifier
 * @param  {String} url - url a verifier
 */
export default (locateur, url) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        //Recuperation de l'url reel
        url = getUrl(url)

        const element = $(locateur)

        expect(element).toHaveHrefContaining(url)
    

};
