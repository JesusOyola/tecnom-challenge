import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BoxesService } from '../../services/boxes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-boxes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss'
})
export default class BoxesComponent {
  /* boxesService = inject(BoxesService);
  firstWorkshop: any;

  ngOnInit(): void {
    this.boxesService.getFirstWorkshop().subscribe({
      next: (workshop) => {
        this.firstWorkshop = workshop;
        console.log('Primer workshop:', this.firstWorkshop);
      },
      error: (err) => {
        console.error('Error al obtener el primer workshop:', err);
      },
    });
  } */
}
