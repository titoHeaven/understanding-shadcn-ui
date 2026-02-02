import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout')({
  component: DashboardLayout,
})

function DashboardLayout() {
  return (
    <div className="dashboard-container">
      hello world (Navigation here)
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}
