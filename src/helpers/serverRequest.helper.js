import axios from "axios";

const serverError = (error) => {
    error.operational = false;
    error.mensaje = "Ocurrió un error al realizar la petición al servidor";
    throw error;
}

export async function getServerRequest(url, config) {
    try {
        return await axios
            .get(url, config)
            .then(res => { return res.data; })
            // .catch(error => { throw error; });
    } catch (error) {
        serverError(error);
    }
}

export async function postServerRequest(url, data, config) {
    try {
        return await axios
            .post(url, data, config)
            .then(res => { return res.data; })
            // .catch(error => { throw error; });
    } catch (error) {
        serverError(error);
    }
}

export async function putServerRequest(url, data, config) {
    try {
        return await axios
            .put(url, data, config)
            .then(res => { return res.data; })
            // .catch(error => { throw error; });
    } catch (error) {
        serverError(error);
    }
}

export async function patchServerRequest(url, data, config) {
    try {
        return await axios
            .patch(url, data, config)
            .then(res => { return res.data; })
            // .catch(error => { throw error; });
    } catch (error) {
        serverError(error);
    }
}

export async function deleteServerRequest(url, config) {
    try {
        return await axios
            .delete(url, config)
            .then(res => { return res.data; })
            // .catch(error => { throw error; });
    } catch (error) {
        serverError(error);
    }
}