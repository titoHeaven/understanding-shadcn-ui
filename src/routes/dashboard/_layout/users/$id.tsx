import { createFileRoute } from '@tanstack/react-router'
import { toast } from 'sonner'
import { useEffect } from 'react'
import { useUsers } from '@/hooks/useUsers'
import UserList from '@/components/userList'
import UserSkeleton from '@/components/userSkeleton'

export const Route = createFileRoute('/dashboard/_layout/users/$id')({
  component: UserPage,
})

function UserPage() {
  const { data, isLoading, error, refetch } = useUsers()
  useEffect(() => {
    if (error) {
      toast.error(`Error loading users: ${error.message}`)
    }
  }, [error])

  return (
    <div className="w-5xl mx-auto min-h-screen flex flex-col justify-center items-center gap-4">
      {isLoading && <UserSkeleton />}

      {error && (
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Retry
        </button>
      )}

      {data && <UserList users={data} />}
    </div>
  )
}
