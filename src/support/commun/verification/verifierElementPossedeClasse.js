import getLocateur from '../../mapping/fonctions/locateurs'

/**
 * Verifie qu'un element possede une classe css
 * @param  {String} element - element a verifier
 * @param  {String} classe - classe attendue
 */
export default (locateur,classe) => {

    var locateur2 = getLocateur(locateur)

    $(locateur2).waitForExist({
        timeout: 10000
    });

    //Recuperation de l'element
    const element = $(locateur2)

    var classes = element.getAttribute("class")

    classes = classes.split(" ")

    if(!classes.includes(classe)){
        throw new Error("L'element "+ locateur + " n'a pas la classe " + classe)
    }
};
