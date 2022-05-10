import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MomentsService } from 'src/app/services/moments.service';
import { Moment } from 'src/app/Moments';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?: Moment;

  constructor(private momentsService: MomentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // pegando o id
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentsService.getMoment(id).subscribe(item => this.moment = item.data)
  }

}
