import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto, AuthInDto } from './dto';
export declare class AuthService {
    private config;
    private prisma;
    private jwt;
    constructor(config: ConfigService, prisma: PrismaService, jwt: JwtService);
    signup(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signin(dto: AuthInDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string, name: string, role: string): Promise<{
        access_token: string;
    }>;
}
