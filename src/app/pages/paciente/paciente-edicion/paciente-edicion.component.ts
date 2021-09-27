import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Paciente } from 'src/app/_model/paciente';
import { PacienteService } from 'src/app/_service/paciente.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-paciente-edicion',
  templateUrl: './paciente-edicion.component.html',
  styleUrls: ['./paciente-edicion.component.css']
})
export class PacienteEdicionComponent implements OnInit {

  form: FormGroup;
  id: number;
  edicion:boolean;

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'id' : new FormControl(0),
      'nombres' : new FormControl('',[Validators.required]),
      'apellidos' : new FormControl(''),
      'dni': new FormControl(''),
      'telefono': new FormControl(''),
      'direccion': new FormControl('')
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.edicion = params['id'] != null;
        this.initForm();
      }
    );
  }

  get f(){return this.form.controls};

  operar(){

    if(this.form.invalid){
     return;
    }

    let paciente = new Paciente();
    paciente.idPaciente = this.form.value['id'];
    paciente.nombres = this.form.value['nombres'];
    paciente.apellidos = this.form.value['apellidos'];
    paciente.dni = this.form.value['dni'];
    paciente.telefono = this.form.value['telefono'];
    paciente.direccion = this.form.value['direccion'];
    
    if(this.edicion){
      this.pacienteService.modificar(paciente).subscribe(()=>{
        this.pacienteService.listar().subscribe(data =>{
             this.pacienteService.pacienteCambio.next(data);
             this.pacienteService.mensajeCambio.next('SE MODIFICO');
        });
      });
    }else{
      this.pacienteService.registrar(paciente).subscribe(()=>{
        this.pacienteService.listar().subscribe(data =>{
          this.pacienteService.pacienteCambio.next(data);
          this.pacienteService.mensajeCambio.next('SE REGISTRO');
     });
      });
    }
    this.router.navigate(['paciente']);
  }

  initForm(){
   if(this.edicion){
    this.pacienteService.listarPorId(this.id).subscribe(
      data => {
        this.form = new FormGroup({
          'id' : new FormControl(data.idPaciente),
          'nombres' : new FormControl(data.nombres),
          'apellidos' : new FormControl(data.apellidos),
          'dni': new FormControl(data.dni),
          'telefono': new FormControl(data.telefono),
          'direccion': new FormControl(data.direccion)
        });
      }
    );
   }
  }
}
