import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}
  create(createTodoDto: CreateTodoDto):Promise<Todo> {
    const todo:Todo = new Todo()
    todo.title = createTodoDto.title;
    return this.todoRepository.save(todo)
  }

  findAllTodos() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOneBy({id});
  }

  updateTodo (id: number, updateTodoDto: UpdateTodoDto) {
    const todo:Todo = new Todo()
    todo.isCompleted=!updateTodoDto.isCompleted;
    todo.title = updateTodoDto.title;
    todo.id= id
    return this.todoRepository.save(todo)
  }

  removeTodo(id: number) {
    return this.todoRepository.delete(id);
  }
}
