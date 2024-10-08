import { Component, OnInit } from '@angular/core';
import { CreateRequestUrlDto, RequestUrlDto } from '../../../../models/UrlService/url-service-dto';
import { UrlServiceService } from '../../../../services/UrlService/url-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-url-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-url-form.component.html',
  styleUrl: './request-url-form.component.css'
})
export class RequestUrlFormComponent implements OnInit {
  isEditMode: boolean = false;
  requestUrlId: number | null = null;
  requestUrlDto: CreateRequestUrlDto = {
    url: '',
    urlName: ''
  };

  constructor(
    private urlService: UrlServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check if we are in edit mode by looking for an id in the route
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.requestUrlId = +id;
        this.loadRequestUrl(this.requestUrlId);
      }
    });
  }

  // Load request URL if editing
  loadRequestUrl(id: number): void {
    this.urlService.getRequestUrl(id).subscribe((requestUrl: RequestUrlDto) => {
      this.requestUrlDto = {
        url: requestUrl.url,
        urlName: requestUrl.urlName
      };
    });
  }

  // Handle form submission
  submit(): void {
    if (this.isEditMode && this.requestUrlId) {
      this.urlService.updateRequestUrl(this.requestUrlId, this.requestUrlDto).subscribe(() => {
        alert('Request URL updated successfully1!');
        this.router.navigate(['/requesturl/list']);
      });
    } else {
      this.urlService.createRequestUrl(this.requestUrlDto).subscribe(() => {
        alert('Request URL created successfully2!');
        this.router.navigate(['/requesturl/list']);
      });
    }
  }
}
