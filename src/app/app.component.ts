import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'eb Dev Quiz 2022 ';
  myArray = [
    {
      name: 'John',
      chemistryMarks: 80,
      biologyMarks: 75,
      dateOfBirth: '12-04-2000',
    },
    {
      name: 'Mike',
      chemistryMarks: 85,
      biologyMarks: 80,
      dateOfBirth: '11-05-1999',
    },
    {
      name: 'Jessica',
      chemistryMarks: 90,
      biologyMarks: 75,
      dateOfBirth: '10-06-1998',
    },
  ];

  ngOnInit() {
    this.myArray.sort((a, b) => {
      let totalMarksA = a.chemistryMarks + a.biologyMarks;
      let totalMarksB = b.chemistryMarks + b.biologyMarks;
      if (totalMarksA !== totalMarksB) {
        return totalMarksB - totalMarksA;
      } else if (a.biologyMarks !== b.biologyMarks) {
        return b.biologyMarks - a.biologyMarks;
      } else if (a.dateOfBirth !== b.dateOfBirth) {
        return a.dateOfBirth.localeCompare(b.dateOfBirth);
      }
    });
  }
}
