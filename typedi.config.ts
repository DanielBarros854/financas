import { Container } from 'typedi'
import { UserService } from './src/services/user'
import { UserRepository } from './src/db/repositories'

Container.set(UserRepository, new UserRepository())
Container.set(UserService, new UserService(Container.get(UserRepository)))
