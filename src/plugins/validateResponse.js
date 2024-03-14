export default {
    // called by Vue.use(FirstPlugin)
    install(Vue, store) {
        Vue.prototype.$validateResponse = (response) => {
            if (!response.ok) {
                if (response.noAuth) {
                    const masterApp = store.getters.masterApp;
                    localStorage.removeItem("token");
                    window.open(`${masterApp}/apps`, "_self");
                }
                if (!response.operational) {
                    throw new Error(response.mensaje);
                }
            }
        }
    }
}