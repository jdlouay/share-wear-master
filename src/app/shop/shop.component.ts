import { Component } from '@angular/core';
import { Article } from '../model/article.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  clothes: Article[] = [];
  currentImageIndexes: number[] = [];
  hoveredIndex: number = -1;

  constructor() {
    // Initialisation des articles
    this.clothes = [
      {
        id: 1,
        taille: 'M',
        desc: 'Manteau',
        etat: 'Bonne état',
        photo: ['assets/one.png', 'assets/two.png', 'assets/a.png'],
        prix: 10,
      },
      {
        id: 2,
        taille: 'L',
        desc: 'Veste',
        etat: 'Neuf',
        photo: ['assets/one.png', 'assets/c.png', 'assets/d.png'],
        prix: 20,
      },
      {
        id: 3,
        taille: 'S',
        desc: 'Pull',
        etat: 'Comme neuf',
        photo: ['assets/pull1.png', 'assets/pull2.png'],
        prix: 15,
      },
    ];

    // Initialisation des index des images
    this.currentImageIndexes = this.clothes.map(() => 0);
  }

  previousImage(index: number) {
    if (this.clothes[index] && this.clothes[index].photo) {
      const photos = this.clothes[index].photo;
      this.currentImageIndexes[index] =
        (this.currentImageIndexes[index] - 1 + photos.length) % photos.length;
    }
  }

  nextImage(index: number) {
    if (this.clothes[index] && this.clothes[index].photo) {
      const photos = this.clothes[index].photo;
      this.currentImageIndexes[index] = (this.currentImageIndexes[index] + 1) % photos.length;
    }
  }

  addToCart(article: Article) {
    console.log(`Article ajouté au panier : ${article.desc}`);
    // Ajoutez ici la logique pour gérer le panier
  }
}
