/**
 * Appuyer sur une touche du clavier
 * @param  {String} touche La touche a taper
 */
export default (touche) => {
        browser.keys(touche);

};
