import { Component } from '@angular/core';
import { Boxes } from '../../models/Boxes';
import { Panier } from '../../models/Panier';
import { ManageBoxesService } from '../../service/manage-boxes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nosboxes',
  templateUrl: './nosboxes.component.html',
  styleUrl: './nosboxes.component.css'
})
export class NosboxesComponent {

  boxes : Array<Boxes>
  constructor(private manageBoxesServices : ManageBoxesService, private route: ActivatedRoute){
    this.boxes=[]

   manageBoxesServices.getBoxes().subscribe((resultat)=>{
    this.boxes = resultat
    console.log(this.boxes)
    })

    }

}
