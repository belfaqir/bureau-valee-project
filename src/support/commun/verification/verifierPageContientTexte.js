import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que la page contient le texte attendu
 * @param  {String} texte - texte a verifier
 */
export default (texte) => {

        const element = $('body')

        expect(element).toHaveTextContaining(texte)
    

};
