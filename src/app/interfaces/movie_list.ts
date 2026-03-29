import { Movie } from "../models/movie";

export interface MovieListInterface extends Array<Movie[]> {
    Film_NotePresse: string;
    Film_NbAvisPresse: string;
    Film_NoteSpectateur: string;
    Film_NbNoteSpectateur: string;
    Film_NbAvisSpectateur: string;
    Film_DateDeSortie: string;
    Film_Titre: string;
}