import { Given,When,Then } from '@cucumber/cucumber';

import accederPage from '../../support/commun/navigation/accederPage'
import attendreSecondes from '../../support/commun/navigation/attendreSecondes';
import attendreElementVisible from '../../support/commun/navigation/attendreElementVisible';
import attendreElementNonVisible from '../../support/commun/navigation/attendreElementNonVisible';
import focusIframe from '../../support/commun/navigation/focusIframe';
import perdreFocus from '../../support/commun/navigation/perdreFocus';
import actualiserPage from '../../support/commun/navigation/actualiserPage'
import perdreFocusElement from '../../support/commun/navigation/perdreFocusElement';
import scrollerElement from '../../support/commun/navigation/scrollerElement';
import attendreElementPresent from '../../support/commun/navigation/attendreElementPresent';
import attendreElementNonPresent from '../../support/commun/navigation/attendreElementNonPresent';
import scrollerElementSiBesoin from '../../support/commun/navigation/scrollerElementSiBesoin';
import scroller from '../../support/commun/navigation/scroller';

Given(
    /^J'accede a la page "(.*)"$/,
    accederPage
);


Given(
    /^J'attends "(.*)" secondes$/,
    attendreSecondes
);

Given(
    /^J'attends que "(.*)" soit visible$/,
    attendreElementVisible
);

Given(
    /^J'attends que "(.*)" soit present$/,
    attendreElementPresent
);


Given(
    /^J'attends que "(.*)" ne soit plus visible$/,
    attendreElementNonVisible
);

Given(
    /^J'attends que "(.*)" ne soit plus affiche$/,
    attendreElementNonPresent
);

When(
    /^Je mets le focus sur l\'iframe "(.*)"$/,
    focusIframe
);

When(
    /^Je perds le focus$/,
    perdreFocus
);

When(
    /^J'actualise la page$/,
    actualiserPage
);

When(
    /^Je perds le focus sur "(.*)"$/,
    perdreFocusElement
);

When(
    /^Je scroll jusqu'a l'element "(.*)"$/,
    scrollerElement
);

When(
    /^Je scroll jusqu'a l'element "(.*)" si besoin$/,
    scrollerElementSiBesoin
);

When(
    /^Je scroll jusqu'a l'element "(.*)" pour defiler jusqu'a "(.*)" et "(.*)"$/,
    scroller
)
