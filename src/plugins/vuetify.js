import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#5b5b5b',
                secondary: '#8F993E',
                accent: '#FDCF85',
                error: '#B12028',
            },
        },
    }
});
