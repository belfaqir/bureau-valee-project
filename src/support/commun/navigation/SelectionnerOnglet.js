/**
 * verifier l'url de la page
 * @param  {String} urlAttendue - URL a verifier
 */
export default (urlAttendue) => {

    //Sélectioner parmi les onglets ouverts celui avec URL voulu
    browser.switchWindow(urlAttendue);

    // Recuperation de l'url courante
    var urlCourante = browser.getUrl();

     
    if (urlAttendue != urlCourante) {
        throw new Error("ERREUR - L'onglet actuel (" + urlCourante + ") ne correspond pas à l'onglet attendu (" + urlAttendue + ")");
    }
};
