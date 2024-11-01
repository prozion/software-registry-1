import { useState } from 'react';
import { SoftwareType } from '../types';
import { Shield, Sword, Box } from 'lucide-react';

interface Props {
  onSubmit: (data: {
    name: string;
    vendor: string;
    versions: string[];
    type: SoftwareType;
  }) => void;
}

export function SoftwareForm({ onSubmit }: Props) {
  const [name, setName] = useState('');
  const [vendor, setVendor] = useState('');
  const [version, setVersion] = useState('');
  const [versions, setVersions] = useState<string[]>([]);
  const [type, setType] = useState<SoftwareType>('defensive');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, vendor, versions, type });
    setName('');
    setVendor('');
    setVersion('');
    setVersions([]);
    setType('defensive');
  };

  const addVersion = () => {
    if (version && !versions.includes(version)) {
      setVersions([...versions, version]);
      setVersion('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Software Type
        </label>
        <div className="mt-2 flex gap-4">
          {[
            { value: 'defensive', icon: Shield, label: 'Defensive' },
            { value: 'attack', icon: Sword, label: 'Attack' },
            { value: 'other', icon: Box, label: 'Other' },
          ].map(({ value, icon: Icon, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setType(value as SoftwareType)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                type === value
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Software Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Vendor</label>
        <input
          type="text"
          required
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Versions
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            placeholder="e.g. 1.0.0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={addVersion}
            className="mt-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
          >
            Add
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {versions.map((v) => (
            <span
              key={v}
              className="px-2 py-1 bg-gray-100 rounded-md text-sm flex items-center gap-1"
            >
              {v}
              <button
                type="button"
                onClick={() => setVersions(versions.filter((ver) => ver !== v))}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={!name || !vendor || versions.length === 0}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
      >
        Submit Request
      </button>
    </form>
  );
}