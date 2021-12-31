import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * verifier que la page ne contient pas le texte attendu
 * @param  {String} texte - texte a verifier
 */
export default (texte) => {

        const element = $('body')

        expect(element).not.toHaveTextContaining(texte)
    

};
