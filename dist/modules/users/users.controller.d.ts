import { UserUpdateDto } from './dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(userId: any): Promise<import(".prisma/client").User>;
    update(dto: UserUpdateDto, userId: number): Promise<import(".prisma/client").User>;
}
