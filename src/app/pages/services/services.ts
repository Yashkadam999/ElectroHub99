import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class Services {
  services = [
    {
      icon: '🚚',
      title: 'Fast Shipping',
      description: 'Get your products delivered quickly and safely to your doorstep.'
    },
    {
      icon: '💳',
      title: 'Secure Payments',
      description: 'All transactions are encrypted for your security and peace of mind.'
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: 'Hassle-free returns within 30 days for all products.'
    },
    {
      icon: '📞',
      title: 'Customer Support',
      description: '24/7 dedicated support to assist you with any inquiries.'
    }
  ];
}
