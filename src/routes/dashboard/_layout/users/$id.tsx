import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout/users/$id')({
  component: UserPage,
})

function UserPage() {
  const { id } = Route.useParams()
  return <div>Hello "/dashboard/users/{id}</div>
}
