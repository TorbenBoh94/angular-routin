export class Forschung {
      constructor(
        public forschungsprojekt:string,
        public autor:string,
        public publikationsTyp: string, //Buch,Artikel,Konferenzbeitrag,Masterthesis
        public jahr:number,
        public volumen:string,
        public publisher:string,
        public seiten:number,
        public school:string
    ) {}
}