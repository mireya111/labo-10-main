import {Router} from 'express';
import { registerUserController } from '../controllers/users_controller';
const router = Router(); 

router.post('/users/register', registerUserController); 

export default router 