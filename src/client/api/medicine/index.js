import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import allMedicines from './data/all.json';

const mock = new MockAdapter(axios);

mock.onGet('api/1.0/_search/_product/_medicine/_all?q=as').reply(200, allMedicines);

const baseConfig = {
    baseURL: 'https://searchApi/',
}

export function get(){
    const config = {
        ...baseConfig,
    }
    return axios.get('api/1.0/_search/_product/_medicine/_all?q=as', config)
        .then((response) => {
            return response.data;
        });
}

export function getDetailsOf(medicineId) {
    const config = {
        ...baseConfig,
    }
    return axios.get(`medicine/${medicineId}/types`, config)
        .then((response) => {
            return response.data;
        })
}

export default {
    get,
    getDetailsOf
}