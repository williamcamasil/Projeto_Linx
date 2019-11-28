export const usuarioAutenticado = () => localStorage.getItem('usuario-xepa') !== null

export const parseJwt = () => {
    var base64 = localStorage.getItem('usuario-xepa').split('.')[1]
    return JSON.parse(window.atob(base64))
}