// src/app/models/url-service.model.ts
export interface UrlServiceDto {
  urlServiceId: number;
  currentUrl: string;
  description: string;
  requestUrl: RequestUrlDto;
}

export interface RequestUrlDto {
  requestUrlId: number;
  url: string;
  urlName: string;
}

export interface CreateUrlServiceDto {
  currentUrl: string;
  description: string;
  requestUrlId: number;
}

export interface CreateRequestUrlDto {
  url: string;
  urlName: string;
}

