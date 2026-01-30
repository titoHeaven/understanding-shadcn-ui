import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export const Route = createFileRoute('/')({ component: App })

function App() {
  // const users = [
  //   {
  //     id: 1,
  //     name: 'Heavenson D. Sencio',
  //     age: 22,
  //     course: 'Bachelor of Science in Information Technology',
  //     school: 'Northern Luzon Adventist College',
  //   },
  //   {
  //     id: 2,
  //     name: 'Mario "Miko" C. Ofiaza III',
  //     age: 23,
  //     course: 'Bachelor of Science in Information Technology',
  //     school: 'Northern Luzon Adventist College',
  //   },
  //   {
  //     id: 3,
  //     name: 'Jezryl Jhem T. Rullan',
  //     age: 24,
  //     course: 'Bachelor of Science in Information Technology',
  //     school: 'Northern Luzon Adventist College',
  //   },
  //   {
  //     id: 4,
  //     name: 'Albert Redilla',
  //     age: 23,
  //     course: 'Bachelor of Science in Information Technology',
  //     school: 'Northern Luzon Adventist College',
  //   },
  //   {
  //     id: 5,
  //     name: 'John Lloyd Glee',
  //     age: 25,
  //     course: 'Bachelor of Science in Information Technology',
  //     school: 'Northern Luzon Adventist College',
  //   },
  //   {
  //     id: 6,
  //     name: 'Rianne Agnieka B. Castano',
  //     age: 23,
  //     course: 'Bachelor of Science in Information Technology',
  //     school: 'Northern Luzon Adventist College',
  //   },
  // ]

  // return (
  //   <div className="flex flex-col min-h-screen justify-center items-center">
  //     <div className="font-medium">Understanding shadcn/ui</div>
  //     <div className="grid grid-cols-3 items-center flex-wrap gap-4 mt-4 w-full px-4">
  //       <div className="flex flex-col items-center border p-4 h-65 gap-y-2">
  //         <h1 className="text-center font-bold">Button</h1>
  //         <h3 className="italic text-sm">A simple button component.</h3>
  //         <Button>Click me</Button>
  //       </div>
  //       <div className="flex flex-col items-center border p-4 h-65 gap-y-2">
  //         <h1 className="text-center font-bold">Card</h1>
  //         <h3 className="italic text-sm">A simple card component.</h3>
  //         <Card>
  //           <CardContent>
  //             <CardHeader>
  //               <CardTitle>A card header on a title</CardTitle>
  //             </CardHeader>
  //             <CardDescription>
  //               This is a simple card description to describe the card content.
  //             </CardDescription>
  //             <CardFooter>
  //               <CardDescription>Footer Here</CardDescription>
  //               <Button variant={'outline'}>Some Button</Button>
  //             </CardFooter>
  //           </CardContent>
  //         </Card>
  //       </div>
  //       <div className="flex flex-col border p-4 h-65 gap-y-2">
  //         <h1 className="text-center font-bold">Input</h1>
  //         <h3 className="italic text-sm text-center">
  //           A simple input component.
  //         </h3>
  //         <Card>
  //           <CardContent>
  //             <CardHeader>
  //               <CardTitle>Input Component</CardTitle>
  //               <Input placeholder="Type here..." />
  //             </CardHeader>
  //           </CardContent>
  //         </Card>
  //       </div>
  //       <div className="flex flex-col items-center gap-y-2 border p-4 h-60">
  //         <h1 className="text-center font-bold">Table</h1>
  //         <h3 className="italic text-sm">A simple table component.</h3>
  //         <Table>
  //           <TableCaption>List of users</TableCaption>
  //           <TableRow>
  //             <TableHead>Name</TableHead>
  //             <TableHead>Age</TableHead>
  //             <TableHead>Course</TableHead>
  //             <TableHead>School</TableHead>
  //           </TableRow>
  //           <TableBody>
  //             {users.map((user) => (
  //               <TableRow key={user.id}>
  //                 <TableCell>{user.name}</TableCell>
  //                 <TableCell>{user.age}</TableCell>
  //                 <TableCell>{user.course}</TableCell>
  //                 <TableCell>{user.school}</TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </div>
  //       <div className="flex flex-col items-center h-60 border p-4 gap-y-2">
  //         <h1 className="text-center font-bold">Dialog</h1>
  //         <h3 className="italic text-sm">A simple dialog component</h3>
  //         <Dialog>
  //           <form>
  //             <DialogTrigger asChild>
  //               <Button variant={'outline'}>Open Me</Button>
  //             </DialogTrigger>
  //             <DialogContent>
  //               <DialogHeader>
  //                 <DialogTitle>Enter your name:</DialogTitle>
  //               </DialogHeader>
  //               <Input />
  //               <DialogFooter>
  //                 <DialogClose>
  //                   <Button variant={'destructive'}>Cancel</Button>
  //                 </DialogClose>
  //                 <Button type="submit">Submit</Button>
  //               </DialogFooter>
  //             </DialogContent>
  //           </form>
  //         </Dialog>
  //       </div>
  //     </div>
  //   </div>
  // )
  return <h1>Hello world</h1>
}
