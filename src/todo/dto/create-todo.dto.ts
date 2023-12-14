import {
    IsBoolean,
    IsNotEmpty,
    IsString,
    MaxLength,
} from 'class-validator';
  
export class CreateTodoDto {
    @IsString()
    @MaxLength(50,{message:"Title must contain maximum 50 characters"})
    @IsNotEmpty()
    title: string;

    @IsBoolean()
    isCompleted:boolean
}
