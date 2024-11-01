import { SoftwareList } from '../components/SoftwareList';
import { useSoftwareStore } from '../store';
import { ShieldCheck, Trash2, Database } from 'lucide-react';

export function Admin() {
  const { software, approveSoftware, deleteSoftware } = useSoftwareStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
            </div>
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Back to Registry
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Pending Requests
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {software
                  .filter((s) => s.status === 'request')
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md p-6"
                    >
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">
                        Vendor: {item.vendor}
                      </p>
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => approveSoftware(item.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                          <ShieldCheck className="w-4 h-4" />
                          Approve
                        </button>
                        <button
                          onClick={() => deleteSoftware(item.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Approved Software
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {software
                  .filter((s) => s.status === 'approved')
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md p-6"
                    >
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">
                        Vendor: {item.vendor}
                      </p>
                      <div className="flex justify-end">
                        <button
                          onClick={() => deleteSoftware(item.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}