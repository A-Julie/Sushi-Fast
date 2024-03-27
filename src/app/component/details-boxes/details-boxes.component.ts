import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boxes } from '../../models/Boxes';
import { Panier } from '../../models/Panier';
import { ManageBoxesService } from '../../service/manage-boxes.service';

@Component({
  selector: 'app-details-boxes',
  templateUrl: './details-boxes.component.html',
  styleUrl: './details-boxes.component.css'
})

export class DetailsBoxesComponent {

  boxes: Array<Boxes>
  laBox: Boxes | undefined
  constructor(manageBoxesServices: ManageBoxesService, private route: ActivatedRoute) {

    this.boxes = []

    manageBoxesServices.getBoxes().subscribe((resultat) => {

      this.boxes = resultat
      const boxeId = Number(this.route.snapshot.paramMap.get('id'));
      this.laBox = this.boxes.find((uneBox) => uneBox.id == boxeId)
      console.log(this.boxes)

    })
    
  }


  /* for (const uneBox of this.boxes) {
      if(this.nomBoxe==uneBox.nom){
        return uneBox
      }
  }
  return undefined */
}
