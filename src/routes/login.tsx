import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '@/components/auth/login-form'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <LoginForm />
    </div>
  )
}
