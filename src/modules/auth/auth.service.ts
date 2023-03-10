import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto, AuthInDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);
    // save the new user in the db
    try {
      const user = await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          hash,
        },
      });

      return this.signToken(user.id, user.email, user.name, user.role);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthInDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');

    // compare password
    const pwMatches = await argon.verify(user.hash, dto.password);
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');
    return this.signToken(user.id, user.email, user.name, user.role);
  }

  async signToken(
    userId: number,
    email: string,
    name: string,
    role: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
      name,
      role,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '25m',
      secret: this.config.get('JWT_SECRET'),
    });

    return {
      access_token: token,
    };
  }
}
