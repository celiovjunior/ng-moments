import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MomentsService } from 'src/app/services/moments.service';
import { Moment } from 'src/app/Moments';
import { environment } from 'src/environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {

  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentsService: MomentsService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // pegando o id
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentsService.getMoment(id).subscribe(item => this.moment = item.data)
  }

  async removeHandler(id: number) {
    await this.momentsService.removeMoment(id).subscribe()

    this.messagesService.add("The moment was deleted!")

    this.router.navigate(['/'])

  }

}
