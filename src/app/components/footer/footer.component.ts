import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  quicklinks=["Home","Features","Portfolio","Dashboard"]
  resources=["Blog","Help Center","Career Advice","Privacy Policy"]
  contact_list=[
    {icon:"1",content:"atssupport.com"},
    {icon:"2",content:"+000000000000"},
    {icon:"3",content:"IT Hub Nizamabad"}
  ]
}
