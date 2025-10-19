import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;
  loading = true;
  error: string | null = null;
  userId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id && id > 0) {
        this.userId = id;
        this.loadUser(id);
      } else {
        this.error = 'Geçersiz kullanıcı ID';
        this.loading = false;
      }
    });
  }

  loadUser(id: number): void {
    this.loading = true;
    this.error = null;
    
    this.userService.getUserById(id).subscribe({
      next: (user: User) => {
        this.user = user;
        this.loading = false;
      },
      error: (error: any) => {
        this.error = 'Kullanıcı bilgileri yüklenirken bir hata oluştu.';
        this.loading = false;
        console.error('Error loading user:', error);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}