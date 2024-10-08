import { Component, OnInit } from '@angular/core';
import { CreateUrlServiceDto, RequestUrlDto, UrlServiceDto } from '../../../../models/UrlService/url-service-dto';
import { UrlServiceService } from '../../../../services/UrlService/url-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-url-service',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-url-service.component.html',
  styleUrl: './edit-url-service.component.css'
})
export class EditUrlServiceComponent implements OnInit {
  isEditMode: boolean = false;
  urlServiceId: number | null = null;
  requestUrls: RequestUrlDto[] = [];  // List of available RequestUrls for selection
  urlServiceDto: CreateUrlServiceDto = {
    currentUrl: '',
    description: '',
    requestUrlId: 0
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
        this.urlServiceId = +id;
        this.loadUrlService(this.urlServiceId);
      }
    });

    // Load all request URLs for dropdown selection
    this.loadRequestUrls();
  }

  // Load RequestUrls from the backend
  loadRequestUrls(): void {
    this.urlService.getRequestUrls().subscribe((requestUrls: RequestUrlDto[]) => {
      this.requestUrls = requestUrls;
    });
  }

  // Load UrlService details for editing
  loadUrlService(id: number): void {
    this.urlService.getUrlService(id).subscribe((urlService: UrlServiceDto) => {
      this.urlServiceDto = {
        currentUrl: urlService.currentUrl,
        description: urlService.description,
        requestUrlId: urlService.requestUrl.requestUrlId
      };
    });
  }

  // Handle form submission
  submit(): void {
    if (this.isEditMode && this.urlServiceId) {
      this.urlService.updateUrlService(this.urlServiceId, this.urlServiceDto).subscribe(() => {
        alert('UrlService updated successfully!');
        this.router.navigate(['/urlservices']);
      });
    } else {
      this.urlService.createUrlService(this.urlServiceDto).subscribe(() => {
        alert('UrlService created successfully!');
        this.router.navigate(['/urlservices']);
      });
    }
  }
}