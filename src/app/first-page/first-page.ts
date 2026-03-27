import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-first-page',
  imports: [MovieComponent],
  templateUrl: './first-page.html',
  styleUrl: './first-page.css',
})
export class FirstPage implements OnInit {
  movie1!: Movie;
  movie2!: Movie;
  movies!: Movie[];

  ngOnInit(): void {
    this.movies = [
      new Movie(
        'Le Crime du 3e étage',
        "https://fr.web.img5.acsta.net/c_310_420/img/b2/0f/b20fa135f8ed4c7d0a5e0949c56e095e.jpg",
        "Remi Bzançon",
        "Rémi Bezançon",
        "Comédie Dramatique",
        "Gilles Lellouche",
        "Colette, professeure de cinéma spécialisée dans l’œuvre de Hitchcock, soupçonne son nouveau voisin d’en face d’avoir tué sa femme. Réalité ou déformation professionnelle ? Son mari, François, écrivain de romans historico-policiers un peu désuets, est d’abord sceptique face à l’obsession de Colette pour ce prétendu crime. Il se laisse cependant embarquer dans cette enquête rocambolesque, et, à mesure que les indices s’accumulent et que le mystère s’épaissit, ce couple ordinaire se transforme en duo de détectives hors pair. Alors, y a-t-il vraiment eu un crime au 3 e étage ?",
        "Tout public",
        1200,
        3.5,
        10,
        3.2,
        new Date(1774000173000)
      ),
      new Movie(
        'Inception',
        "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/72/34/14/19476654.jpg",
        "Christopher Nolan",
        "Christopher Nolan",
        "Science Fiction",
        "Leonardo DiCaprio",
        "Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossible : l’inception. Au lieu de subtiliser un rêve, Cobb et son équipe doivent faire l’inverse : implanter une idée dans l’esprit d’un individu. S’ils y parviennent, il pourrait s’agir du crime parfait. Et pourtant, aussi méthodiques et doués soient-ils, rien n’aurait pu préparer Cobb et ses partenaires à un ennemi redoutable qui semble avoir systématiquement un coup d’avance sur eux. Un ennemi dont seul Cobb aurait pu soupçonner l’existence.",
        "Interdit -12 ans",
        117455,
        4.5,
        24,
        4.1,
        new Date(1774590423000)
      )
    ]
  }
}
