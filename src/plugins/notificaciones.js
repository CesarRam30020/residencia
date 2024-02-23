export default {

    install(Vue) {
        Vue.prototype.$notificarError = (error) => {
            let errorData = getErrorData();
            errorData.text = error.message;
            Vue.notify(errorData);
        }

        Vue.prototype.$notificarSuccess = (texto) => {
            let successData = getSuccessData();
            successData.text = texto;
            Vue.notify(successData);
        }

    }
}

function getErrorData() {
    return {
        group: "gral_notif",
        type: "error",
        text: ''
    }
}

function getSuccessData() {
    return {
        group: "gral_notif",
        type: "success",
        text: ''
    }
}