import { Component, OnInit } from '@angular/core';

import { UrlServiceService } from '../../../../services/UrlService/url-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UrlServiceDto } from '../../../../models/UrlService/url-service-dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-url-service-list',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './url-service-list.component.html',
  styleUrl: './url-service-list.component.css'
})
export class UrlServiceListComponent implements OnInit {
  urlServices: UrlServiceDto[] = [];

  constructor(private urlService: UrlServiceService) {}

  ngOnInit(): void {
    this.loadUrlServices();
  }

  loadUrlServices(): void {
    this.urlService.getUrlServices().subscribe((data: any) => {
      this.urlServices = data.$values;
    });
  }

  deleteUrlService(id: number): void {
    this.urlService.deleteUrlService(id).subscribe(() => {
      this.loadUrlServices();
    });
  }
}