import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/config/shared.service';
import { Profile } from './Model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    focus;
    focus1;
    profile: Profile;
    constructor(private sharedService: SharedService) {
        this.profile = new Profile();
     }

    ngOnInit() {
        this.sharedService.setPageTitle('Profile');
    }
}
