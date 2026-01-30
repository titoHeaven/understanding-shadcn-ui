import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="p-4 bg-gray-300">
        <CardTitle className="font-bold text-xl">Login</CardTitle>
        <CardDescription>
          Enter your email and password to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form>
          <div>
            <div className="pb-3">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="heavenson@gmail.com" />
            </div>
            <div className="pb-3">
              <Label htmlFor="password">Password</Label>
              <Input type="password" />
            </div>
            <Button className="w-full">Login</Button>
          </div>
          <div className="flex justify-center translate-x-5 translate-y-2">
            <Label className="gap-0">
              Don't have an account?
              <Button variant={'link'} className="text-blue-600 -translate-x-2">
                Sign Up
              </Button>
            </Label>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
