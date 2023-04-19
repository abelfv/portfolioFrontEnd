import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  usuario: usuario = null;

  constructor(private activatedRouter: ActivatedRoute, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.usuarioService.detail(id).subscribe(data => {
      this.usuario = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.usuarioService.update(id, this.usuario).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar la educacion");
      this.router.navigate(['']);
    });
  }
  }

  upLoadImage($event: any) {

  }
}
