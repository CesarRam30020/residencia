const state = {
    httpURL: process.env.VUE_APP_API,
    masterApp: process.env.VUE_APP_MASTER_API,
    sessionToken: null,
    codigoUsuario: null,
    userName: null,
    userTitle: 'Unknown',
    mainCardTitle: 'Cargando aplicación...',
    appName: 'Secretaría General',
    role: 'user',
    userId: null,
    systemVersion: '1.0'
}

const getters = {
    httpURL: state => {
        return state.httpURL;
    },
    masterApp: state => {
        return state.masterApp;
    },
    sessionToken: state => {
        return state.sessionToken;
    },
    codigoUsuario: state => {
        return state.codigoUsuario;
    },
    userName: state => {
        return state.userName;
    },
    userTitle: state => {
        return state.userTitle;
    },
    mainCardTitle: state => {
        return state.mainCardTitle;
    },
    appName: state => {
        return state.appName;
    },
    role: state => {
        return state.role;
    },
    userId: state => {
        return state.userId;
    },
    systemVersion: state => {
        return state.systemVersion;
    }
}

const actions = {
    setSessionToken(context, payload) {
        context.commit('setSessionTokenHandler', payload);
    },
    setCodigoUsuario(context, payload) {
        context.commit('setCodigoUsuarioHandler', payload);
    },
    setUserName(context, payload) {
        context.commit('setUserNameHandler', payload);
    },
    setUserTitle(context, payload) {
        context.commit('setUserTitleHandler', payload);
    },
    setMainCardTitle(context, payload) {
        context.commit('setMainCardTitleHandler', payload);
    },
    setAppName(context, payload) {
        context.commit('setAppNameHandler', payload);
    },
    setRole(context, payload) {
        context.commit('setRoleHandler', payload);
    },
    setUserId(context, payload) {
        context.commit('setUserIdHandler', payload);
    },
    setSystemVersion(context, payload) {
        context.commit('setSystemVersionHandler', payload);
    }
}

// mutations
const mutations = {
    setSessionTokenHandler(state, token) {
        state.sessionToken = token;
    },
    setCodigoUsuarioHandler(state, codigoUsuario) {
        state.codigoUsuario = codigoUsuario;
    },
    setUserNameHandler(state, name) {
        state.userName = name;
    },
    setUserAdminHandler(state, admin) {
        state.userAdmin = admin;
    },
    setUserTitleHandler(state, title) {
        state.userTitle = title;
    },
    setMainCardTitleHandler(state, title) {
        state.mainCardTitle = title;
    },
    setAppNameHandler(state, appName) {
        state.appName = appName;
    },
    setRoleHandler(state, role) {
        state.role = role;
    },
    setUserIdHandler(state, userId) {
        state.userId = userId;
    },
    setSystemVersionHandler(state, systemVersion) {
        state.systemVersion = systemVersion;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}