import { getServerRequest } from '../../helpers/serverRequest.helper';
import { store } from '../../store/store';

const httpURL = store.getters.httpURL;

export async function getSession() {
    const token = store.getters.sessionToken;
    const config = { headers: { token } };
    const url = `${httpURL}/login`;
    return await getServerRequest(url, config);
}