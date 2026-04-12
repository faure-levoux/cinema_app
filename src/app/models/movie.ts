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

    constructor(list: string) {
        this.Film_Id = parseInt(list[0]);
        this.Film_IdAllocine = parseInt(list[1]);
        this.Film_Indes = JSON.parse(list[2]);
        this.Film_Cassiques = JSON.parse(list[3]);
        this.Film_Club300 = JSON.parse(list[4]);
        this.Film_NotePresse = list[5] == undefined ? 0 : parseFloat(list[5]);
        this.Film_NbAvisPresse = list[6] == undefined ? 0 : parseFloat(list[6]);
        this.Film_NoteSpectateur = parseFloat(list[7]);
        this.Film_NbNoteSpectateur = parseInt(list[8]);
        this.Film_NbAvisSpectateur = parseInt(list[9]);
        this.Film_TitreOriginal = list[10];
        this.Film_Duree = parseInt(list[11]);
        this.Film_DateDeSortie = new Date(list[12]);
        this.Film_Vue = JSON.parse(list[13]);
        this.Film_Titre = list[14];
        this.Film_ANePasVoir = list[15] == undefined ? false : JSON.parse(list[15]);
    }
}

