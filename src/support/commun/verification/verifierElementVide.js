import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que element est vide
 * @param  {String} locateur - element a verifier
 */
export default (locateur) => {

        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        const element = $(locateur)
        const texte = element.getText()
        const valeur = element.getValue()

        if (texte != '' || valeur != '') {
            throw new Error("Erreur - L'element " + locateur + " n'est pas vide")
        }
    

};
