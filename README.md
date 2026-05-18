# sveltekit-starter

This is a [SvelteKit](https://kit.svelte.dev/) project.

## Structure de Fichiers

Le projet est maintenant structuré en monorepo en utilisant `pnpm-workspace.yaml`. Voici la nouvelle structure de fichiers :

- `packages/` : Contient tous les paquets du projet.
  - `<nom-du-paquet>/` : Chaque paquet a sa propre structure de projet SvelteKit.
    - `src/`
      - `lib/`
      - `routes/`
    - `package.json`
    - `...`
- `pnpm-workspace.yaml` : Fichier de configuration pour l'espace de travail pnpm.

## Getting Started

1.  **Installer les dépendances :**
    ```bash
    pnpm install
    ```

2.  **Démarrer le serveur de développement :**
    ```bash
    pnpm dev
    ```

3.  **Compiler pour la production :**
    ```bash
    pnpm build
    ```

## Scripts

-   `dev`: Démarre le serveur de développement.
-   `build`: Compile l'application pour la production.
-   `preview`: Prévisualise la version de production.
-   `check`: Exécute Svelte check.
-   `lint`: Analyse le code.
-   `format`: Formate le code.
-   `test`: Exécute les tests.
