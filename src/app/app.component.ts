import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class MessageService {
  createMessage(): Observable<string> {
    return Observable.create("Hello World");
  }
}

@Injectable()
export class Multiplier {
  constructor(private messageService: MessageService) { }

  getMessages(quantity: number): string[] {
    this.messageService.createMessage()
        .subscribe();
    // var messages = new Array(quantity)
    //   .map(function(item, index){ return message;})
    // return messages;

    return [];
  }
}

@Component({
  selector: 'app-root',
  template: '{{title}}',
  styles: []
})
export class AppComponent { 

  title = 'app';

  constructor(private multiplier: Multiplier) {
    this.title = multiplier.getMessages(3).join('<br />');
  }
}
