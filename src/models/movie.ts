export class Movie {
    title!: string;
    imgUrl!: string;
    director!: string;
    producer!: string;
    category!: string;
    actor!: string;
    synopsis!: string;
    ageMinimum!: string;
    nb_notes_public!: number;
    avg_note_public!: number;
    nb_notes_pro!: number;
    avg_note_pro!: number;
    releaseDate!: Date;
    
    constructor(title: string, imgUrl: string, director: string, producer: string, category: string, actor: string, synopsis: string, ageMinimum: string, nb_notes_public: number, avg_note_public: number, nb_notes_pro: number, avg_note_pro: number, releaseDate: Date)  {
        this.title = title;
        this.imgUrl = imgUrl;
        this.director = director;
        this.producer = producer;
        this.category = category;
        this.actor = actor;
        this.synopsis = synopsis;
        this.ageMinimum = ageMinimum;
        this.nb_notes_public = nb_notes_public;
        this.avg_note_public = avg_note_public;
        this.nb_notes_pro = nb_notes_pro;
        this.avg_note_pro = avg_note_pro;
        this.releaseDate = releaseDate;
    }
}

