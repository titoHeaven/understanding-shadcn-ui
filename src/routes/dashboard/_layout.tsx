import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout')({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <>
      <div className="dashboard-container bg-gray-900 text-white w-full h-15 flex items-center justify-between">
        <h1 className="ml-2 font-bold text-2xl">Dashboard Page</h1>

        <ul className="flex gap-2 mr-2">
          <li>
            <Link to="/dashboard/users">Users</Link>
          </li>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <main className="content">
        <Outlet />
      </main>
    </>
  )
}
