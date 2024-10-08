import { Component, OnInit } from '@angular/core';
import { RequestUrlDto } from '../../../../models/UrlService/url-service-dto';
import { UrlServiceService } from '../../../../services/UrlService/url-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-url-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './request-url-list.component.html',
  styleUrl: './request-url-list.component.css'
})
export class RequestUrlListComponent implements OnInit {
  requestUrls: RequestUrlDto[] = [];

  constructor(private urlService: UrlServiceService) {}

  ngOnInit(): void {
    this.loadRequestUrls();
  }

  loadRequestUrls(): void {
    this.urlService.getRequestUrls().subscribe((data: any) => {
      console.log(data);
      
      this.requestUrls = data.$values;
    });
  }

  deleteRequestUrl(id: number): void {
    this.urlService.deleteRequestUrl(id).subscribe(() => {
      this.loadRequestUrls();
    });
  }
}
