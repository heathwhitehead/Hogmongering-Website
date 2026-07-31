import { Component, inject, OnInit, signal, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-photo-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-service.html',
  styleUrls: ['./photo-service.css'],
})
export class PhotoService implements OnInit {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  readonly bucketUrl = 'https://hog-photos-021860012642-us-east-2-an.s3.us-east-2.amazonaws.com';
  
  // Use a Signal for automatic change detection and reactivity
  photos = signal<string[]>([]);

  ngOnInit(): void {
    // Check if running in the browser using Angular's recommended utility
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.http.get(`${this.bucketUrl}?list-type=2`, { responseType: 'text' })
      .subscribe({
        next: (xmlString) => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(xmlString, 'application/xml');
          const keys = xml.querySelectorAll('Contents > Key');

          const parsedPhotos = Array.from(keys)
            .map(node => node.textContent)
            .filter((key): key is string => !!key && /\.(jpg|jpeg|png|webp|gif)$/i.test(key))
            .map(key => `${this.bucketUrl}/${key}`);

          // Signal update automatically triggers UI re-render
          this.photos.set(parsedPhotos);
        },
        error: (err) => console.error('Error fetching S3 bucket contents:', err)
      });
  }
}