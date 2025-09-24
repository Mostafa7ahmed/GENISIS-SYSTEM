import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface TodoItem {
  id: number;
  text: string;
  starred?: boolean;
  createdAt: Date;
}
@Component({
  selector: 'app-todolist',
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss'
})
export class Todolist {
 newTodoText = '';
  private idCounter = 1;

  // sample initial items
  todoList: TodoItem[] = [
    { id: this.idCounter++, text: 'اشتغل على صفحة الهوم', starred: false, createdAt: new Date() },
    { id: this.idCounter++, text: 'راجع كود الـ navbar', starred: true, createdAt: new Date() }
  ];
  completedList: TodoItem[] = [
    // مثال عنصر مكتمل
    { id: this.idCounter++, text: 'نزل المشروع على Git', starred: false, createdAt: new Date(new Date().setDate(new Date().getDate()-1)) }
  ];

  // Add new todo
  addTodo(): void {
    const text = this.newTodoText.trim();
    if (!text) return;
    const item: TodoItem = {
      id: this.idCounter++,
      text,
      starred: false,
      createdAt: new Date()
    };
    this.todoList.push(item);
    this.newTodoText = '';
  }

  // handle Enter key in input
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.addTodo();
    }
  }

  // toggle complete: move between lists
  toggleComplete(item: TodoItem, fromCompleted = false): void {
    if (fromCompleted) {
      // move from completed -> todo
      this.completedList = this.completedList.filter(i => i.id !== item.id);
      this.todoList.push(item);
    } else {
      // move from todo -> completed
      this.todoList = this.todoList.filter(i => i.id !== item.id);
      this.completedList.push(item);
    }
  }

  // toggle starred
  toggleStar(item: TodoItem): void {
    item.starred = !item.starred;
  }

  // helper to format time (HH:MM AM/PM)
  formatTime(d: Date): string {
    const date = new Date(d);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
  }

  // helper to format date string (Today / Yesterday / DD Mon YYYY)
  formatDate(d: Date): string {
    const date = new Date(d);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return date.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
