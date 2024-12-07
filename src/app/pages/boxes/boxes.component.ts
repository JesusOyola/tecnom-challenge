import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BoxesService } from '../../services/boxes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-boxes',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss',
})
export default class BoxesComponent {
  boxesService = inject(BoxesService);
  firstWorkshop: any;
  rating: number = 0;
  feedback: string = '';
  workshop: any;
  surveyConfig: any;

  ngOnInit(): void {
    this.loadWorkshopData();
    this.loadSurveyConfig();
  }
  
  loadWorkshopData(): void {
    this.boxesService.getFirstWorkshop().subscribe(
      (data) => {
        this.workshop = data;
        console.log('Taller:', this.workshop);
      },
      (error) => {
        console.error('Error al cargar el taller:', error);
      }
    );
  }

  
  loadSurveyConfig(): void {
    this.boxesService.getSurveyConfig().subscribe(
      (data) => {
        this.surveyConfig = data;
        console.log('Configuración de encuesta:', this.surveyConfig);
      },
      (error) => {
        console.error(
          'Error al cargar la configuración de la encuesta:',
          error
        );
      }
    );
  }

  get ratingText(): string {
    const texts = [
      'nada satisfecho',
      'Insatisfecho',
      'Indiferente',
      'Satisfecho',
      'muy satisfecho',
    ];
    return texts[this.rating - 1];
  }

  setRating(value: number): void {
    this.rating = value;
  }

  submitFeedback(): void {
    console.log('Calificación:', this.rating);
    console.log('Comentarios:', this.feedback);
    alert('¡Gracias por tu feedback!');
  }
}
