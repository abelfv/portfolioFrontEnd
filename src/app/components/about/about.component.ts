import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { TokenService } from 'src/app/service/token.service';
import { personaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{
  persona: persona = null

  constructor(public personaService: personaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data => {this.persona = data})
  }
}
