/* eslint-disable import/prefer-default-export */
import { cookies } from 'react-cookie'

export function getCookie({ name }) {
    return cookies.get(name)
}

export function setCookie({ name, value, expires }) {
    const options = {

    }
    return cookies.set(name, value)
}

export function removeCookie({ name }) {
    return cookies.remove(name);
}

