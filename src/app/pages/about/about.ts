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
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
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
export class About {
  team = [
    { name: 'Alice Johnson', role: 'CEO', image: 'https://nkd.co.uk/wp-content/uploads/2023/08/Alice_1-1024x1024.jpg' },
    { name: 'Bob Smith', role: 'CTO', image: 'https://i.pinimg.com/736x/29/09/a6/2909a61b356e8c2b22660519321fd24d.jpg' },
    { name: 'Carol Lee', role: 'Designer', image: 'https://wwd.com/wp-content/uploads/2022/03/Carol-Lee.jpg' }
  ];
}
