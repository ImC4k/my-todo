import api from './api';
const path = '/labels';

export const getLabels = () => {
    return api.get(path);
}

export const createNewLabel = (label) => {
    return api.post(path, label);
}