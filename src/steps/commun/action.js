import { Given,When,Then } from '@cucumber/cucumber';

import saisirTexte from '../../support/commun/action/saisirTexte';
import saisirTexteSiBesoin from '../../support/commun/action/saisirTexteSiBesoin';
import cliquerSur from '../../support/commun/action/cliquerSur';
import ajoutTexte from '../../support/commun/action/ajoutTexte';
import cliquerSurSiBesoin from '../../support/commun/action/cliquerSurSiBesoin';
import viderChamp from '../../support/commun/action/viderChamp';
import taperTouche from '../../support/commun/action/taperTouche';
import selectionnerOption from '../../support/commun/action/selectionnerOption';
import selectionnerOptionSiBesoin from '../../support/commun/action/selectionnerOptionSiBesoin';
import cliquerXFoisSur from '../../support/commun/action/cliquerXFoisSur';
import uploaderFichier from '../../support/commun/action/uploaderFichier';
import saisirTexteLentement from '../../support/commun/action/saisirTexteLentement';
import cliquerXFoisSurSiBesoin from '../../support/commun/action/cliquerXFoisSurSiBesoin';
import cocherSiBesoin from '../../support/commun/action/cocherSiBesoin';
import ajoutTexteSiExiste from '../../support/commun/action/ajoutTexteSiExiste';
import cliquerSurSiExiste from '../../support/commun/action/cliquerSurSiExiste';


When(
    /^Je saisis "(.*)" dans le champ "(.*)"$/,
    saisirTexte
);

When(
    /^Je saisis lentement "(.*)" dans le champ "(.*)"$/,
    saisirTexteLentement
);

When(
    /^J'ajoute le texte "(.*)" dans le champ "(.*)"$/,
    ajoutTexte
);
When(
    /^J'ajoute le texte "(.*)" dans le champ "(.*)" si existe$/,
    ajoutTexteSiExiste
);

When(
    /^Je saisis "(.*)" dans le champ "(.*)" si besoin$/,
    
    saisirTexteSiBesoin
);

When(
    /^Je clique sur "(.*)"$/,
    cliquerSur
);
When(
    /^Je clique sur "(.*)" si existe$/,
   cliquerSurSiExiste
);

When(
    /^Je clique sur "(.*)" si besoin$/,
    cliquerSurSiBesoin
);

When(
    /^Je clique "(.*)" fois sur "(.*)"$/,
    cliquerXFoisSur
);

When(
    /^Je clique "(.*)" fois sur "(.*)" si besoin$/,
    cliquerXFoisSurSiBesoin
);

When(
    /^Je coche "(.*)"$/,
    cliquerSur
);

When(
    /^Je coche "(.*)" si "(.*)" non coché$/,
    cocherSiBesoin
);
When(
    /^Je coche "(.*)" si besoin$/,
    cliquerSurSiBesoin
);

When(
    /^Je decoche "(.*)"$/,
    cliquerSur
);

When(
    /^Je vide le champ "(.*)"$/,
    viderChamp
);

When(
    /^Je tape sur la touche du clavier "(.*)"$/,
    taperTouche
);

When(
    /^Je selectionne l'option "(.*)" dans la liste "(.*)"$/,
    selectionnerOption
);

When(
    /^Je selectionne l'option "(.*)" dans la liste "(.*)" si besoin$/,
    selectionnerOptionSiBesoin
);

When(
    /^J'upload le fichier "(.*)" dans le champ "(.*)"$/,
    uploaderFichier
);