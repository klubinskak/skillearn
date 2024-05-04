export class CourseModel {
  id: string = '';
  title: string = '';
  description: string = '';
  instructor: string = '';
  duration: string = '';
  price: string = '';
  image: string = '';
  viewsCount: number = 0;
  timeSpent: number = 0;
  language: string = '';
  createdAt: Date | null = null;
  updatedAt: Date | null = null;
  rating: CourseRating[] = [];
}

export class CourseRating {
  userId: number = 0;
  value: number = 0;
  timestamp: Date | null = null;
}
