import { IsEmail, Length } from 'class-validator'
import { IsCPF } from 'class-validator-cpf'
import { Field, InputType } from 'type-graphql'

@InputType()
export class UserInputInterface {
  @IsEmail({}, { message: 'O email fornecido não é válido. Por favor, insira um endereço de email válido.' })
  @Field()
    email: string

  @Length(3, 16, { message: 'A senha fornecida não atende aos requisitos. Por favor, certifique-se de que sua senha tenha entre 3 e 16 caracteres.' })
  @Field()
    password: string

  @Field()
  @IsCPF({ message: 'O CPF fornecido não é válido. Por favor, insira um CPF válido.' })
    cpf: string

  @Field()
    name: string
}
