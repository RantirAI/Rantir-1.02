import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTeamDto {
  @ApiProperty({ example: 'Demo Team' })
  @IsNotEmpty({ message: 'Team name cannot be empty' })
  name: string;
}
