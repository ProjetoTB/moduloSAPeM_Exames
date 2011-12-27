
function soroRow(numSoro){
	if(numSoro % 2 == 0) var cRow = 'even';
	else var cRow = 'odd';
	var content = ($('<tr>')
		.addClass(cRow)
		.attr('id', 'soro_'+numSoro)
		.append($('<td />').appendText(numSoro+''))
		.append($('<td />')
			.append($('<select>')
				.addClass('soro')
				.addClass('required')
				.attr('name', 'soroColetado_' + numSoro)
				.attr('id'  , 'soroColetado_' + numSoro)
				.append($("<option value=''>  </option>"))
				.append($("<option value='sim'> Sim  </option>"))
				.append($("<option value='nao'> N&atilde;o  </option>"))
				.append($("<option value='ignorado'> Ignorado  </option>"))
			)
		)
		.append($('<td />')
			.append($('<input>')
				.addClass('number')
				.attr('name', 'numeroSoro_' + numSoro)
				.attr('disabled', 'disabled')
				.attr('id', 'numeroSoro_'+numSoro)
			)
		)
	);
	return content;
}

function sangueRow(numSangue){
	if(numSangue % 2 == 0) var cRow = 'even';
	else var cRow = 'odd';
	var content = ($('<tr>')
		.addClass(cRow)
		.attr('id', 'sangue' + numSangue)
		.append($('<td />').appendText(numSangue+''))
		.append($('<td />')
			.append($('<select>')
				.addClass('sangue')
				.addClass('required')
				.attr('name', 'sangueColetado_' + numSangue)
				.attr('id'  , 'sangueColetado_' + numSangue)
				.append($("<option value=''> </option>"))
				.append($("<option value='sim'> Sim  </option>"))
				.append($("<option value='nao'> N&atilde;o  </option>"))
				.append($("<option value='ignorado'> Ignorado  </option>"))
			)
		)
		.append($('<td />')
			.append($('<input>')
				.addClass('number')
				.attr('name', 'numeroSangue_' + numSangue)
				.attr('disabled', 'disabled')
				.attr('id', 'numeroSangue_'+numSangue)
			)
		)
	);
	return content;
}

function CEPARow(numCepa){
	if(numCepa % 2 == 0) var cRow = 'even';
	else var cRow = 'odd';
	var content = ($('<tr>')
		.addClass(cRow)
		.append($('<td />')
			.append($('<select /> ')
				.attr('name', 'origem_cepa_' + numCepa)
				.attr(  'id', 'origem_cepa_' + numCepa)
				.addClass('origem_cepa')
				.append($('<option></option>'))
			)
			.attr('rowspan', '6')
		)
		.append($('<td />')
			.append('Número')
			.addClass('description')
		)
		.append($('<td/>')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'numero_cepa_' + numCepa)
				.attr(  'id', 'numero_cepa_' + numCepa)
				.addClass('number')
				.attr('size', '4')
			)
		)
		.append($('<td/>')
			.append('Método')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.css(  'width', '100px')
				.attr('name', 'baciloscopia_metodo_' + numCepa)
				.attr(  'id', 'baciloscopia_metodo_' + numCepa)
				.addClass('baciloscopia_metodo')
				.append($('<option> </option>')
					.attr('value', '')
				)
				.append($('<option> Ziehl </option>')
					.attr('value', 'ziehl')
				)
				.append($('<option> Fluorescência </option>')
					.attr('value', 'fluorescencia')
				)
			)
		)
	);
	content = $.merge($.merge([], content), $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Data da coleta')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'data_cepa_' + numCepa)
				.attr(  'id', 'data_cepa_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
				.css('margin-right', '8px')
			)
			.appendText('hora: ')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'hora_cepa_' + numCepa)
				.attr(  'id', 'hora_cepa_' + numCepa)
				.addClass('hour')
				.attr('size', '5')
				.attr('maxlength','5')
			)
		)
		.append($('<td />')
			.append('Resultado do BAAR')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.css(  'width', '100px')
				.attr('name', 'baciloscopia_resultado_cepa_' + numCepa)
				.attr(  'id', 'baciloscopia_resultado_cepa_' + numCepa)
				.addClass('baciloscopia_resultado_cepa')
				.append($('<option> </option>')
					.attr('value', '')
				)
				.append($('<option> Negativo </option>')
					.attr('value', 'negativo')
				)
				.append($('<option> Ignorado </option>')
					.attr('value', 'ignorado')
				)
				.append($('<option> Positivo </option>')
					.attr('value', 'positivo')
				)
				.append($('<option> Positivo Paucibacilar </option>')
					.attr('value', 'positivo_paucibacilar')
				)
				.append($('<option> + </option>')
					.attr('value', '+')
				)
				.append($('<option> ++ </option>')
					.attr('value', '++')
				)
				.append($('<option> +++ </option>')
					.attr('value', '+++')
				)
			)
		)
	);
	content = $.merge($.merge([], content), $('<tr />')
		.addClass(cRow)
		.addClass(cRow)
		.append($('<td />')
			.append('Data do Recebimento no labo')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'data_recebimento_cepa_' + numCepa)
				.attr(  'id', 'data_recebimento_cepa_' + numCepa)
				.attr('size', '10')
				.addClass('data')
				.attr('readonly', 'readonly')
				.css('margin-right', '8px')
			)
			.appendText('hora: ')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'hora_recebimento_cepa_' + numCepa)
				.attr(  'id', 'hora_recebimento_cepa_' + numCepa)
				.addClass('hour')
				.attr('size', '5')
				.attr('maxlength','5')
			)
		)
		.append($('<td />')
			.append('Data do Resultado BAAR')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'baciloscopia_data_' + numCepa)
				.attr(  'id', 'baciloscopia_data_' + numCepa)
				.attr('size', '10')
				.addClass('data')
				.attr('readonly', 'readonly')
				.css('margin-right', '8px')
			)
			.appendText('hora: ')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'baciloscopia_hora_' + numCepa)
				.attr(  'id', 'baciloscopia_hora_' + numCepa)
				.addClass('hour')
				.attr('size', '5')
				.attr('maxlength','5')
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Aspecto do escarro')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.css(  'width', '100px')
				.attr('name', 'aspecto_escarro_' + numCepa)
				.attr(  'id', 'aspecto_escarro_' + numCepa)
				.addClass('aspecto_escarro')
				.append($('<option> </option>')
					.attr('value', '')
				)
				.append($('<option> Saliva </option>')
					.attr('value', 'saliva')
				)
				.append($('<option> Muco Purulento </option>')
					.attr('value', 'muco_purulento')
				)
				.append($('<option> Sanguinolento </option>')
					.attr('value', 'sanguinolento')
				)
				.append($('<option> Liquefeito </option>')
					.attr('value', 'liquefeito')
				)
			)
		)
		.append($('<td />')
			.append('Responsável pela coleta')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'baciloscopia_coleta_responsavel_' + numCepa)
				.attr(  'id', 'baciloscopia_coleta_responsavel_' + numCepa)
				.attr('size', '15')
				.addClass('text')
				.addClass('analise_responsavel')
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Tipo')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.attr('name', 'material_cepa_' + numCepa)
				.attr(  'id', 'material_cepa_' + numCepa)
				.addClass('material_cepa')
				.append($('<option> ---- </option>'))
				.append($('<option> Espontâneo </option>')
					.attr('value', 'escarro_espontaneo')
				)
				.append($('<option> Induzido </option>')
					.attr('value', 'escarro_induzido')
				)
				.append($('<option> LBA </option>')
					.attr('value', 'lba')
				)
				.append($('<option> Lavado Traquial </option>')
					.attr('value', 'lavadoTraquial')
				)
			)
		)
		.append($('<td />')
			.append('Responsável pelo exame')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'analise_responsavel_' + numCepa)
				.attr(  'id', 'analise_responsavel_' + numCepa)
				.attr('size', '15')
				.addClass('text')
				.addClass('analise_responsavel')
			)
		)

	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td colspan="2"/>'))
		.append($('<td />')
			.append('Data do Receb médico/enferm')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'baciloscopia_data_recebimento_medico_' + numCepa)
				.attr(  'id', 'baciloscopia_data_recebimento_medico_' + numCepa)
				.attr('size', '10')
				.addClass('data')
				.attr('readonly', 'readonly')
				.css('margin-right', '8px')
			)
		)
	);
	content = ($('<tbody cepanum="'+numCepa+'">').append(content))
	return content;
}

$(document).ready( function(){
	var cepaNum = 1;
	var content = CEPARow(cepaNum);
	$('table.cepa').append(content);
	loadUnidadesSaude('#origem_cepa_', cepaNum);
	// add row button
	
	$("#addline_button").click(function(){
		var origemStr = $('#origem_cepa_'+ cepaNum).val();
		if(origemStr.replace(/-/g,'')){
			cepaNum++;
			var content = CEPARow(cepaNum);
			$('table.cepa').append(CEPARow(cepaNum));
			loadUnidadesSaude('#origem_cepa_', cepaNum);
			$('input.data').datepicker({
				dateFormat: 'dd/mm/yy',
				monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
				maxDate: '+0d',
				dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
			});
		}
	});

	/*---------------------------Auxiliar function-------------------------------*/
	$.fn.compareDate = function(argumento){
		//Essa funcao eh utilizada para comprar a ordem
		//cronologica entre duas datas.
		//Caso a data do argumento seja menor, e retornado o numero 1
		//caso contrario, e retornado -1

		//Caso uma delas nao foi preenchida, a funcao retorna 0
		if ($(this).val().length == 0 || $(argumento).val().length == 0)
			return 0;
		//Criacao de um array contendo dia, mes e ano
		var arrayData1 = $(this).val().split('/');
		var arrayData2 = $(argumento).val().split('/');
		var ano1 = parseInt(arrayData1[2],10);
		var ano2 = parseInt(arrayData2[2],10);
		var mes1 = parseInt(arrayData1[1],10);
		var mes2 = parseInt(arrayData2[1],10);
		var dia1 = parseInt(arrayData1[0],10);
		var dia2 = parseInt(arrayData2[0],10);
		//Compara anos
		if (ano1 > ano2)
			return 1;
		else if (ano1 < ano2)
			return -1;
		else
		{
			//Compara mes
			if (mes1 > mes2)
				return 1;
			else if (mes1 < mes2)
				return -1;
			else
			{
				//Compara dia
				if (dia1 > dia2)
					return 1;
				else if (dia1 < dia2)
					return -1;
				else return 0;
			}
		}

	}
	/*---------------------------------------------------------------------------*/
	
	$('select.origem_cepa').livequery('change', function(){
		var origemStr = $(this).val();
		num = parseInt($(this).attr('id').split('_')[2]);
		if(origemStr.replace(/-/g,'')){
			$('#numero_cepa_' + num).removeAttr('disabled');
			$('#data_cepa_' + num).removeAttr('disabled');
			$('#hora_cepa_' + num).removeAttr('disabled');
			$('#data_recebimento_cepa_' + num).removeAttr('disabled');
			$('#hora_recebimento_cepa_' + num).removeAttr('disabled');
			$('#aspecto_escarro_' + num).removeAttr('disabled');
			$('#material_cepa_' + num).removeAttr('disabled');
			$('#baciloscopia_metodo_' + num).removeAttr('disabled');
			$('#baciloscopia_resultado_cepa_' + num).removeAttr('disabled');
			$('#baciloscopia_coleta_responsavel_' + num).removeAttr('disabled');
			$('#baciloscopia_data_' + num).removeAttr('disabled');
			$('#baciloscopia_hora_' + num).removeAttr('disabled');;
			$('#analise_responsavel_' + num).removeAttr('disabled');
			$('#baciloscopia_data_recebimento_medico_' + num).removeAttr('disabled');

			$('#data_recebimento_cepa_' + num).livequery('change', function(){
				/* Em 17/06, Dani solicitou retirada de obrigatoriedade dos campos 'Hora'
				if ($(this).val())
					$('#hora_recebimento_cepa_'+num).addClass('required');
				else
					$('#hora_recebimento_cepa_'+num).removeClass('required');
				*/

				if ($($('#data_recebimento_cepa_' + num)).compareDate($('#baciloscopia_data_' + num)) > 0)
				{
					alert("A 'Data do Recebimento no laboratório' deve ser anterior à 'Data do Resultado BAAR'");
					$(this).val('');
				}
				if ($($('#data_recebimento_cepa_' + num)).compareDate($('#data_cepa_' + num)) < 0)
				{
					alert("A 'Data do Recebimento no laboratório' deve ser posterior à 'Data da coleta'");
					$(this).val('');
				}

				if ($($(this)).compareDate($('#baciloscopia_data_recebimento_medico_' + num)) > 0){
					alert("A 'Data do Recebimento no laboratório' deve ser anterior à 'Data do Recebimento pelo médico/enfermeiro'");
					$(this).val('');
				}
			});
			$('#data_cepa_' + num).livequery('change', function(){
				/* Em 17/06, Dani solicitou retirada de obrigatoriedade dos campos 'Hora'
				if ($(this).val())
					$('#hora_cepa_' + num).addClass('required');
				else
					$('#hora_cepa_' + num).removeClass('required');
				*/
				if ($($('#data_cepa_' + num)).compareDate($('#data_recebimento_cepa_' + num)) > 0)
				{
					alert("A 'Data da coleta' deve ser anterior à 'Data do Recebimento no laboratório'");
					$(this).val('');
				}
				if ($($('#data_cepa_' + num)).compareDate($('#baciloscopia_data_' + num)) > 0)
				{
					alert("A 'Data da coleta' deve ser anterior à 'Data do Resultado BAAR'");
					$(this).val('');
				}
				if ($($(this)).compareDate($('#baciloscopia_data_recebimento_medico_' + num)) > 0){
					alert("A 'Data da coleta' deve ser anterior à 'Data do Recebimento pelo médico/enfermeiro'");
					$(this).val('');
				}
			});
			$('#baciloscopia_data_' + num).livequery('change', function(){
				/* Em 17/06, Dani solicitou retirada de obrigatoriedade dos campos 'Hora'
				if ($(this).val())
					$('#baciloscopia_hora_cepa_' + num).addClass('required');
				else
					$('#baciloscopia_hora_cepa_' + num).removeClass('required');
				*/
				if ($($('#baciloscopia_data_' + num)).compareDate($('#data_cepa_' + num)) < 0)
				{
					alert("A 'Data do Resultado BAAR' deve ser posterior à 'Data da coleta'");
					$(this).val('');
				}
				if ($($('#data_recebimento_cepa_' + num)).compareDate($('#baciloscopia_data_' + num)) > 0)
				{
					alert("A 'Data do Resultado BAAR' deve ser posterior à 'Data do Recebimento no laboratório'");
					$(this).val('');
				}
				if ($($(this)).compareDate($('#baciloscopia_data_recebimento_medico_' + num)) > 0){
					alert("A 'Data do Resultado BAAR' deve ser anterior à 'Data do Recebimento pelo médico/enfermeiro'");
					$(this).val('');
				}
			});
			$('#baciloscopia_data_recebimento_medico_' + num).livequery('change', function(){
				if ($($(this)).compareDate($('#data_cepa_' + num)) < 0){
					alert("A 'Data do recebimento pelo médico/enfermeiro' deve ser posterior à 'Data da coleta'");
					$(this).val('');
				}
				if ($($(this)).compareDate($('#baciloscopia_data_' + num)) < 0){
					alert("A 'Data do recebimento pelo médico/enfermeiro' deve ser posterior à 'Data do Resultado BAAR'");
					$(this).val('');
				}
				if ($($(this)).compareDate($('#data_recebimento_cepa_' + num)) < 0){
					alert("A 'Data do recebimento pelo médico/enfermeiro' deve ser posterior à 'Data do Recebimento no laboratório'");
					$(this).val('');
				}
			});
			var jaFoi = false;
			$('#baciloscopia_metodo_' + num).livequery('change', function(){
				if ($('#baciloscopia_metodo_' + num).val() == 'fluorescencia' && (!jaFoi))
				{
					$('#baciloscopia_resultado_cepa_' + num).append('<option id="baar4Positivos" value="++++">++++</option>');
					jaFoi = true;
				}else if ($('#baciloscopia_metodo_' + num).val() == 'ziehl' && jaFoi){
					$('#baar4Positivos').remove();
					jaFoi = false;
				}
			});
		} else {
			//$('#hora_cepa_' + num).removeClass('required');
			//$('#hora_recebimento_cepa_'+num).removeClass('required');
			//$('#baciloscopia_hora_cepa_' + num).removeClass('required');
			$('#aspecto_escarro_' + num).attr('disabled', true);
			$('#aspecto_escarro_' + num).val('----');
			$('#baciloscopia_metodo_' + num).attr('disabled', true);
			$('#baciloscopia_metodo_' + num).val('----');
			$('#baciloscopia_coleta_responsavel_' + num).attr('disabled',true);
			$('#baciloscopia_coleta_responsavel_' + num).val('');
			$('#baciloscopia_resultado_cepa_' + num).attr('disabled', true);
			$('#baciloscopia_resultado_cepa_' + num).val('----');
			$('#baciloscopia_data_' + num).attr('disabled', true);
			$('#baciloscopia_data_' + num).val('');
			$('#baciloscopia_hora_' + num).attr('disabled', true);
			$('#baciloscopia_hora_' + num).val('');
			$('#numero_cepa_' + num).attr('disabled', true);
			$('#numero_cepa_' + num).val('');
			$('#analise_responsavel_' + num).attr('disabled',true);
			$('#analise_responsavel_' + num).val('');
			$('#data_cepa_' + num).attr('disabled', true);
			$('#data_cepa_' + num).val('');
			$('#hora_cepa_' + num).attr('disabled', true);
			$('#hora_cepa_' + num).val('');
			$('#data_recebimento_cepa_' + num).attr('disabled', true);
			$('#data_recebimento_cepa_' + num).val('');
			$('#hora_recebimento_cepa_' + num).attr('disabled', true);
			$('#analise_responsavel_' + num).val('');
			$('#analise_responsavel_' + num).attr('disabled', true);
			$('#hora_recebimento_cepa_' + num).val('');
			$('#material_cepa_' + num).attr('disabled', true);
			$('#material_cepa_' + num).val('');
			$('#baciloscopia_data_recebimento_medico_' + num).attr('disabled', true);
			$('#baciloscopia_data_recebimento_medico_' + num).val('');

			$('#data_recebimento_cepa_' + num).livequery('change', function(){
				if (Date.parse($('#data_recebimento_cepa_' + num).val()) > Date.parse($('#baciloscopia_data_' + num).val()))
				{
					alert('A Data do Recebimento deve ser anterior à Data do Resultado');
					$('#data_recebimento_cepa_' + num).val('');
					$('#baciloscopia_data_' + num).val('');
				}
			});
			$('#data_cepa_' + num).livequery('change', function(){
				if (Date.parse($('#data_cepa_' + num).val()) > Date.parse($('#baciloscopia_data_' + num).val()))
				{
					alert('A Data da Coleta deve ser anterior à Data do Resultado');
					$('#data_cepa_' + num).val('');
					$('#baciloscopia_data_' + num).val('');
				}
			});
			$('#baciloscopia_data_' + num).livequery('change', function(){
				if (Date.parse($('#data_recebimento_cepa_' + num).val()) > Date.parse($('#baciloscopia_data_' + num).val()))
				{
					alert('A Data do Recebimento deve ser anterior à Data do Resultado');
					$('#data_recebimento_cepa_' + num).val('');
					$('#baciloscopia_data_' + num).val('');
				}
				if (Date.parse($('#data_cepa_' + num).val()) > Date.parse($('#baciloscopia_data_' + num).val()))
				{
					alert('A Data da Coleta deve ser anterior à Data do Resultado');
					$('#data_cepa_' + num).val('');
					$('#baciloscopia_data_' + num).val('');
				}
			});
			var jaFoi = false;
			$('#baciloscopia_metodo_' + num).livequery('change', function(){
				if ($('#baciloscopia_metodo_' + num).val() == 'fluorescencia' && (!jaFoi))
				{
					$('#baciloscopia_resultado_cepa_' + num).append('<option id="baar4Positivos" value="++++">++++</option>');
					jaFoi = true;
				}else if ($('#baciloscopia_metodo_' + num).val() == 'ziehl' && jaFoi){
					$('#baar4Positivos').remove();
					jaFoi = false;
				}
			});
			}
	});

});
