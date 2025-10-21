import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1 } from './componente1/componente1';
import { Post } from './post/post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Componente1,Post],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('componenti');
  messaggio = 'Ciao dal componente padre!';
  posts = [
    {
    titolo: 'titolo1',
    testo: 'esempio di testo1'
    },
    {
    titolo: 'titolo1',
    testo: 'esempio di testo2'
    },
    {
    titolo: 'titolo3',
    testo: 'esempio di testo3'
    }
    ];
}
