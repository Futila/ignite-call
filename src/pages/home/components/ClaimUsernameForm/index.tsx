import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

// Converting tehe above ZOD structure to a typescript structure
type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data.username)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size={'sm'}
        prefix="ignite.com/"
        placeholder={'seu-usuário'}
        {...register('username')}
      />
      <Button>
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
