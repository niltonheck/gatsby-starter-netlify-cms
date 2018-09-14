import React from 'react'
import avatar from '../img/avatar.png'

const LeftMenu = () => (
	<section className="LeftMenuContent">
		<div className="avatar">
			<div className="has-text-left">
				<span className="is-small-header">Sobre Mim</span>
			</div>
			<div>
				<img className="is-rounded" src={avatar} />
			</div>
			<p>Programador, graduado em Gestão da Informação pela Universidade Federal de Pernambuco, pós-graduando em Ciência de Dados pela POLI-UPE, e gestor executivo na CONBUSS.</p>
			<p>Especialista em Seguranção da Informação na WEB e Google Analytics.</p>
			<p>
				Pesquisador na área de dados públicos. Assuntos de interesse: <span class="is-interest">ciência de dados</span>, <span class="is-interest">web performance</span>, <span class="is-interest">virtualização</span>, <span class="is-interest">desenvolvimento</span>.
			</p>
		</div>
	</section>
)

export default LeftMenu 
