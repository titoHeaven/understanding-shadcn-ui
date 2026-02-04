/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { useNavigate } from '@tanstack/react-router'
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
import { SignupSchema } from '@/schemas/signup.schema'
import { useSignup } from '@/hooks/useSignUp'

export function SignupForm() {
  const navigate = useNavigate()
  const { mutate, isPending } = useSignup()

  const form = useForm({
    defaultValues: { email: '', password: '', confirmPassword: '' },
    validators: { onSubmit: SignupSchema },
    onSubmit: ({ value }) => {
      mutate(value, {
        onSuccess: (data) => {
          toast.success('Signup Successful! 🎉')
          console.log('Signup Success!', data)
        },
        onError: (err: any) => {
          toast.error('Signup Failed ❌')
          console.error('Signup Failed', err)
        },
      })
    },
  })

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="p-4 bg-gray-300">
        <CardTitle className="font-bold text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your email and password to create a new account
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          {/* Email */}
          <div className="pb-3">
            <Label htmlFor="email">Email</Label>
            <form.Field name="email">
              {(field) => (
                <>
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors?.map((err, i) => (
                    <p key={i} className="text-red-500 text-sm">
                      {err?.message}
                    </p>
                  ))}
                </>
              )}
            </form.Field>
          </div>

          {/* Password */}
          <div className="pb-3">
            <Label htmlFor="password">Password</Label>
            <form.Field name="password">
              {(field) => (
                <>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors?.map((err, i) => (
                    <p key={i} className="text-red-500 text-sm">
                      {err?.message}
                    </p>
                  ))}
                </>
              )}
            </form.Field>
          </div>

          {/* Confirm Password */}
          <div className="pb-3">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <form.Field name="confirmPassword">
              {(field) => (
                <>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="********"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors?.map((err, i) => (
                    <p key={i} className="text-red-500 text-sm">
                      {err?.message}
                    </p>
                  ))}
                </>
              )}
            </form.Field>
          </div>

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? 'Signing up...' : 'Sign Up'}
          </Button>

          <div className="flex justify-center mt-4">
            <Label className="gap-0">
              Already have an account?
              <Button
                onClick={() => navigate({ to: '/login' })}
                variant="link"
                className="text-blue-600 ml-2"
              >
                Login
              </Button>
            </Label>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
