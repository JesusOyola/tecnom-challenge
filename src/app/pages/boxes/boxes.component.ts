import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BoxesService } from '../../services/boxes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-boxes',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './boxes.component.html',
  styleUrl: './boxes.component.scss',
})
export default class BoxesComponent {
  boxesService = inject(BoxesService);
  firstWorkshop: any;
  rating: number = 0;
  feedback: string = '';
  workshop: any = {};
  surveyConfig: any = {};
  texts:string[] = [];
  locationData: string = '';
  phoneNumber:string = '541134675692';
  showThanksMessage: boolean = false;

  ngOnInit(): void {
    this.loadWorkshopData();
    this.loadSurveyConfig();
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
      //console.log('Texts cargados:', this.texts);
    } else {
      console.error('El objeto de puntajes no es válido:', scoresObject);
    }
  }

  setRating(value: number): void {
    this.rating = value;
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

  submitFeedback(): void {
    console.log('Calificación:', this.rating);
    console.log('Comentarios:', this.feedback);
    const feedbackData = {
      calificacion: this.texts[this.rating],
      comentarios: this.feedback,
    };
    localStorage.setItem('feedback', JSON.stringify(feedbackData));
    this.showThanksMessage = true;
    
  }
}
