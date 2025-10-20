import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent, SearchBoxComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  loading = true;
  error: string | null = null;
  searchTerm: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers()

  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users;
        this.filteredUsers = users;
        this.loading = false;
      },
      error: (error: any) => {
        this.error = 'Kullanıcılar yüklenirken bir hata oluştu.';
        this.loading = false;
        console.error('Error loading users:', error);
      }
    });
  }

  onSearch(): void {
    if (!this.searchTerm.trim()) {
      this.filteredUsers = this.users;
      return;
    }

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.onSearch();
  }

  onClearSearch(): void {
    this.searchTerm = '';
    this.filteredUsers = this.users;
  }
}