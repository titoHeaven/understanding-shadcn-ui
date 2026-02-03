import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

type Props = {
  rows?: number
}

export default function UserSkeleton({ rows = 5 }: Props) {
  return (
    <div className="w-5xl mx-auto min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">List of Users</h1>
      <Table>
        <TableCaption>Loading Users...</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: rows }).map((_, i) => (
            <TableRow key={i} className="animate-pulse">
              <TableCell className="py-3">
                <div className="h-6 bg-gray-300 rounded w-24"></div>
              </TableCell>
              <TableCell className="py-3">
                <div className="h-6 bg-gray-300 rounded w-24"></div>
              </TableCell>
              <TableCell className="py-3">
                <div className="h-6 bg-gray-300 rounded w-32"></div>
              </TableCell>
              <TableCell className="py-3">
                <div className="h-6 bg-gray-300 rounded w-40"></div>
              </TableCell>
              <TableCell className="py-3">
                <div className="h-6 bg-gray-300 rounded w-32"></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="py-3">
              Total Users
            </TableCell>
            <TableCell className="py-3">
              <div className="h-6 w-12 bg-gray-300 rounded"></div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
