import getLocateur from '../../mapping/fonctions/locateurs'
import attendreSecondes from '../navigation/attendreSecondes';
import perdreFocusElement from '../navigation/perdreFocusElement'
/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   selector Element selector
 */
export default (locateur) => {
        //Recuperation du locateur reel
        locateur = getLocateur(locateur)

        $(locateur).waitForExist({
            timeout: 10000
        });

        //Recuperation de l'element
        const element = $(locateur)

        element.clearValue();

        attendreSecondes(1)
        perdreFocusElement(element)
        attendreSecondes(1)
    
};
