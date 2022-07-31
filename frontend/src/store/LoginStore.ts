import create from 'zustand';
import produce from 'immer';

export interface LoginStoreInterface {
    chatName: string;
}

export const useLoginStore = create<LoginStoreInterface>((set) => ({
    chatName: 'default name',
}));
