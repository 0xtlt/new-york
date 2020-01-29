# 🚀 New York GatsbyJs Demo

Ce template utilise :
* PrismicIo pour le back office 📕
* GatsbyJs pour le code 👨‍💻

Un compte chez Prismic.io est obligatoire pour le fonctionnement de ce template.

## Installation


1.  **Depuis le terminal.**

    Utiliser la console de Gatsby pour créer un nouveau site en spécifiant un template.

    ```shell
    gatsby new mon-gatsby https://github.com/ThomasT404/new-york
    ```
    
2.  **Les prérequis :**

    À la racine du dossier, il vous faudra créer un fichier `.env.development` qui contiendra les informations de connexion à votre projet prismic.
    
    Les données devront être disposées ainsi :
    ```shell
    PRISMIC_REPO=new-york
    PRISMIC_TOKEN=
    ```
    
    _Note: Le token est optionnel, il n'est utile que si votre repo est protégé par un token, si ce n'est pas le cas, laissez le vide_

    Lorsque vous aurez créé votre repository sur Prismic, dans l'onglet `Custom Types` > `Create new`,
    selectionner `Repeatable Type` et nommer ce type : `page`
    
    Une fois dans l'édition de ce type, dans le panel de droite, aller dans l'onglet `JSON editor` > y coller le contenu du fichier `src/schemas/page.json`

3.  **Créer votre première page.**

    à vous de découvrir le merveilleux outil qu'est Prismic en créant votre première page
    
4.  **Développer.**

    ```shell
    cd mon-gatsby/
    gatsby develop
    ```
   
5.  **Pour visualiser le site :**

    Votre site sera accessible ici : `http://localhost:8000`!

    _Note: Vous aurez aussi un lien pour accéder à un outil visuel pour visualiser les données à disposition de Gatsby : _`http://localhost:8000/___graphql`__
    
### Bonus
Vous pourrez visualiser votre site sur d'autres appareils en passant par votre réseau local avec la commande `npm run start-wifi`, à vous de connaître votre ip locale maintenant ;)