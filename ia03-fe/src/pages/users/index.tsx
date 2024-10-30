import { useEffect, useState } from 'react';

function Home() {
  const [users, setUsers] = useState<{ id: string, email: string, createdAt: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ message: string } | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/users`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError({ message: (error as Error).message });
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [apiUrl]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100%-5rem)]">
        <div className="text-lg font-medium">Loading users...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[calc(100%-5rem)] bg-red-100 p-4 rounded">
        <div className="text-lg font-medium text-red-700">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100%-5rem)] bg-base-200 p-6">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <div className="overflow-x-auto">
        <table className="table w-full bg-base-100">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;