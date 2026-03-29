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
    Film_Vue: boolean;
    Film_Titre: string;
    Film_ANePasVoir: boolean;

    constructor(list: [number, number, boolean, boolean, boolean, number, number, number, number, number, string, number, Date, boolean, string]) {
        this.Film_Id = list[0];
        this.Film_IdAllocine = list[1];
        this.Film_Indes = list[2];
        this.Film_Cassiques = list[3];
        this.Film_Club300 = list[4];
        this.Film_NotePresse = list[5];
        this.Film_NbAvisPresse = list[6];
        this.Film_NoteSpectateur = list[7];
        this.Film_NbNoteSpectateur = list[8];
        this.Film_NbAvisSpectateur = list[9];
        this.Film_TitreOriginal = list[10];
        this.Film_Duree = list[11];
        this.Film_DateDeSortie = list[12];
        this.Film_Vue = list[13];
        this.Film_Titre = list[14];
        this.Film_ANePasVoir = false;
    }

}

