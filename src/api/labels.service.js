import api from './api';
const path = '/labels';

export const getLabels = () => {
    return api.get(path);
}

export const createNewLabel = (label) => {
    return api.post(path, label);
}

export const deleteLabel = (id) => {
    return api.delete(`${path}/${id}`);
}

export const updateLabel = (label) => {
    return api.put(`${path}/${label.id}`, label);
}