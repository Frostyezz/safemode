export enum ROUTES {
  ROOT = '/', 
  NOT_FOUND = '/404',
  API = '/api',  API_GRAPHQL = '/api/graphql',  FAMILY_ROLE = '/family-role',  REGISTER = '/register',  REGISTER_PARENT = '/register/parent'
}export type TArgs =| [ROUTES.ROOT]| [ROUTES.API]| [ROUTES.API_GRAPHQL]| [ROUTES.FAMILY_ROLE]| [ROUTES.REGISTER]| [ROUTES.REGISTER_PARENT];