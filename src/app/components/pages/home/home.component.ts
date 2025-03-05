import { Component, Input, OnInit, signal } from '@angular/core';
import profileData from '../../../data/profile.data';
import { ProfileSchema } from '../../../data/schema/profile.schema';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  profile = signal <ProfileSchema>(profileData);


}
