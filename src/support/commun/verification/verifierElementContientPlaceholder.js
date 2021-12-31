import getLocateur from '../../mapping/fonctions/locateurs'
/**
 * Verifie qu'un element possede une classe css
 * @param  {String} element - element a verifier
 * @param  {String} placeholder - placeholder attendue
 */
export default (locateur, placeholder) => {

        var locateur2 = getLocateur(locateur)
        $(locateur2).waitForExist({
            timeout: 10000
        });
        //Recuperation de l'element
        const element = $(locateur2)
        var placeholder = element.getAttribute("placeholder")
        placeholder = placeholder.split(" ")
        if (!placeholder.includes(placeholder)) {
            throw new Error("L'element " + locateur + " n'a pas de placeholder " + placeholder)
        }
    
};