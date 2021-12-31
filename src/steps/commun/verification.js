import { Given,When,Then } from '@cucumber/cucumber';

import verifierUrlPage from '../../support/commun/verification/verifierUrlPage';
import verifierElementNonVisible from '../../support/commun/verification/verifierElementNonVisible';
import verifierElementVisible from '../../support/commun/verification/verifierElementVisible';
import verifierElementPresent from '../../support/commun/verification/verifierElementPresent';
import verifierElementNonPresent from '../../support/commun/verification/verifierElementNonPresent';
import verifierElementContientTexte from '../../support/commun/verification/verifierElementContientTexte';
import verifierElementContientValeur from '../../support/commun/verification/verifierElementContientValeur';
import verifierElementCoche from '../../support/commun/verification/verifierElementCoche';
import verifierElementNonCoche from '../../support/commun/verification/verifierElementNonCoche';
import verifierElementNonCliquable from '../../support/commun/verification/verifierElementNonCliquable';
import verifierElementCliquable from '../../support/commun/verification/verifierElementCliquable';
import verifierPageContientTexte from '../../support/commun/verification/verifierPageContientTexte';
import verifierCibleLien from '../../support/commun/verification/verifierCibleLien';
import verifierElementVide from '../../support/commun/verification/verifierElementVide';
import verifierElementNonVide from '../../support/commun/verification/verifierElementNonVide';
import verifierCouleurTexte from '../../support/commun/verification/verifierCouleurTexte';
import verifierElementNeContientPasTexte from '../../support/commun/verification/verifierElementNeContientPasTexte';
import verifierPageNeContientPasTexte from '../../support/commun/verification/verifierPageNeContientPasTexte';
import verifierOptionSelectionnee from '../../support/commun/verification/verifierOptionSelectionnee';
import verifierOptionDansListe from '../../support/commun/verification/verifierOptionDansListe';
import verifierTitrePage from '../../support/commun/verification/verifierTitrePage';
import verifierCouleurFond from '../../support/commun/verification/verifierCouleurFond';
import verifierSource from '../../support/commun/verification/verifierSource';
import verifierLongeurTexte from '../../support/commun/verification/verifierLongeurTexte';
import verifierCouleurBordure from '../../support/commun/verification/verifierCouleurBordure';
import verifierCouleurBordureHaute from '../../support/commun/verification/verifierCouleurBordureHaute';
import verifierElementContientClass from '../../support/commun/verification/verifierElementContientClass';
import verifierElementNeContientPasClass from '../../support/commun/verification/verifierElementNeContientPasClass';
import verifierElementContientPlaceholder from '../../support/commun/verification/verifierElementContientPlaceholder';

When(
    /^Je verifie que je suis sur la page "(.*)"$/,
    verifierUrlPage
);

When(
    /^Je verifie que l\'element "(.*)" est present$/,
    verifierElementPresent
);

When(
    /^Je verifie que l\'element "(.*)" est affiche$/,
    verifierElementVisible
);

When(
    /^Je verifie que l\'element "(.*)" n\'est pas affiche$/,
    verifierElementNonVisible
);

When(
    /^Je verifie que l\'element "(.*)" n\'est pas present$/,
    verifierElementNonPresent
);

When(
    /^Je verifie la presence du texte "(.*)"$/,
    verifierPageContientTexte
);
When(
    /^Je verifie l'absence du texte "(.*)"$/,
    verifierPageNeContientPasTexte
);

When(
    /^Je verifie que "(.*)" est vide$/,
    verifierElementVide
);

When(
    /^Je verifie que "(.*)" n'est pas vide$/,
    verifierElementNonVide
);

When(
    /^Je verifie que "(.*)" contient le texte "(.*)"$/,
    verifierElementContientTexte
);
When(
    /^Je verifie que "(.*)" ne contient pas le texte "(.*)"$/,
    verifierElementNeContientPasTexte
);

When(
    /^Je verifie que "(.*)" contient la valeur "(.*)"$/,
    verifierElementContientValeur
);

When(
    /^Je verifie que "(.*)" est coche$/,
    verifierElementCoche
);

When(
    /^Je verifie que "(.*)" n'est pas coche$/,
    verifierElementNonCoche
);

When(
    /^Je verifie que "(.*)" n'est pas cliquable$/,
    verifierElementNonCliquable
);

When(
    /^Je verifie que "(.*)" est cliquable$/,
    verifierElementCliquable
);

When(
    /^Je verifie que "(.*)" a pour cible "(.*)"$/,
    verifierCibleLien
);

When(
    /^Je verifie que le texte "(.*)" est de couleur "(.*)"$/,
    verifierCouleurTexte
);

When(
    /^Je verifie que le fond "(.*)" est de couleur "(.*)"$/,
    verifierCouleurFond
);

When(
    /^Je verifie que la bordure "(.*)" est de couleur "(.*)"$/,
    verifierCouleurBordure
);

When(
    /^Je verifie que la bordure haute "(.*)" est de couleur "(.*)"$/,
    verifierCouleurBordureHaute
);

When(
    /^Je verifie que "(.*)" est selectionne dans la liste "(.*)"$/,
    verifierOptionSelectionnee
);

When(
    /^Je verifie que la liste "(.*)" contienne les valeurs "(.*)"$/,
    verifierOptionDansListe
);

When(
    /^Je verifie que le titre de l'onglet est "(.*)"$/,
    verifierTitrePage
);

When(
    /^Je verifie que "(.*)" a comme source "(.*)"$/,
    verifierSource
);

When(
    /^Je verifie que "(.*)" contient un text de "(.*)" caracteres$/,
    verifierLongeurTexte
);

When(
    /^Je verifie que "(.*)" a comme class "(.*)"$/,
    verifierElementContientClass
);

When(
    /^Je verifie que "(.*)" n'a pas comme class "(.*)"$/,
    verifierElementNeContientPasClass
);

When(
    /^Je verifie que "(.*)" a pour placeholder "(.*)"$/,
    verifierElementContientPlaceholder
);