import { IsUUID } from 'class-validator';

export class GetIdDto {
  @IsUUID()
  id!: string;
}
