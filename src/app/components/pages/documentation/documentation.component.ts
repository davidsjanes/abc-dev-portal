import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})

export class DocumentationComponent implements AfterViewInit {
  @ViewChild('swagger') swaggerDom: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    SwaggerUIBundle({
      urls: [
        {
          name: "V1",
          // url: "https://petstore.swagger.io/v2/swagger.json",
          url: 'http://localhost:8080/src/exchange.json',
        },
      ],
      domNode: document.getElementById("swagger-ui"),
      deepLinking: true,
      presets: [SwaggerUIBundle["presets"].apis, SwaggerUIStandalonePreset],
      layout: "StandaloneLayout",
    });
  }
}
