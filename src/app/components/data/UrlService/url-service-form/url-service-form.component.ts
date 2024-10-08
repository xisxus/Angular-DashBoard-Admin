import { Component, OnInit } from '@angular/core';
import { CreateUrlServiceDto, RequestUrlDto } from '../../../../models/UrlService/url-service-dto';
import { UrlServiceService } from '../../../../services/UrlService/url-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-url-service-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './url-service-form.component.html',
  styleUrl: './url-service-form.component.css'
})
export class UrlServiceFormComponent implements OnInit {
  createUrlServiceDto: CreateUrlServiceDto = {
    currentUrl: '',
    description: '',
    requestUrlId: 0
  };
  requestUrls: RequestUrlDto[] = [];

  constructor(private urlService: UrlServiceService) {}

  ngOnInit(): void {
    this.loadRequestUrls();
  }

  loadRequestUrls(): void {
    this.urlService.getRequestUrls().subscribe((data: any) => {
      this.requestUrls = data.$values;
    });
  }

  submit(): void {
    this.urlService.createUrlService(this.createUrlServiceDto).subscribe(() => {
      alert('UrlService created successfully!');
    });
  }
}
