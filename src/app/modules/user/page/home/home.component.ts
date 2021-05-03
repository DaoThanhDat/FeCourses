import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/Course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public coursesList: Course[] = [
    {
      id: 'html',
      name: 'HTML & CSS',
      priceTag: 'premium',
      image: './../../../../../assets/image/css.jpg',
      totalTime: 33,
      totalLessons: 14,
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'beginer',
      viewers: 4019,
    },
    {
      id: 'js',
      name: 'Java Script',
      priceTag: 'free',
      image: './../../../../../assets/image/css.jpg',
      totalTime: 331,
      totalLessons: 114,
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'advanced',
      viewers: 4019,
    },
    {
      id: 'java',
      name: 'Java 8',
      priceTag: 'free',
      image: './../../../../../assets/image/css.jpg',
      totalTime: 44,
      totalLessons: 41,
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'intermediate',
      viewers: 2019,
    },
    {
      id: 'html',
      name: 'HTML & CSS',
      priceTag: 'premium',
      image: './../../../../../assets/image/css.jpg',
      totalTime: 33,
      totalLessons: 14,
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'beginer',
      viewers: 4019,
    },
    {
      id: 'js',
      name: 'Java Script',
      priceTag: 'free',
      image: './../../../../../assets/image/css.jpg',
      totalTime: 331,
      totalLessons: 114,
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'advanced',
      viewers: 4019,
    },
    {
      id: 'java',
      name: 'Java 8',
      priceTag: 'free',
      image: './../../../../../assets/image/css.jpg',
      totalTime: 44,
      totalLessons: 41,
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'intermediate',
      viewers: 2019,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  currentPriceTag(price: string) {
    return price === 'free' ? 'free' : 'premium';
  }
  iconLevelColor(level: string) {
    if (level === 'beginer') {
      return 'color: #ff0000';
    }
    if (level === 'intermediate') {
      return 'color: #ee82ee';
    }
    if (level === 'advanced') {
      return 'color: #00CE83';
    }
  }
  iconLevelType(level: string) {
    if (level === 'beginer') {
      return 'fa fa-battery-quarter';
    }
    if (level === 'intermediate') {
      return 'fa fa-battery-three-quarters';
    }
    if (level === 'advanced') {
      return 'fa fa-battery-full';
    }
  }
}
