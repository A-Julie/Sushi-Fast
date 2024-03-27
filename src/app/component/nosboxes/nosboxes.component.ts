import { Component } from '@angular/core';
import { Boxes } from '../../models/Boxes';
import { Panier } from '../../models/Panier';
import { ManageBoxesService } from '../../service/manage-boxes.service';
import { ManagePaniersService } from '../../service/manage-paniers.service';
import { ActivatedRoute } from '@angular/router';
import { LigneBoxes } from '../../models/LigneBoxes';

@Component({
  selector: 'app-nosboxes',
  templateUrl: './nosboxes.component.html',
  styleUrl: './nosboxes.component.css'
})
export class NosboxesComponent {

  boxes: Array<Boxes>
  constructor(private manageBoxesServices: ManageBoxesService, private route: ActivatedRoute, private panierService: ManagePaniersService) {
    this.boxes = []

    manageBoxesServices.getBoxes().subscribe((resultat) => {
      this.boxes = resultat
      console.log(this.boxes)
    })

  }

  ajouter(uneBox: Boxes) {
    this.panierService.addBoxes(uneBox, 1)

  }




}
