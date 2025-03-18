import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login_details = [
    { icon: '👨‍💼', title: 'Hiring Manager', description: 'Create and manage job listings, review applications, and make hiring decisions.', button: 'Login as Hiring Manager' },
    { icon: '🧑‍💻', title: 'Recruiter', description: 'Source and screen candidates, manage the interview process, and provide feedback.', button: 'Login as Recruiter' },
    { icon: '👨‍🎓', title: 'Job Seeker', description: 'Browse open positions, submit applications, and track your application status.', button: 'Login as Job Seeker' }
  ];
}
