import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
  unsubscribe$ = new Subject<void>();

  constructor(private readonly toastrService: ToastrService) {}

  success(title: string, message: string): void {
    this.toastrService.success(message, title);
  }

  info(title: string, message: string): void {
    this.toastrService.info(message, title);
  }

  error(title: string, message: string): void {
    this.toastrService.error(message, title);
  }

  warning(title: string, message: string): void {
    this.toastrService.warning(message, title);
  }
}
