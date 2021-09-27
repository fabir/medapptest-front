import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { Consulta } from 'src/app/_model/consulta';
import { ConsultaService } from 'src/app/_service/consulta.service';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  cantidad: number = 0;
  displayedColumns = ['idConsulta', 'paciente','fechaConsulta', 'acciones'];
  dataSource: MatTableDataSource<Consulta>
  @ViewChild(MatSort, { static : true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private consultaService: ConsultaService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {

    this.consultaService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'AVISO', {
        duration: 2000
      });
    });

    this.consultaService.consultaCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.consultaService.listarPageable(0,10).subscribe(data => {
      console.log(data)
      this.cantidad = data.totalElements;
      this.dataSource = new MatTableDataSource(data.content);
      this.dataSource.sort = this.sort;
    });
  }

  filtrar(valor : string){
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  eliminar(idPaciente : number){
    this.consultaService.eliminar(idPaciente).subscribe( () => {
      this.consultaService.listar().subscribe(data => {
        this.consultaService.consultaCambio.next(data);
        this.consultaService.mensajeCambio.next('SE ELIMINO');
      });
    });
  }
  
 mostrarMas(e:any){
  this.consultaService.listarPageable(e.pageIndex,e.pageSize).subscribe(data => {
    console.log(data)
    this.cantidad = data.totalElements;
    this.dataSource = new MatTableDataSource(data.content);
    this.dataSource.sort = this.sort
  });
 }
}
