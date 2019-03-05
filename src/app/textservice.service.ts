import {Injectable, OnInit} from '@angular/core';
import {AboutText} from './about/abouttext';
import {Text} from './projects/text';

@Injectable()
export class TextService implements OnInit {

  public about: AboutText = new AboutText('Hallo mein Name ist Nicolas Eckerle. Ich bin 26 Jahre jung und ausgebildeter Mediengestalter in Digital und Print. Da ich schon immer auf der Suche nach neuen Herausforderungen war, beschloss ich nach meiner Ausbildung, nochmals meinen Horizont zu erweitern und an der Hochschule Schmalkalden zu studieren. Hier erlangte ich am 12.12.18 meinen Bachelor in Multimedia-Marketing.',
    'Im Allgemeinen würde ich mich als sehr kommunikative und teamfähige Person beschreiben, die neuen und kreativen, sowie innovativen Lösungen aufgeschlossen gegenübersteht. Denn gerade in unserer Welt, in der die Digitalisierung eine immer wichtigere Rolle einnimmt, ist es umso wichtiger neue Trends und technische Entwicklungen frühzeitig zu erkennen, um stehts optimale und moderne Problemlösungen anbieten zu können.');
  public text: Text = new Text('Nachdem man überall diese Rivertables sieht, dachte ich mir, das muss ich auch mal ausprobieren. Gesagt getan! Resin gekauft und mangels von passendem Werkzeug, einfach mit einer Handsäge Brennholz manuell auf 4 cm Höhe gesägt, anschließend mit gefärbten Epoxy aufgefüllt und mit LEDs ausgestattet.',
    'Für das erste Mal und ohne professionelles Werkzeug ist der kleine Tisch ganz "OK" geworden. Jedoch würde ich jedem von einem Selbstversuch abraten, wenn keine Oberfräse und Tischkreissäge vorhanden ist, da sonst der Aufwand einfach zu groß und das Ergebnis zu unsauber ist. Falls Sie nun so einen Tisch selber machen wollen und wissen möchten, wie viel KG Harz benötigt werden, finden Sie hier den passenden Rechner ;)',
    'Mein aktuelles Low-Buget Hobbyprojekt ist derzeit der Umbau eines Laptops - zu einem wassergekühlten All-in-One PC. Die benötigten Teile werden hierfür mit Fusion360 entworfen und mittels eines 3D-Druckers erstellt.');

  constructor() {
  }


  ngOnInit(): void {

  }

  getText() {
    return this.text;
  }

  getAbout() {
    return this.about;
  }


} 
