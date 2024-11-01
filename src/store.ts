import { create } from 'zustand';
import { Software } from './types';

interface SoftwareStore {
  software: Software[];
  addSoftware: (software: Omit<Software, 'id' | 'status' | 'createdAt'>) => void;
  approveSoftware: (id: string) => void;
  deleteSoftware: (id: string) => void;
}

export const useSoftwareStore = create<SoftwareStore>((set) => ({
  software: [
    {
      id: '1',
      name: 'Defender Pro',
      vendor: 'SecureNet',
      versions: ['1.0.0', '1.1.0', '2.0.0'],
      type: 'defensive',
      status: 'approved',
      createdAt: '2024-03-10',
    },
    {
      id: '2',
      name: 'PenTest Suite',
      vendor: 'HackLabs',
      versions: ['3.2.1', '3.3.0'],
      type: 'attack',
      status: 'approved',
      createdAt: '2024-03-11',
    },
  ],
  addSoftware: (newSoftware) =>
    set((state) => ({
      software: [
        ...state.software,
        {
          ...newSoftware,
          id: crypto.randomUUID(),
          status: 'request',
          createdAt: new Date().toISOString().split('T')[0],
        },
      ],
    })),
  approveSoftware: (id) =>
    set((state) => ({
      software: state.software.map((s) =>
        s.id === id ? { ...s, status: 'approved' } : s
      ),
    })),
  deleteSoftware: (id) =>
    set((state) => ({
      software: state.software.filter((s) => s.id !== id),
    })),
}));