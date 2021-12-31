import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element contient la valeur attendue
 * @param  {String} locateur - element a verifier
 * @param  {String} valeur - valeur a verifier
 */
export default (locateur, valeur) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)

        const texteElement = element.getValue()

        if(!texteElement.toLowerCase().includes(valeur.toLowerCase())){
            throw new Error("ERREUR - Le texte "+texteElement+" ne contient pas "+valeur)
        }
    
};
