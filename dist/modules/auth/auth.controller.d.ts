import { AuthService } from './auth.service';
import { AuthDto, AuthInDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signin(dto: AuthInDto): Promise<{
        access_token: string;
    }>;
}
