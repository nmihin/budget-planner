import { Injectable } from '@angular/core';
import { RecipesPageRoutingModule } from './recipes-routing.module';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://bit.ly/3eTBLy4',
      ingredients: ['French Fries', 'Pork meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Salad',
      imageUrl: 'https://bit.ly/32OvVvm',
      ingredients: ['Cheese', 'Pork meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
