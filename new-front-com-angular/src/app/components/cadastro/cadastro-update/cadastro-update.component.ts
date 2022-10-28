import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css']
})
export class CadastroUpdateComponent implements OnInit {

  constructor(private cadastroService: CadastroService, 
              private router: Router, 
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = !this.route.snapshot.paramMap.get('id')
  }

}
