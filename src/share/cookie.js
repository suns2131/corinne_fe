/* eslint-disable import/prefer-default-export */
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function getCookie({ name }) {
  return cookies.get(name);
}

export function setCookie({ name, value }) {
  return cookies.set(name, value, {
    path: '/',
  });
}

export function removeCookie({ name }) {
  return cookies.remove(name);
}
