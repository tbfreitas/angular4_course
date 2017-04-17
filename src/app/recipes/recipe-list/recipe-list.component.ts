import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Receita mongol', 'Receita para fazer o cara mais mongol do universo' ,'https://supervalu.ie/image/var/files/real-food/recipes/operation-transformation-recipes/fish-cakes-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
