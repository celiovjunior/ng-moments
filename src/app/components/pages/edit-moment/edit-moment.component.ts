import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moment } from 'src/app/Moments';
import { MomentsService } from 'src/app/services/moments.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  moment!: Moment;
  btnText: string = "Edit";

  constructor(private momentsService: MomentsService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentsService.getMoment(id).subscribe(item => {
      this.moment = item.data;
    })
  }

}
