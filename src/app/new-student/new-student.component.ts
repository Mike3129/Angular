import { Component, OnInit,Input } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  @Input() students: Student[];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  add(username: string, name: string, email: string): void {
    // Usunięcie białych znaków z danych
    username=username.trim();
    name = name.trim();
    email = email.trim();
  
    // Zaprzestanie wykonywania, kiedy pola są puste
    if (!name || !email) {
      return;
    }
  
    // Zaprzestanie wykonywania, kiedy adres e-mail nie zawiera "@"
    if (email.indexOf('@') < 1) {
      return;
    }
  
    // Przesłanie danych do serwera i zaktualizowanie lokalnej tablicy
      this.studentService.addStudent({ username, name, email } as Student)
        .subscribe(student=> {
          this.students.push(student);
        });
  }

}


