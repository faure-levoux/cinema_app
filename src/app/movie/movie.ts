import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie implements OnInit {
  title!: string;
  description!: string;
  imgUrl!: string;
  director!: string;
  producer!: string;
  category!: string;
  actor!: string;
  synopsis!: string;
  ageMinimum!: string;
  
  ngOnInit() {
    this.title = 'Le Crime du 3e étage';
    this.description = 'Un super film';
    this.imgUrl = "https://fr.web.img5.acsta.net/c_310_420/img/b2/0f/b20fa135f8ed4c7d0a5e0949c56e095e.jpg";
    this.director = "Remi Bzançon";
    this.producer = "Rémi Bezançon";
    this.category = "Comédie Dramatique";
    this.actor = "Gilles Lellouche";
    this.synopsis = "Colette, professeure de cinéma spécialisée dans l’œuvre de Hitchcock, soupçonne son nouveau voisin d’en face d’avoir tué sa femme. Réalité ou déformation professionnelle ? Son mari, François, écrivain de romans historico-policiers un peu désuets, est d’abord sceptique face à l’obsession de Colette pour ce prétendu crime. Il se laisse cependant embarquer dans cette enquête rocambolesque, et, à mesure que les indices s’accumulent et que le mystère s’épaissit, ce couple ordinaire se transforme en duo de détectives hors pair. Alors, y a-t-il vraiment eu un crime au 3 e étage ?";
    this.ageMinimum = "Tout public";
  }
  
  viewNumbers() {
  }
  
  maskNumbers() {
    this.title = 'Le Crime du 3e étage';
    this.description = 'Un super film';
    this.imgUrl = "https://fr.web.img5.acsta.net/c_310_420/img/b2/0f/b20fa135f8ed4c7d0a5e0949c56e095e.jpg";  }

}
