import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moments';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentsService } from 'src/app/services/moments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = "Share";

  constructor(
    private momentsService: MomentsService,
    private messagesService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if(moment.image) {
      formData.append('image', moment.image);
    }

    // enviar para o service
    await this.momentsService.createMoment(formData).subscribe();

    // exibir messagem
    this.messagesService.add("Moment added succesfully!");

    // redirect para outra pagina
    this.router.navigate(['/']);
  }

}
