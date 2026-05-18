# sveltekit-starter

This is a [SvelteKit](https://kit.svelte.dev/) project.

## Structure de Fichiers

Voici la nouvelle structure de fichiers :

```
mon-projet/
├── .env.example
├── .gitignore
├── node_modules/
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── src/
│   ├── lib/
│   │   ├── auth/
│   │   ├── components/
│   │   │   └── ui/
│   │   ├── i18n/
│   │   ├── server/
│   │   │   └── supabase/
│   │   ├── stores/
│   │   ├── utils/
│   │   └── validators/
│   └── routes/
│       ├── (auth)/
│       └── (dashboard)/
├── svelte.config.js
├── tailwind.config.js
├── tests/
├── tsconfig.json
└── vite.config.ts
```

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
