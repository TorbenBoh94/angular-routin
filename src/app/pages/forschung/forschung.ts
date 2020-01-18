export class Forschung {
      constructor(
        public forschungsprojekt:string,
        public autor:string,
        public publikationsTyp: string, //Buch,Artikel,Konferenzbeitrag,Masterthesis
        public jahr:Date,
        public volumen:string,
        public publisher:string,
        public school:string
    ) {}
}