function CEPACulturaRow(numCepa){
	if(numCepa % 2 == 0) var cRow = 'even';
	else var cRow = 'odd';
	var content = ($('<tr>')
		.addClass(cRow)
		.append($('<td />')
			.append($('<select /> ')
				.attr('name', 'origem_cultura_' + numCepa)
				.attr(  'id', 'origem_cultura_' + numCepa)
				.addClass('origem_cultura')
				.append($('<option> ---- </option>'))
				.append($('<option> HU </option>')
					.attr('value', 'hu')
				)
				.append($('<option> PAAP </option>')
					.attr('value', 'paap')
				)
				.append($('<option> FIOCRUZ </option>')
					.attr('value', 'fiocruz')
				)
			)
			.attr('rowspan', '5')
		)
		.append($('<td />')
			.append('Número')
			.addClass('description')
		)
		.append($('<td/>')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'numero_cepa_cultura_' + numCepa)
				.attr(  'id', 'numero_cepa_cultura_' + numCepa)
				.attr('size', '5')
				.addClass('number')
			)
		)
		.append($('<td />')
			.append('Método')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.css(  'width', '100px')
				.attr('name', 'metodo_cultura_cepa_' + numCepa)
				.attr(  'id', 'metodo_cultura_cepa_' + numCepa)
				.addClass('metodo_cultura_cepa')
				.append($('<option> ---- </option>'))
				.append($('<option> LJ </option>')
					.attr('value', 'lj')
				)
				.append($('<option> MGIT </option>')
					.attr('value', 'mgit')
				)
				.append($('<option> Ogawa </option>')
					.attr('value', 'ogawa')
				)
				.append($('<option> Outro </option>')
					.attr('value', 'outro')
				)
			)
		.append($('<div />')
			.appendText('outro: ')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'outro_metodo_cultura_' + numCepa)
				.attr(  'id', 'outro_metodo_cultura_' + numCepa)
				.addClass('text')
				.attr('size', '10')
			)
		)
		)
	);
	content = $.merge($.merge([], content), $('<tr />')
		.addClass(cRow)
		.append($('<td />')
			.append('Data do recebimento')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'data_cultura_cepa_' + numCepa)
				.attr(  'id', 'data_cultura_cepa_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
			.append($('<div />')
				.appendText('hora: ')
				.append($('<input/>')
					.attr('disabled', true)
					.attr('name', 'hora_cultura_cepa_' + numCepa)
					.attr(  'id', 'hora_cultura_cepa_' + numCepa)
					.addClass('hour')
					.attr('maxlength', '5')
					.attr('size', '5')
				)
			)
		)
		.append($('<td />')
			.append('Data do Processamento')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'data_processamento_cultura_' + numCepa)
				.attr(  'id', 'data_processamento_cultura_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
			.append($('<div />')
				.appendText('hora: ')
				.append($('<input/>')
					.attr('disabled', true)
					.attr('name', 'hora_processamento_cultura_' + numCepa)
					.attr(  'id', 'hora_processamento_cultura_' + numCepa)
					.addClass('hour')
					.attr('maxlength', '5')
					.attr('size', '5')
				)
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td colspan= "2"/>')
			.append('Responsável')
			.addClass('description')
		)
		.append($('<td />')
			.append('Resultado')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.css(  'width', '100px')
				.attr('disabled', true)
				.attr('name', 'resultado_cultura_cepa_' + numCepa)
				.attr(  'id', 'resultado_cultura_cepa_' + numCepa)
				.addClass('resultado_cultura_cepa')
				.append($('<option> ---- </option>'))
				.append($('<option> + </option>')
					.attr('value', '+')
				)
				.append($('<option> ++ </option>')
					.attr('value', '++')
				)
				.append($('<option> +++ </option>')
					.attr('value', '+++')
				)
				.append($('<option> Negativo </option>')
					.attr('value', 'negativo')
				)
				.append($('<option> Ignorado </option>')
					.attr('value', 'ignorado')
				)
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td colspan="2"/>')
			.append($('<input type="text"/> ')
				.attr('disabled', true)
				.attr('name', 'cultura_coleta_responsavel_' + numCepa)
				.attr(  'id', 'cultura_coleta_responsavel_' + numCepa)
				.attr('size', '20')
				.addClass('text')
				.addClass('cultura_coleta_responsavel')
			)
		)
		.append($('<td />')
			.append('Data do resultado')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<input/>')
				.attr('disabled', true)
				.attr('name', 'data_resultado_cultura_' + numCepa)
				.attr(  'id', 'data_resultado_cultura_' + numCepa)
				.addClass('data')
				.attr('size', '11')
				.attr('readonly', 'readonly')
			)
			.append($('<div />')
				.appendText('hora: ')
				.append($('<input/>')
					.attr('disabled', true)
					.attr('name', 'hora_resultado_cultura_' + numCepa)
					.attr(  'id', 'hora_resultado_cultura_' + numCepa)
					.addClass('hour')
					.attr('maxlength', '5')
					.attr('size', '5')
				)
			)
		)
	);
	content = $.merge($.merge([], content) , $('<tr />')
		.addClass(cRow)
		.append($('<td colspan="2"/>'))
		.append($('<td />')
			.append('Identificação')
			.addClass('description')
		)
		.append($('<td />')
			.append($('<select /> ')
				.attr('disabled', true)
				.css(  'width', '100px')
				.attr('name', 'identificacao_cultura_cepa_' + numCepa)
				.attr(  'id', 'identificacao_cultura_cepa_' + numCepa)
				.addClass('identificacao_cultura_cepa')
				.append($('<option> ---- </option>'))
				.append($('<option> MTB</option>')
					.attr('value', 'mtb')
				)
				.append($('<option> MNT</option>')
					.attr('value', 'mnt')
				)
				.append($('<option> N&atilde;o se aplica </option>')
					.attr('value', 'nao_se_aplica')
				)
				.append($('<option> Ignorado </option>')
					.attr('value', 'ignorado')
				)
			)
		)
		.append($('<td colspan="2"/>'))
	);
	return content;
}

$(document).ready(function(){
	var cepaCulturaNum = 1;
	var content = CEPACulturaRow(cepaCulturaNum);
	$('table.cepaCultura').append(content);
	not_tested[cepaCulturaNum] = new Array();
	not_tested[cepaCulturaNum] = not_tested[0];
	$('#nao_testado_'+cepaCulturaNum).html(not_tested[cepaCulturaNum].toString());
	// add row button
	$("#addlineCultura_button").click(function(){
		var origemStr = $('#origem_cultura_'+ cepaCulturaNum).val();
		if(origemStr.replace(/-/g,'')){
			cepaCulturaNum++;
			var content = CEPACulturaRow(cepaCulturaNum);
			$('table.cepaCultura').append(CEPACulturaRow(cepaCulturaNum));
			not_tested[cepaCulturaNum] = new Array();
			not_tested[cepaCulturaNum] = not_tested[0];
			$('#nao_testado_'+cepaCulturaNum).html(not_tested[cepaCulturaNum].toString());
		}
	});
	$('select.origem_cultura').livequery('change', function(){
		var origemStr = $(this).val();
		l = medicines;
		num = parseInt($(this).attr('id').split('_')[2]);
		if(origemStr.replace(/-/g,'')){
			$('#numero_cepa_cultura_' + num).removeAttr('disabled');
			$('#cultura_coleta_responsavel_' + num).removeAttr('disabled');
			$('#data_cultura_cepa_' + num).removeAttr('disabled');
			$('#hora_cultura_cepa_' + num).removeAttr('disabled');
			$('#data_processamento_cultura_' + num).removeAttr('disabled');
			$('#hora_processamento_cultura_' + num).removeAttr('disabled');
			$('#data_resultado_cultura_' + num).removeAttr('disabled');
			$('#hora_resultado_cultura_' + num).removeAttr('disabled');
			$('#metodo_cultura_cepa_' + num).removeAttr('disabled');
			$('#resultado_cultura_cepa_' + num).removeAttr('disabled');
			$('#dias_cultura_cepa_' + num).removeAttr('disabled');
			$('#identificacao_cultura_cepa_' + num).removeAttr('disabled');
			$('#data_cultura_cepa_'+num).livequery('change', function(){
				if (Date.parse($('#data_cultura_cepa_'+num).val()) > Date.parse($('#data_processamento_cultura_'+num).val()))
				{
					alert('A Data do Recebimento deve ser anterior à Data do Processamento');
					$('#data_cultura_cepa_'+num).val('');
					$('#data_processamento_cultura_'+num).val('');
				}
				if (Date.parse($('#data_cultura_cepa_'+num).val()) > Date.parse($('#data_resultado_cultura_'+num).val()))
				{
					alert('A Data do Recebimento deve ser anterior à Data do Resultado');
					$('#data_cultura_cepa_'+num).val('');
					$('#data_resultado_cultura_'+num).val('');
				}
			});
			$('#data_processamento_cultura_'+num).livequery('change', function(){
				if (Date.parse($('#data_cultura_cepa_'+num).val()) > Date.parse($('#data_processamento_cultura_'+num).val()))
				{
					alert('A Data do Recebimento deve ser anterior à Data do Processamento');
					$('#data_cultura_cepa_'+num).val('');
					$('#data_processamento_cultura_'+num).val('');
				}
			});
			$('#data_resultado_cultura_'+num).livequery('change', function(){
				if (Date.parse($('#data_cultura_cepa_'+num).val()) > Date.parse($('#data_resultado_cultura_'+num).val()))
				{
					alert('A Data do Recebimento deve ser anterior à Data do Resultado');
					$('#data_cultura_cepa_'+num).val('');
					$('#data_resultado_cultura_'+num).val('');
				}
			});
		} else {
			$('#numero_cepa_cultura_' + num).attr('disabled', true);
			$('#numero_cepa_cultura_' + num).val('');
			$('#cultura_coleta_responsavel_' + num).attr('disabled', true);
			$('#cultura_coleta_responsavel_' + num).val('');
			$('#data_cultura_cepa_' + num).attr('disabled', true);
			$('#data_cultura_cepa_' + num).val('');
			$('#hora_cultura_cepa_' + num).attr('disabled', true);
			$('#hora_cultura_cepa_' + num).val('');
			$('#data_processamento_cultura_' + num).attr('disabled', true);
			$('#data_processamento_cultura_' + num).val('');
			$('#hora_processamento_cultura_' + num).attr('disabled', true);
			$('#hora_processamento_cultura_' + num).val('');
			$('#data_resultado_cultura_' + num).attr('disabled', true);
			$('#data_resultado_cultura_' + num).val('');
			$('#hora_resultado_cultura_' + num).attr('disabled', true);
			$('#hora_resultado_cultura_' + num).val('');
			$('#metodo_cultura_cepa_' + num).attr('disabled', true);
			$('#metodo_cultura_cepa_' + num).val('');
			$('#resultado_cultura_cepa_' + num).attr('disabled', true);
			$('#resultado_cultura_cepa_' + num).val('');
			$('#identificacao_cultura_cepa_' + num).attr('disabled', true);
			$('#dias_cultura_cepa_' + num).val('');
			$('#dias_cultura_cepa_' + num).attr('disabled', true);
			$('#data_cultura_cepa_'+num).livequery('change', function(){
				if (Date.parse($('#data_cultura_cepa_'+num).val()) > Date.parse($('#data_processamento_cultura_'+num).val()))
				{
					alert('A Data do Recebimento deve ser anterior à Data do Processamento');
					$('#data_cultura_cepa_'+num).val('');
					$('#data_processamento_cultura_'+num).val('');
				}
				if (Date.parse($('#data_cultura_cepa_'+num).val()) > Date.parse($('#data_resultado_cultura_'+num).val()))
				{
					alert('A Data do Recebimento deve ser anterior à Data do Resultado');
					$('#data_cultura_cepa_'+num).val('');
					$('#data_resultado_cultura_'+num).val('');
				}
			});
			$('#data_processamento_cultura_'+num).livequery('change', function(){
				if (Date.parse($('#data_cultura_cepa_'+num).val()) > Date.parse($('#data_processamento_cultura_'+num).val()))
				{
					alert('A Data do Recebimento deve ser anterior à Data do Processamento');
					$('#data_cultura_cepa_'+num).val('');
					$('#data_processamento_cultura_'+num).val('');
				}
			});
			$('#data_resultado_cultura_'+num).livequery('change', function(){
				if (Date.parse($('#data_cultura_cepa_'+num).val()) > Date.parse($('#data_resultado_cultura_'+num).val()))
				{
					alert('A Data do Recebimento deve ser anterior à Data do Resultado');
					$('#data_cultura_cepa_'+num).val('');
					$('#data_resultado_cultura_'+num).val('');
				}
			});
		}
	});
	$('select.metodo_cultura_cepa').livequery('change', function(){
		var origemStr = $('select.origem_cultura').val();
		l = medicines;
		num = parseInt($('select.origem_cultura').attr('id').split('_')[2]);
		if ($(this).val() == 'outro')
		{
			$('#outro_metodo_cultura_' + num).removeAttr('disabled');
		}else{
			$('#outro_metodo_cultura_' + num).attr('disabled', true);
			$('#outro_metodo_cultura_' + num).val('');
		}
	});
});
