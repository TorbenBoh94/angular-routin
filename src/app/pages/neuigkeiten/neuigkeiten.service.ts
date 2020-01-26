import { Injectable } from '@angular/core';
import {Neuigkeiten} from './neuigkeiten'

@Injectable()
export class NeuigkeitenService {
edit=false;
index:number;
  constructor() { }
currentDate: Date= new Date();
news=[
  new Neuigkeiten("Mal schauen, wie ein Campus so aussieht","Der zweite gemeinsame Studieninfotag der beiden Flensburger Hochschulen war gut besucht: Knapp 400 Schülerinnen und Schüler aus ganz Deutschland informierten sich über das Campusleben.","https://hs-flensburg.de/sites/default/files/styles/frontpage_s/public/aktuelles/2020-01/vortrag.jpg?h=6b108d98&itok=UfZyVPsB","2018-09-15 17:17:30.0"),
  new Neuigkeiten("eHealth for Regions","Am 15. und 16. Januar 2020 fand das internationale Partnertreffen des 'eHealth for Regions'-Netzwerk am Institut für eHealth und Management im Gesundheitswesen(IEMG) der Hochschule Flensburg mit Partnern aus der Baltiv Sea Region statt","https://hs-flensburg.de/sites/default/files/styles/frontpage_s/public/aktuelles/2020-01/20.01.2020_pressefoto_zu_ehealth_for_regions_lehr.jpeg?h=52d3fcb6&itok=YQOf2cB2","2018-11-25 17:17:30.0"),
  new Neuigkeiten("Wind energy solutions madin in Schleswig-Holstein","Flüsterleise, umweltverträglich und wiederverwertbar: Studenten der HS Flensburg und der FH Kiel entwickeln innovative 'Low Emission'-Windenergieanlage","https://hs-flensburg.de/sites/default/files/styles/frontpage_s/public/aktuelles/2020-01/20.01.2020_optimus_maximilian_hollander-quast_paul_meyer.jpg?h=8b1a521b&itok=vPIBQfGY","2018-10-16 17:17:30.0"),
  new Neuigkeiten("Virtual Reality Play Day","Die Bachelor Sturdierenden des Studiengangs Medieninformatik starten in die Virtuelle Realität.","https://hs-flensburg.de/sites/default/files/styles/frontpage_s/public/aktuelles/2020-01/bild.png?h=2765ece5&itok=W5ohgyzH","2018-08-15 17:17:30.0"),
  new Neuigkeiten("Das Kreative Umfeld lockte ihn nach Flensburg","Probleme der Zukunft lösen: Torben Wallbaum ist seit diesem Semester für Human-Computer-Interaction an der Hochschule Flensburg","https://hs-flensburg.de/sites/default/files/styles/frontpage_s/public/aktuelles/2019-12/wallbaum_torben_f.jpg?h=265bf0ee&itok=mJ-pNYfq","2018-08-15 17:17:30.0"),
  new Neuigkeiten("Sixpack für Usability- Sturdierende auf Konferenz","'Mensch und Computer', so lautet der Titel der wichtigsten Konferenz in Deutschland im Bereich Mensch Computer Interaktion und Usability. In diesem Jahr war die Hochschule Flensburg mit sechs eigenen Beiträgen vertreten","https://hs-flensburg.de/sites/default/files/styles/frontpage_s/public/aktuelles/2019-12/muc2019_3.jpg?h=dffc41e0&itok=5DBH8w3R","2018-08-15 17:55:30.0")

  ];
post={
  name:"",
  beschreibung:"",
  img:"",
  date:this.currentDate
  
  }
  output(){
     return this.news;
   }

  onAddnews(){
    this.currentDate= new Date();
    this.post.date=this.currentDate;
    this.news.push(
      new Neuigkeiten(this.post.name,this.post.beschreibung,this.post.img,this.post.date)
    )
    
    this.post={
      name:"",
      beschreibung:"",
      img:"",
      date:this.currentDate
    }
  }
  onEdit(index:number){
    this.edit=true;
      
    this.post.name=this.news[index].name;
    this.post.beschreibung=this.news[index].beschreibung;
    this.post.img=this.news[index].img;
    this.index=index;
  }
  onEditnews(){
    this.news[this.index].name=this.post.name;
    this.news[this.index].beschreibung=this.post.beschreibung;
    this.news[this.index].img=this.post.img;
 
    this.edit=false;
    this.post.name="";
    this.post.beschreibung="";
    this.post.img="";
  }

  onDelete(index:number){
    this.news.splice(index,1)
  }

  //Sortierung um immer die Aktuellste News als erstes Anzuzeigen
  get sortData() {
    return this.news.sort((a, b) => {
      
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

}