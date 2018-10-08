import {Component, OnInit} from '@angular/core';
import { DonneesService } from '../../services/donnees.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  nom: string;
  prenom: string;
  age: number;
  email: string;
  hobby: Hobby;

  titleUse = 'page utilisateur';

  constructor(private donnees: DonneesService) {
  }

  ngOnInit() {
    this.nom = 'ABID';
    this.prenom = 'Adnen';
    this.age = 32;
    this.email = 'mail@mail.com';
    this.hobby = {
      hobbyUn: 'Lire',
      hobbyDeux: 'Tennis',
      hobbyTrois: 'Football'
    };
  }

  onClick() {
    alert('bonjour her  ');
  }
}
interface Hobby {
  hobbyUn: string;
  hobbyDeux: string;
  hobbyTrois: string;
}

