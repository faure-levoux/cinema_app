export class Movie {
    Film_Id: number;
    Film_IdAllocine: number;
    Film_Indes: boolean;
    Film_Cassiques: boolean;
    Film_Club300: boolean;
    Film_NotePresse: number;
    Film_NbAvisPresse: number;
    Film_NoteSpectateur: number;
    Film_NbNoteSpectateur: number;
    Film_NbAvisSpectateur: number;
    Film_TitreOriginal: string;
    Film_Duree: number;
    Film_DateDeSortie: Date;
    Film_Vue: boolean | number;
    Film_Titre: string;
    Film_ANePasVoir: boolean | number;

    constructor(movie: Movie) {
        this.Film_Id = movie.Film_Id;
        this.Film_IdAllocine = movie.Film_IdAllocine;
        this.Film_Indes = movie.Film_Indes;
        this.Film_Cassiques = movie.Film_Cassiques;
        this.Film_Club300 = movie.Film_Club300;
        this.Film_NotePresse = movie.Film_NotePresse == null ? 0 : movie.Film_NotePresse;
        this.Film_NbAvisPresse = movie.Film_NbAvisPresse == null ? 0 : movie.Film_NbAvisPresse;
        this.Film_NoteSpectateur = movie.Film_NoteSpectateur;
        this.Film_NbNoteSpectateur = movie.Film_NbNoteSpectateur;
        this.Film_NbAvisSpectateur = movie.Film_NbAvisSpectateur;
        this.Film_TitreOriginal = movie.Film_TitreOriginal;
        this.Film_Duree = movie.Film_Duree;
        this.Film_DateDeSortie = movie.Film_DateDeSortie;
        this.Film_Vue = movie.Film_Vue == 0 ? false : true;
        this.Film_Titre = movie.Film_Titre;
        this.Film_ANePasVoir = movie.Film_ANePasVoir == null ? false : movie.Film_ANePasVoir == 1;
    }
}

