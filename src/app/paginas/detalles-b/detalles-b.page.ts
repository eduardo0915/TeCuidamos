import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-b',
  templateUrl: './detalles-b.page.html',
  styleUrls: ['./detalles-b.page.scss'],
})
export class DetallesBPage implements OnInit {
slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/a8.png',
      titulo: 'Desecho de medicamentos ',
      desc: 'Si nuestro botiquín está lleno de medicamentos que ya no utilizamos o caducado, existe una manera de desecharlo sin afectar el medio ambiente, el método que se elija puede tener un efecto directo solo el ambiente. '
    },
    {
      img: '/assets/a2.jpeg',
      titulo: 'Cómo deshacerse debidamente de los medicamentos:',
      desc: '-Siga las instrucciones para deshacerse del medicamento si están disponibles en la etiqueta o la información para el paciente que se incluye con el mismo. '
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: '-Siga las instrucciones para deshacerse del medicamento si están disponibles en la etiqueta o la información para el paciente que se incluye con el mismo. No arroje el medicamento en el inodoro o fregadero a no ser que la información incluida con el medicamento así lo indique.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
