import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoxesService } from '../../services/boxes.service';
import { SurveyConfig, Workshop } from '../interface/workshop-interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-boxes',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,RouterModule],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss',
})
export default class BoxesComponent {
  boxesService = inject(BoxesService);
  router = inject(Router);
  firstWorkshop: any;
  rating: number = 0;
  feedback: string = '';
  workshop: Workshop | any = {};
  surveyConfig: SurveyConfig | any = {};
  texts: string[] = [];
  locationData: string = '';
  phoneNumber: string = '541134675692';
  showThanksMessage: boolean = false;
  showInitialTexts:boolean = true;

  constructor(){
    this.loadWorkshopData();
    this.loadSurveyConfig();
  }
  ngOnInit(): void {
    
  }

  loadWorkshopData(): void {
    this.boxesService.getFirstWorkshop().subscribe(
      (data) => {
        this.workshop = data;
        this.locationData = data.address;
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
        this.ratingText(data.mapping);

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

  ratingText(scoresObject: any): void {
    if (scoresObject && typeof scoresObject === 'object') {
      this.texts = Object.values(scoresObject);
    } else {
      console.error('El objeto de puntajes no es válido:', scoresObject);
    }
  }

  setRating(value: number): void {
    this.rating = value;
    this.showInitialTexts = false;
  }

  openGoogleMaps(): void {
    const locationParseData = JSON.parse(this.locationData);
    const { lat, lng } = locationParseData.geometry.location;
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  }

  openWhatsApp(): void {
    const url = `https://wa.me/${this.phoneNumber}`;
    window.open(url, '_blank');
  }

  resetParams(){
    window.location.reload();
  }

  submitFeedback(): void {
    const feedbackData = {
      calificacion: this.texts[this.rating],
      comentarios: this.feedback,
    };
    localStorage.setItem('feedback', JSON.stringify(feedbackData));
    this.showThanksMessage = true;
  }
}
