import api from './api';
const path = '/labels';

export const getLabels = () => {
    return api.get(path);
}