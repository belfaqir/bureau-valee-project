/**
 * Perdre le focus sur un element
 */
export default (element) => {
    if (browser.getCookies(['paiement']).length == 0) {
        $('body').keys(['Tab'])
    }

};
