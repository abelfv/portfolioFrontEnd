import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from 'src/app/model/usuario.model';
import { ImageService } from 'src/app/service/image.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  usuario: usuario = null;

  constructor(private activatedRouter: ActivatedRoute, private usuarioService: UsuarioService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.usuarioService.detail(id).subscribe(data => {
      this.usuario = data;
    }, err => {
      alert("ERROR AL MODIFICAR");
      this.router.navigate(['']);
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.usuario.img = this.imageService.url
    this.usuarioService.update(id, this.usuario).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("ERROR AL MODIFICAR EDUCACION");
      this.router.navigate(['']);
    });
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
