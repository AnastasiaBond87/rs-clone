/* eslint-disable prefer-destructuring */
const API_BASE_URL = process.env.API_BASE_URL;
const WS_BASE_URL = process.env.WS_BASE_URL;

const KEY_LOCAL_STORAGE = 'rs-clone-krevetka87-altsep-metalknock';

const enum ApiPath {
  posts = '/posts',
  users = '/users',
  user = '/user',
  comments = '/comments',
  auth = '/posts-auth',
  refresh = '/refresh',
  login = '/login',
  logout = '/logout',
  registration = '/registration',
}

const enum RoutePath {
  registration = '/registration',
  messages = '/messages',
  friends = '/friends',
  settings = '/settings',
}

const enum ReducerNames {
  inputs = 'inputs',
  leftSideBar = 'leftSideBar',
  users = 'users',
  posts = 'posts',
  comments = 'comments',
  theme = 'theme',
  language = 'language',
  auth = 'auth',
}

const enum Locales {
  en = 'en-EN',
  ru = 'ru-RU',
  cn = 'zh-CN',
}

const enum VariantsMoreMenu {
  default = 'default',
  withoutEdit = 'withoutEdit',
}

const enum LSKeys {
  theme = 'theme',
  token = 'token',
  path = 'path',
}

const locales: { [key: string]: string } = {
  en: 'MM/DD/YYYY',
  ru: 'DD.MM.YYYY',
  es: 'DD/MM/YYYY',
};

const themes = ['light', 'dark'];

export {
  WS_BASE_URL,
  API_BASE_URL,
  KEY_LOCAL_STORAGE,
  ApiPath,
  ReducerNames,
  Locales,
  VariantsMoreMenu,
  locales,
  themes,
  LSKeys,
  RoutePath,
};
