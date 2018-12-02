import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private route:  ActivatedRoute) { }

  userProfile = {};

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    console.log('id', id);
    this.userService.getProfile(id)
      .subscribe(data => this.userProfile = data.user);
  }

}
