/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MonCompteImport } from './routes/mon-compte'
import { Route as DeconnexionImport } from './routes/deconnexion'
import { Route as ConnexionImport } from './routes/connexion'
import { Route as AssistanceImport } from './routes/assistance'
import { Route as AccueilImport } from './routes/accueil'
import { Route as AccueilIndexImport } from './routes/accueil/index'
import { Route as AccueilUtilisationReponseImport } from './routes/accueil/utilisation-reponse'
import { Route as AccueilIntroductionImport } from './routes/accueil/introduction'
import { Route as AccueilCadreJuridiqueImport } from './routes/accueil/cadre-juridique'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const MonCompteRoute = MonCompteImport.update({
  path: '/mon-compte',
  getParentRoute: () => rootRoute,
} as any)

const DeconnexionRoute = DeconnexionImport.update({
  path: '/deconnexion',
  getParentRoute: () => rootRoute,
} as any)

const ConnexionRoute = ConnexionImport.update({
  path: '/connexion',
  getParentRoute: () => rootRoute,
} as any)

const AssistanceRoute = AssistanceImport.update({
  path: '/assistance',
  getParentRoute: () => rootRoute,
} as any)

const AccueilRoute = AccueilImport.update({
  path: '/accueil',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AccueilIndexRoute = AccueilIndexImport.update({
  path: '/',
  getParentRoute: () => AccueilRoute,
} as any)

const AccueilUtilisationReponseRoute = AccueilUtilisationReponseImport.update({
  path: '/utilisation-reponse',
  getParentRoute: () => AccueilRoute,
} as any)

const AccueilIntroductionRoute = AccueilIntroductionImport.update({
  path: '/introduction',
  getParentRoute: () => AccueilRoute,
} as any)

const AccueilCadreJuridiqueRoute = AccueilCadreJuridiqueImport.update({
  path: '/cadre-juridique',
  getParentRoute: () => AccueilRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/accueil': {
      id: '/accueil'
      path: '/accueil'
      fullPath: '/accueil'
      preLoaderRoute: typeof AccueilImport
      parentRoute: typeof rootRoute
    }
    '/assistance': {
      id: '/assistance'
      path: '/assistance'
      fullPath: '/assistance'
      preLoaderRoute: typeof AssistanceImport
      parentRoute: typeof rootRoute
    }
    '/connexion': {
      id: '/connexion'
      path: '/connexion'
      fullPath: '/connexion'
      preLoaderRoute: typeof ConnexionImport
      parentRoute: typeof rootRoute
    }
    '/deconnexion': {
      id: '/deconnexion'
      path: '/deconnexion'
      fullPath: '/deconnexion'
      preLoaderRoute: typeof DeconnexionImport
      parentRoute: typeof rootRoute
    }
    '/mon-compte': {
      id: '/mon-compte'
      path: '/mon-compte'
      fullPath: '/mon-compte'
      preLoaderRoute: typeof MonCompteImport
      parentRoute: typeof rootRoute
    }
    '/accueil/cadre-juridique': {
      id: '/accueil/cadre-juridique'
      path: '/cadre-juridique'
      fullPath: '/accueil/cadre-juridique'
      preLoaderRoute: typeof AccueilCadreJuridiqueImport
      parentRoute: typeof AccueilImport
    }
    '/accueil/introduction': {
      id: '/accueil/introduction'
      path: '/introduction'
      fullPath: '/accueil/introduction'
      preLoaderRoute: typeof AccueilIntroductionImport
      parentRoute: typeof AccueilImport
    }
    '/accueil/utilisation-reponse': {
      id: '/accueil/utilisation-reponse'
      path: '/utilisation-reponse'
      fullPath: '/accueil/utilisation-reponse'
      preLoaderRoute: typeof AccueilUtilisationReponseImport
      parentRoute: typeof AccueilImport
    }
    '/accueil/': {
      id: '/accueil/'
      path: '/'
      fullPath: '/accueil/'
      preLoaderRoute: typeof AccueilIndexImport
      parentRoute: typeof AccueilImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AccueilRoute: AccueilRoute.addChildren({
    AccueilCadreJuridiqueRoute,
    AccueilIntroductionRoute,
    AccueilUtilisationReponseRoute,
    AccueilIndexRoute,
  }),
  AssistanceRoute,
  ConnexionRoute,
  DeconnexionRoute,
  MonCompteRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/accueil",
        "/assistance",
        "/connexion",
        "/deconnexion",
        "/mon-compte"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/accueil": {
      "filePath": "accueil.tsx",
      "children": [
        "/accueil/cadre-juridique",
        "/accueil/introduction",
        "/accueil/utilisation-reponse",
        "/accueil/"
      ]
    },
    "/assistance": {
      "filePath": "assistance.tsx"
    },
    "/connexion": {
      "filePath": "connexion.tsx"
    },
    "/deconnexion": {
      "filePath": "deconnexion.tsx"
    },
    "/mon-compte": {
      "filePath": "mon-compte.tsx"
    },
    "/accueil/cadre-juridique": {
      "filePath": "accueil/cadre-juridique.tsx",
      "parent": "/accueil"
    },
    "/accueil/introduction": {
      "filePath": "accueil/introduction.tsx",
      "parent": "/accueil"
    },
    "/accueil/utilisation-reponse": {
      "filePath": "accueil/utilisation-reponse.tsx",
      "parent": "/accueil"
    },
    "/accueil/": {
      "filePath": "accueil/index.tsx",
      "parent": "/accueil"
    }
  }
}
ROUTE_MANIFEST_END */
