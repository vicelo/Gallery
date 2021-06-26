========================================================================================================================
== Documentation intégrateur - Organisation Atomic Design
========================================================================================================================

L’ensemble des éléments intégrés est fait en atomic design avec pour nomenclature de nommage et d'arborescence
de la page le Block Element Modifier (BEM)

Les pages sont construites en mobile first: contruction de la page en priorité pour un écran d'une résolution
de 375px de largeur.


------------------------------------------------------------------------------------------------------------------------
1)	Atomic design :
------------------------------------------------------------------------------------------------------------------------

Rappels:

•   Un atome ne peux pas contenir/appeler un autre atome, créer une molécule
•   Un atome doit avoir une structure "simple"
•   Une molécule peut contenir un ou plusieurs atomes
•   Une molécule ne peux pas contenir/appeler une autre molécule, créer un organisme
•   Un organisme peut contenir des atomes et des molécules

________________________________________________________________________________________________________________________

Les divers éléments constituants l'atomic design (atome, molécules, organismes, templates, pages) , HTML ou CSS sont
régroupés et classés par type d'entité, dans les répertoires suivants :

HTML:
•	/partials/_atoms
•	/partials/_molecules
•	/partials/_organisms
•	/partials/_templates

SCSS:
•	assets/scss/01_atoms
•	assets/scss/02_molecules
•	assets/scss/03_organisms
•	assets/scss/04_templates
•	assets/scss/06_pages

NB : Il n’y a pas de dossier html pour les pages, elles sont directement insérées à la racine du projet.



•   Pour intégrer un atome / une molécule / un organisme à une page ou un organisme, on utilise directement dans la page:
    @@include(‘/html/_molecules/m-exemple’,{})

•   L’ensemble du code html et des styles scss spécifique à un élément (atome , molécule, organisme etc…) sont écrit dans
    leurs fichiers SCSS dédiés.

•   Le code scss d’une page ou d’un template ne sert qu’à organiser et à positionner les éléments entre eux
    (positionnement, grille bootstrap).

•   Si un élément de style d’un composant atomique est spécifique à une page, on peut alors surcharger le style scss
    dans le fichier SCSS de la page.


------------------------------------------------------------------------------------------------------------------------
2)	Règle de nommage des fichiers html-css :
------------------------------------------------------------------------------------------------------------------------
Les fichiers HTML et scss des éléments d'atomic design (atomes, molécules, organismes, templates) sont préfixés par :

HTML:
"a-" pour les atomes
"m-" pour les molécules
"o-" pour les organismes
"t-" pour les templates

SCSS:
"_a-" pour les atomes
"_m-" pour les molécules
"_o-" pour les organismes
"_t-" pour les templates

•   Les noms des fichiers SCSS s'écrivent en camel case.
•   Le nom d'un fichier SCSS est calqué sur le nom du fichiers html correspondant.
•   Le responsive d'un élément atomic (atome, molécule, organisme, pages etc.) est fait dans un fichier SCSS séparé
    du fichier de base dédié au mobile (375px).
•   Seuls les fichiers responsive et animate contiennent un tiret '-'.

--- Exemple: pour l'organisme o-form-space-creation:  _o-formSpaceCreation.scss
                                                      _o-formSpaceCreation-responsive.scss

------------------------------------------------------------------------------------------------------------------------
3)	Règle de nommage des classes SCSS
------------------------------------------------------------------------------------------------------------------------
Les noms de classe scss des éléments d'atomic design (atomes, molécules, organismes, templates) sont préfixés de :

"a-" pour les atomes
"m-" pour les molécules
"o-" pour les organismes
"t-" pour les templates

ET:

•   Ils sont toujours écrits en camel case
•   Hormis le préfixe, les noms de classes ne contiennent jamais de tiret, le tiret étant réservé aux classes modifieurs

-- Exemple: a-titleH1, m-formLabelField, o-formSpaceCreation

NB: Le nom d'une classe est calqué sur l'élément html correspondant.

--- Exemple: pour l'élément html a-range-slider.html est associé la classe .a-rangeSlider.

------------------------------------------------------------------------------------------------------------------------
4)	Block Element Modifier (BEM)
------------------------------------------------------------------------------------------------------------------------

Le nommage BEM des classes permet de créer une arborescence dans le fichier html et de faciliter l'écriture du code
SCSS.

Ma nomenclature de nommage customisée :
•	block-name
•	block-name -modifier
•	block-name__element-name
•	block-name__element-name -modifier

exemple:
o-designSystem-section
	o-designSystem-section__titleH1
	o-designSystem-section__content
		o-designSystem-section__content__button
		o-designSystem-section__content__paragraph


------------------------------------------------------------------------------------------------------------------------
5)	Syntaxe des @@includes
------------------------------------------------------------------------------------------------------------------------

Pour intégrer un atome, une molécule ou un organisme dans une page (ou bien pour intégrer un atome dans une molécule ou
un atome et une molécule dans un organisme), on utilise les @@includes.

Sauf cas exeptionnel, on n'écrit jamais directement le code html dans la page (sauf pour les balises structurant le code:
Wrapper, grille boostrap etc.)

Les @@includes permettent de définir le chemin pour récupérer l'atome, la molécule ou l'organisme. Ils permettent aussi
de définir certains paramètres (ex: nom de classe) préalablement variabilisés dans les atomes, molécules ou organismes.
Pour variabiliser un nom de classe, il suffit d'écrire class="@@-a-nomDeClasse" à la place du nom de la classe dans
l'attribut de l'élément atomic (Son nom de classe sera défini ultérieurement dans les paramètres de l'include).

NB: La plupart des noms de classes, de classes -modifier sont variabilisés afin de permettre une plus grande modularité
des éléments atomics

--- Exemple: @@include HTML avec paramètres:

@@include('partials/_atoms/a-title-h1.html', {
     "-a-titleH1Libelle": "titre de la page",
     "-a-titleH1Class": "a-titleH1",
     "-a-titleH1ClassModifier": "-designSystem",
})

Pour cet exemple, il est envisagable de changer le "-a-titleH1Class": "a-titleH1" par "-a-titleH1Class": "a-titleH2"
afin d'intégrer un titre de strucutre <h1> avec le style d'un titre <h2>

--- Exemple: @@include HTML simple, sans paramètres :

@@include('html/_organisms/o-footers/o-footer-main.html')

__________________

Points à respecter :
__________________

•   Première accolade sur la même ligne que @@include('...')
•   Tabulation devant les noms de variables
•   Retour à la ligne après chaque paire clé/valeur
•   Les noms de variables sont toujours en camel case
•   Retour à la ligne avant accolade et parenthèse de fermeture
•   Pas de ";" à la fin

Pour une meilleure lisibilité, les noms de variables dans les @@include commencent toujours par un tiret "-' :

Si atome : "-a-nomVariable
Si molécule : "-m-nomVariable"
Si organisme : "-o-nomVariable"
Si template : "-t-nomVariable"

Les variables de type booléen ne contiennent pas de tiret '-' et s'écrivent :
"hasTitle": true,
"hasParagraphe": false


------------------------------------------------------------------------------------------------------------------------
6)	Breakpoints
------------------------------------------------------------------------------------------------------------------------

Les medias queries (breakpoints) sont écrites dans des fichiers dédiés et importés  (@import ...) depuis le fichier SCSS
d'un atome, molécule, organisme, template ou page.

Le nom du fichier contenant les breakpoints reprend le nom de l'entité atomic design, suivi de "-responsive"

Exemple pour le fichier scss de la page index _p-index.scss, le fichier des breakpoints sera nommé  _p-index-responsive.scss

@include mediabreakpointup():

- xs: 375px
- sm: 576px
- md: 768px
- lg: 1024px
- xl: 1440px
