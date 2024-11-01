import { SoftwareList } from '../components/SoftwareList';
import { SoftwareForm } from '../components/SoftwareForm';
import { useSoftwareStore } from '../store';
import { Database } from 'lucide-react';

export function Home() {
  const { software, addSoftware } = useSoftwareStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Database className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Software Registry
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Available Software
              </h2>
              <SoftwareList software={software} />
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Request New Software
                </h2>
                <SoftwareForm onSubmit={addSoftware} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}