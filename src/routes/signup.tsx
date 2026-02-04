import { createFileRoute } from '@tanstack/react-router'
import { SignupForm } from '@/components/auth/signup-form'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <SignupForm />
    </div>
  )
}
