import { Component, OnInit } from '@angular/core';
import { CreateRequestUrlDto, RequestUrlDto } from '../../../../models/UrlService/url-service-dto';
import { UrlServiceService } from '../../../../services/UrlService/url-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-request-url',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-request-url.component.html',
  styleUrl: './edit-request-url.component.css'
})
export class EditRequestUrlComponent implements OnInit {
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
    // Get requestUrlId from the route parameter
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.requestUrlId = +id;
        this.loadRequestUrl(this.requestUrlId);
      }
    });
  }

  // Load the RequestUrl details for editing
  loadRequestUrl(id: number): void {
    this.urlService.getRequestUrl(id).subscribe((requestUrl: RequestUrlDto) => {
      this.requestUrlDto = {
        url: requestUrl.url,
        urlName: requestUrl.urlName
      };
    });
  }

  // Handle form submission for updating
  submit(): void {
    if (this.requestUrlId) {
      this.urlService.updateRequestUrl(this.requestUrlId, this.requestUrlDto).subscribe(() => {
        alert('Request URL updated successfully!');
        this.router.navigate(['/requesturl/list']); // Redirect back to the list after updating
      });
    }
  }
}