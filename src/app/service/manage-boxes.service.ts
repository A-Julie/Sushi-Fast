import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Boxes } from '../models/Boxes';
import { Router } from '@angular/router';
import { Panier } from '../models/Panier';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManageBoxesService {

  constructor(private http:HttpClient, private route: ActivatedRoute, private router: Router){
    this.boxes=[]
  }
  //Méthode qui affiche les boxes
  public getBoxes () : Observable<any> {
    return this.http.get(environment.apiBaseUrl);
    }

  getAllBoxes(): Boxes[] {
    return JSON.parse(localStorage.getItem('') || '[]');
    }

  
  //Méthode qui ajoute une/des boxe(s) au panier

  public addBoxes(){}

  //Méthode qui supprime une boxe du panier

  public deleteBoxe(){}

  //Méthode qui consulte le contenu du panier

  public getPanier() : Panier[] {
    return JSON.parse(localStorage.getItem('') || '[]');
  }

  //Méthode qui calcule le prix du panier

  public pricePanier(){}

  //Méthode qui consulter le statut du panier

  //Méthode qui supprime un panier


  // Charger les détails de la boîte avec le nom correspondant depuis du backend.

  nomBoxe: String=""
  boxes : Array<Boxes>

  
  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.nomBoxe = params['nom'];
    });
  }

  getDetails(boxes: Boxes) {
    const boxeId = boxes ? boxes.id : null;
    this.router.navigate(['/details-boxes', { id: boxeId }]);
  }
}
