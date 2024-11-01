import { Software } from '../types';
import { Shield, Sword, Box } from 'lucide-react';

const typeIcons = {
  defensive: Shield,
  attack: Sword,
  other: Box,
};

const typeColors = {
  defensive: 'text-green-600',
  attack: 'text-red-600',
  other: 'text-blue-600',
};

interface Props {
  software: Software[];
}

export function SoftwareList({ software }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {software.map((item) => {
        const Icon = typeIcons[item.type];
        return (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <Icon className={`w-5 h-5 ${typeColors[item.type]}`} />
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-medium">Vendor:</span> {item.vendor}
              </p>
              <div>
                <span className="font-medium">Versions:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.versions.map((version) => (
                    <span
                      key={version}
                      className="px-2 py-1 text-sm bg-gray-100 rounded"
                    >
                      {version}
                    </span>
                  ))}
                </div>
              </div>
              {item.status === 'request' && (
                <span className="inline-block px-2 py-1 text-sm text-yellow-700 bg-yellow-100 rounded">
                  Pending Approval
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}