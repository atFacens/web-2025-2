import { Component, OnInit } from '@angular/core';
import { UserService } from './userService';
import { User } from './user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.error = 'Failed to load users. Please try again later.';
        this.isLoading = false;
      }
    });
  }
}