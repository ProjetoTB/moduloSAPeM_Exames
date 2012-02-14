/**
 *
 * Actions.js
 *
 * Author: Fernando.Ferreira@icsystems.com.br
 * Date:   March 15th, 2010
 */

if(typeof(String.prototype.trim) === "undefined")
{
	String.prototype.trim = function()
	{
		return String(this).replace(/^\s+|\s+$/g, '');
	};
}

function getUrlbase(){
	//Make the urlbase (necessary case SAPeM migrate to another server)
	var urlString = $(location).attr('href');
	var urlArray = urlString.split('/');
	var indexToRunUrlString = 0; 
	var urlbase = '';
	for (indexToRunUrlString in urlArray)
		if (urlArray[indexToRunUrlString] == 'sapem')
			var indexToRecord = indexToRunUrlString;
	for (indexToRunUrlString in urlArray.slice(0,parseInt(indexToRecord,10) + 1))
		if (indexToRunUrlString == 0)
			urlbase += urlArray[indexToRunUrlString];
		else
			urlbase += '/' + urlArray[indexToRunUrlString];
	urlbase += '/';
	return urlbase;
}

function loadUnidadesSaude(selectObj, num){
	urlbase = getUrlbase();
	$.ajax({
		url: urlbase + 'unidadesSaude/json/',
		dataType : 'json',
		cache: false,
		cache: false,
		success : function(data){
			$.each(data, function(key, value){
				us = value.fields.nome;
				if (value.fields.cidade != '')
					us += " - " + value.fields.cidade;
				us += " \(" + value.fields.UF + "\)";
				$(selectObj + num)
					.append($('<option>'+us+'</option>')
						.attr('value', us)
				);
			});
		}
	});
}

function hourDifference(arrayData1,arrayData2){

	//Criacao de um array contendo dia, mes e ano
	var ano1 = parseInt(arrayData1[2],10);
	var ano2 = parseInt(arrayData2[2],10);
	var mes1 = parseInt(arrayData1[1],10);
	var mes2 = parseInt(arrayData2[1],10);
	var dia1 = parseInt(arrayData1[0],10);
	var dia2 = parseInt(arrayData2[0],10);
	var d1 = new Date(ano1,mes1,dia1);
	var d2 = new Date(ano2,mes2,dia2);
	return ((d1-d2)/(1000*60*60));
}

var not_tested = new Array();
not_tested[0]  = medicines.sort();

var sensivel  = new Array();
var resistent = new Array();

//Document is ready, let's play
$(document).ready(function(){
/*---------------------------Auxiliar function-------------------------------*/
	$.fn.compareDate = function(argumento){
		//Essa funcao eh utilizada para comprar a ordem
		//cronologica entre duas datas.
		//Caso a data do argumento seja menor, e retornado um numero positivo
		//caso contrario, e retornado um numero negativo

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
		var hourDiff = parseInt(hourDifference(arrayData1,arrayData2),10);
		return hourDiff;
	}
	$.fn.showFields = function(argumento){
		var dep = argumento;
		for(div in dep){
			var elems = $('*', dep[div]);
			$(elems).each(function(){
				var element = $(this);
				if (   element[0].nodeName != 'FIELDSET'
					&& element[0].nodeName != 'SMALL'
					&& element[0].nodeName != 'OPTION')
					$(this).addClass('required');
					$(this).removeAttr('disabled',false);
			});
			if($(dep[div]).css('display') != 'block')
				$(dep[div]).toggle(function() {
					$(this).css('background-color', hlcolor);
					$(this).animate({backgroundColor : "white"}, 4000);
				});
		}
	}
	$.fn.hideFields = function(argumento){
		var dep = argumento;
		for(div in dep){
			var elems = $('*', dep[div]);
			$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
						&& element[0].nodeName != 'SMALL'
						&& element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
					});
			if($(dep[div]).css('display') != 'none')
				$(dep[div]).toggle();
		}
	}
	$.fn.showNotRequiredFields = function(argumento){
		var dep = argumento;
		for(div in dep){
			var elems = $('*', dep[div]);
			$(elems).each(function(){
				var element = $(this);
				if (   element[0].nodeName != 'FIELDSET'
					&& element[0].nodeName != 'SMALL'
					&& element[0].nodeName != 'OPTION')
					$(this).removeAttr('disabled',false);
				});
			if($(dep[div]).css('display') != 'block')
				$(dep[div]).toggle(function() {
					$(this).css('background-color', hlcolor);
					$(this).animate({backgroundColor : "white"}, 4000);
					});
		}
	}
/*-------------------------------------------------------------------------------*/
/*------------------------------Edition and Relation-----------------------------*/
	//Make the urlbase (necessary case SAPeM migrate to another server)
	var urlString = $(location).attr('href');
	var urlArray = urlString.split('/');
	var indexToRunUrlString = 0; 
	var urlbase = '';
	for (indexToRunUrlString in urlArray)
		if (urlArray[indexToRunUrlString] == 'sapem')
			var indexToRecord = indexToRunUrlString;
	for (indexToRunUrlString in urlArray.slice(0,parseInt(indexToRecord,10) + 1))
		if (indexToRunUrlString == 0)
			urlbase += urlArray[indexToRunUrlString];
		else
			urlbase += '/' + urlArray[indexToRunUrlString];
	urlbase += '/';
	//Relation between forms
	//Unidade - Exames e Triagem
	if (urlString.search("edit") != -1){
		var fichaId         = urlArray[urlArray.length-2];
		var url             = urlbase + 'ficha/' + fichaId + '/';
		var fields_xml_path = urlbase + 'form/fields/xml/5/'; // MELHORAR: retirar hard-coded do id do form Exames (5)
	}else{
		var fichaId = urlArray[urlArray.length-2];
		var url = urlbase + 'patientLastRegisterByType/' + fichaId + '/Triagem/';
	}

	$.ajax({
		type: 'POST',
		url: url,
		dataType: "html",
		cache: false,
		success: function(text){
			if (window.DOMParser)
			{
				parser=new DOMParser();
				xml=parser.parseFromString(text,"text/xml");
			}else{ // Internet Explorer
				xml=new ActiveXObject("Microsoft.XMLDOM");
				xml.async="false";
				xml.loadXML(text);
			}
			// Parseando arquivo que determina a ordem dos campos...
			$.ajax({
				type: 'POST',
				url: fields_xml_path,
				dataType: 'html',
				cache: false,
				success: function(text){
					parser = new DOMParser();
					fields_xml = parser.parseFromString(text, 'text/xml');
					field = fields_xml.getElementsByTagName('fields')[0].childNodes;
					for (f=0; f < fields_xml.getElementsByTagName('fields')[0].childNodes.length; f ++){
						if (field[f].tagName != undefined){
							// Tratando primeiro os campos que não são mûltiplos...
							if (field[f].tagName != 'multipleFields'){
								if (xml.getElementsByTagName(field[f].tagName)[0] != undefined){
									if (xml.getElementsByTagName(field[f].tagName)[0].childNodes.length != 0){
										// Tratando os elementos Radios
										$('input:radio').each(function(){
											if (xml.getElementsByTagName($(this).attr('name'))[0].childNodes[0].nodeValue.search($(this).val()) != -1)
												$(this).attr('checked', true);
										});

										$('#' + field[f].tagName).val(xml.getElementsByTagName(field[f].tagName)[0].childNodes[0].nodeValue);
									}
								}
							}
							// Se estivermos tratando campos mûltiplos...
							else{
								for (child = 0; child < field[f].childNodes.length; child++)
									if (field[f].childNodes[child].tagName != undefined){
										index  = 1;
										while (xml.getElementsByTagName(field[f].childNodes[child].tagName + "_" + index)[0] != undefined && xml.getElementsByTagName(field[f].childNodes[child].tagName + "_" + index)[0].childNodes[0] != undefined){
											if (field[f].childNodes[child].tagName.search('origem_') != -1){
												fieldset = field[f].childNodes[child].tagName.split('_')[1];
												// Tratando casos de mais de uma linha em Baciloscopia, Cultura ou TB Resistente
												if (index > 1){
													switch(fieldset){
														case 'cepa':
															$('#addline_button').click();
															break;
														case 'cultura':
															$('#addlineCultura_button').click();
															break;
														case 'tbresistente':
															$('#addlineTBResistente_button').click();
															break;
													}
												}
												// Forçando adição da Unidade de Saûde nos campos Origem. Caso contrário, em alguns casos não funciona. Não foi possível identificar um padrão para os casos em que não funciona
												$('#' + field[f].childNodes[child].tagName + "_" + index)
													.find('option')
													.end()
													.append('<option>'+ xml.getElementsByTagName(field[f].childNodes[child].tagName + "_" + index)[0].childNodes[0].nodeValue +'</option>')
													.val(xml.getElementsByTagName(field[f].childNodes[child].tagName + "_" + index)[0].childNodes[0].nodeValue)
													.attr('selected', true)
												;
												// Tratando dos outros campos envolvidos com a adição de uma nova linha
												switch(fieldset){
													case 'cepa':
														$().selectCepa(index);
														break;
													case 'cultura':
														$().selectCultura(index);
														break;
													case 'tbresistente':
														$().selectTBresistente(index);
														break;
												}
											}
											// Tratando campos de sangue ou soro coletados
											if (field[f].childNodes[child].tagName.search('Coletado') != -1){
												fieldset = field[f].childNodes[child].tagName.split('Coletado')[0];
												if (index > 1){
													switch(fieldset){
														case 'sangue':
															$('#addSangue_button').click();
															break;
														case 'soro':
															$('#addSoro_button').click();
															break;
													}
												}
											}
											index ++;
										}
										for (i=1; i <= (index + 1); i++){
											if (xml.getElementsByTagName(field[f].childNodes[child].tagName + '_' + i)[0] != undefined && xml.getElementsByTagName(field[f].childNodes[child].tagName + '_' + i)[0].childNodes[0] != undefined){
												$('#' + field[f].childNodes[child].tagName + '_' + i)
													.removeAttr('disabled')
													.val(xml.getElementsByTagName(field[f].childNodes[child].tagName + '_' + i)[0].childNodes[0].nodeValue)
													.change()
												;
												if ($('#' + field[f].childNodes[child].tagName + '_' + i).attr('type') == 'checkbox'){
													if (xml.getElementsByTagName(field[f].childNodes[child].tagName + '_' + i)[0].childNodes[0].nodeValue == 'on')
														$('#' + field[f].childNodes[child].tagName + '_' + i).attr('checked', true);
												}
												if (field[f].childNodes[child].tagName.split('_')[0] == 'valores'){
													values = xml.getElementsByTagName(field[f].childNodes[child].tagName + "_" + i)[0].childNodes[0].nodeValue.split(',');
													for (v=0; v < values.length; v++){
														$('#' + field[f].childNodes[child].tagName.split('_')[2] + '_tbresistente_' + i + '_' + values[v])
															.attr('checked', true)
															.change()
														;
													}
												}
											}
										}
									}
							}
						}
					}
				}
			});
		}
	});
/*-------------------------------------------------------------------------------*/
	$("#form_exams").keypress(function(e) {
		if (e.which == 13) {
			return false;
		}
	});

	$('.text').livequery('keypress', function(e){
		if((e.which > 32 && e.which < 65)||
			(e.which > 90 && e.which < 97)||
			(e.which > 122 && e.which < 127)||
			(e.which > 127 && e.which < 192)){
			return false;
		}
	});

	$('.number').livequery('keypress', function(e){
		if((e.which > 31 && e.which < 48)||(e.which > 57)){
			return false;
		}
	});

	$('.hour').livequery('keypress', function(e){
		if((e.which > 31 && e.which < 48)||(e.which > 57))
			return false;
		$('.hour').timeEntry({show24Hours: true});
	});

	$(function(){
		$('.data').livequery('click', function() {
			$(this).datepicker({
						dateFormat: 'dd/mm/yy',
						monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
						monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Aug','Set','Out','Nov','Dez'],
						maxDate: '+0d',
						changeMonth: true,
						changeYear: true,
						maxDate   : '+0y',
						minDate   : '-130y',
						yearRange : '-130:+130',
						dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
						showOn:'focus'}
								).focus();
		});
	});

	var hlcolor = '#FFF8C6';

	var d = new Date();
	var cYear = d.getFullYear();
	years = new Array();

	for (i=cYear-100; i <=cYear; i++)
		years.push(i.toString());

	$('#data_sida').autocomplete({
		lookup: years
	});

	//Toggle options
	// Soro
	$('#soroColetado').change(function(){
		var dep = new Array();
		dep[0] = '#divNSoro';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim')
			$().showNotRequiredFields(dep);
		// Se nao, ocultar colunas listadas a cima
		if($(this).val()=='nao' || $(this).val() == 'ignorado')
			$().hideFields(dep);
	});

	$('#sangueColetado').change(function(){
		var dep = new Array();
		dep[0] = '#divNSangue';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim')
			$().showNotRequiredFields(dep);
		// Se nao, ocultar colunas listadas a cima
		if($(this).val()=='nao' || $(this).val() == 'ignorado')
			$().hideFields(dep);
	});

	//IGRA
	$('#IGRA').change(function(){
		var dep = new Array();
		dep[0] = '#divIGRAMetodo';
		dep[1] = '#divIGRAResultado'
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim')
			$().showNotRequiredFields(dep);
		// Se nao, ocultar colunas listadas a cima
		else
			$().hideFields(dep);
	});

	//Prova Realizada?
	$('#provaRealizada').change(function(){
		var dep = new Array();
		dep[0] = '#divLeituraRealizada';
		var notReq = new Array();
		notReq[0] = "#divDataAplicacao";
		var ped = new Array();
		ped[0] = '#divResultadoLeitura';
		ped[1] = '#divDataLeitura';
		ped[2] = '#divPt';

		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			$().showNotRequiredFields(dep);
			$().showNotRequiredFields(notReq);
		}
		// Se nao, ocultar colunas listadas a cima
		else {
			$().hideFields(dep);
			$().hideFields(notReq);
			$().hideFields(ped);
		}
	});

	$('#leituraRealizada').change(function(){
		var dep = new Array();
		dep[0] = '#divResultadoLeitura';
		dep[1] = '#divPt';
		var notReq = new Array();
		notReq[0] = '#divDataLeitura';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			$().showNotRequiredFields(dep);
			$().showNotRequiredFields(notReq);
		}
		// Se nao, ocultar colunas listadas a cima
		else{
			$().hideFields(dep);
			$().hideFields(notReq);
		}
	});

	//testesMoleculares
	$('#testesMoleculares').change(function(){
		var dep = new Array();
		dep[0] = '#divPCRMetodo';
		dep[1] = '#divPCRResultado';
		var notReq = new Array();
		notReq[0] = '#divDataColetaPCR';
		notReq[1] = '#divDataRecebimentoLaboratorioPCR';
		notReq[2] = '#divDataResultadoPCR';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			$().showNotRequiredFields(dep);
			$().showNotRequiredFields(notReq);
		}
		// Se nao, ocultar colunas listadas a cima
		else{
			$().hideFields(dep);
			$().hideFields(notReq);
		}
	});

	$('#data_coleta_pcr').change(function(){
		if (Date.parse($('#data_coleta_pcr').val()) > Date.parse($('#data_recebimento_laboratorio_pcr').val()))
		{
			alert('A Data da Coleta deve ser anterior à Data do Recebimento');
			$('#data_coleta_pcr').val('');
			$('#data_recebimento_laboratorio_pcr').val('');
		}
		if (Date.parse($('#data_coleta_pcr').val()) > Date.parse($('#data_resultado_pcr').val()))
		{
			alert('A Data da Coleta deve ser anterior à Data do Resultado');
			$('#data_coleta_pcr').val('');
			$('#data_resultado_pcr').val('');
		}
	});

	$('#data_recebimento_laboratorio_pcr').change(function(){
		if (Date.parse($('#data_coleta_pcr').val()) > Date.parse($('#data_recebimento_laboratorio_pcr').val()))
		{
			alert('A Data da Coleta deve ser anterior à Data do Recebimento');
			$('#data_coleta_pcr').val('');
			$('#data_recebimento_laboratorio_pcr').val('');
		}
		if (Date.parse($('#data_recebimento_laboratorio_pcr').val()) > Date.parse($('#data_resultado_pcr').val()))
		{
			alert('A Data do Recebimento deve ser anterior à Data do Resultado');
			$('#data_resultado_pcr').val('');
			$('#data_recebimento_laboratorio_pcr').val('');
		}
	});

	$('#data_resultado_pcr').change(function(){
		if (Date.parse($('#data_coleta_pcr').val()) > Date.parse($('#data_resultado_pcr').val()))
		{
			alert('A Data da Coleta deve ser anterior à Data do Resultado');
			$('#data_coleta_pcr').val('');
			$('#data_resultado_pcr').val('');
		}
		if (Date.parse($('#data_recebimento_laboratorio_pcr').val()) > Date.parse($('#data_resultado_pcr').val()))
		{
			alert('A Data do Recebimento deve ser anterior à Data do Resultado');
			$('#data_resultado_pcr').val('');
			$('#data_recebimento_laboratorio_pcr').val('');
		}
	});

	$('#pcrMetodo').change(function(){
		var dep = new Array();
		dep[0] = '#divOutroMetodoPCR';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='outro')
			$().showNotRequiredFields(dep);
		// Se nao, ocultar colunas listadas a cima
		else 
			$().hideFields(dep);
	});

	//Detecão TB Resistente
	$('#detecao_tb_resistente').change(function(){
		var dep = new Array();
		dep[0] = '#divTbResistenteMetodo';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim')
			$().showNotRequiredFields(dep);
		// Se nao, ocultar colunas listadas a cima
		else 
			$().hideFields(dep);
	});

	//HIV
	$('#exameSida').change(function(){
		var dep = new Array();
		dep[0] = '#divSIDA';

		var depNotReq = new Array();
		depNotReq[0] = '#divDataSida';

		var ped = new Array();
		ped[0] = '#divSidaContagemLinfocitos60dias';
		ped[1] = '#divSIDAUsoAntiRetroviral';
		ped[2] = '#divDataInicioUsoRetroviral';
		ped[3] = '#divSidaContagemCD460dias';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			$().showNotRequiredFields(dep);
			$().showNotRequiredFields(depNotReq);
		}
		// Se nao, ocultar colunas listadas a cima
		else {
			$().hideFields(dep);
			$().hideFields(depNotReq);
			$().hideFields(ped);
		}
	});

	$('#genXpert').change(function(){
		var dep = new Array();
		dep[0] = '#divDataColetaGenXpert';
		dep[1] = '#divDataRecebimentoGenXpert';
		dep[2] = '#divDataRecebimentoGenXpertMedico';
		dep[3] = '#divDataResultadoGenXpert';

		var req = new Array();
		req[0] = '#divResultadoGenXpert';

		if($(this).val()=='sim'){
			$().showNotRequiredFields(dep);
			$().showFields(req);
		}
		else{
			$().hideFields(dep);
			$().hideFields(req);
		}
	});

	$('#resultadoGenXpert').change(function(){
		var dep = new Array();
		dep[0] = '#divGenXpertPositivo';
		if ($(this).val() == 'positivo')
			$().showNotRequiredFields(dep);
		else
			$().hideFields(dep);
	});

	$('#fitaHainRealizado').change(function(){
		var dep = new Array();
		dep[0] = '#divDataColetaFitaHain';
		dep[1] = '#divDataRecebimentoFitaHain';
		dep[2] = '#divDataRecebimentoMedico';
		dep[3] = '#divOpcoes';
		dep[4] = '#divDataResultadoFitaHain';

		var req = new Array();
		req[0] = '#divResultadoFitaHain';
		if($(this).val()=='sim'){
			$().showNotRequiredFields(dep);
			$().showFields(req);
		}else{
			$().hideFields(dep);
			$().hideFields(req);
		}
	});

	$('#resultadoFitaHain').change(function(){
		var dep = new Array();
		dep[0] = '#divIsoniazida';
		dep[1] = '#divRifampicina';
		if ($(this).val() == 'detectado')
			$().showNotRequiredFields(dep);
		else
			$().hideFields(dep);
	});
	
	$('#sidaUsoAntiRetroviral').change(function(){
		var dep = new Array();
		dep[0] = '#divDataInicioUsoRetroviral';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim')
			$().showNotRequiredFields(dep);
		else
			$().hideFields(dep);
	});

	$('#sida').change(function(){
		var dep = new Array();
		dep[0] = '#divSIDAUsoAntiRetroviral';
		dep[1] = '#divSidaContagemLinfocitos60dias';
		dep[2] = '#divSidaContagemCD460dias';
		var ped = new Array();
		ped[0] = '#divDataInicioUsoRetroviral';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='positivo')
			$().showNotRequiredFields(dep);
		// Se nao, ocultar colunas listadas a cima
		else {
			$().hideFields(dep);
			$().hideFields(ped);
		}
	});

	$('#baarUmMesAposTriagemRealizado').change(function(){
		var required = new Array();
		required[0] = '#divResultadoBaarUmMesAposTriagem';

		var notRequired = new Array();
		notRequired[0] = '#divDataResultadoBaarUmMesAposTriagem';
		notRequired[1] = '#divResponsavelPelaColetaUmMesAposTriagem';
		notRequired[2] = '#divResponsavelPeloExameUmMesAposTriagem';

		var motivo = new Array();
		motivo[0] = '#divMotivoBaarUmMesAposTriagem';

		if ($(this).val() == 'sim'){
			$().showFields(required);
			$().showNotRequiredFields(notRequired);
			$().hideFields(motivo);
		}
		else{
			if ($(this).val() == 'nao')
				$().showNotRequiredFields(motivo);
			else
				$().hideFields(motivo);
			$().hideFields(required);
			$().hideFields(notRequired);
		}
	});

	$('#baarDoisMesesAposTriagemRealizado').change(function(){
		var required = new Array();
		required[0] = '#divResultadoBaarDoisMesesAposTriagem';

		var notRequired = new Array();
		notRequired[0] = '#divDataResultadoBaarDoisMesesAposTriagem';
		notRequired[1] = '#divResponsavelPelaColetaDoisMesesAposTriagem';
		notRequired[2] = '#divResponsavelPeloExameDoisMesesAposTriagem';

		var motivo = new Array();
		motivo[0] = '#divMotivoBaarDoisMesesAposTriagem';

		if ($(this).val() == 'sim'){
			$().showFields(required);
			$().showNotRequiredFields(notRequired);
			$().hideFields(motivo);
		}
		else{
			if ($(this).val() == 'nao')
				$().showNotRequiredFields(motivo);
			else
				$().hideFields(motivo);
			$().hideFields(required);
			$().hideFields(notRequired);
		}
	});

	$('div.secondary').css('display', 'none');

	//Toggle Options
	//Soro
	var soroNum = 1;
	var content = soroRow(soroNum);
	$('table.soro').append(content);
	// add row button
	$("#addSoro_button").click(function(){
		if($('#soroColetado_'+soroNum).val() == 'sim' && $('#numeroSoro_'+soroNum).valid()){
			$('#numeroSoro_'+ soroNum).attr('readonly', 'true');
			$('#soroColetado_'+ soroNum).attr('readonly', 'true');
		}
		soroNum++;
		var content = soroRow(soroNum);
		$('table.soro').append(content);
	});
	$('select.soro').live('change', function(){
		params = $(this).attr('id').split('_');
		numSoro = params[1];
		if($(this).val() == 'sim'){
			$('#numeroSoro_'+ numSoro).removeAttr('disabled');
			$('#numeroSoro_'+ numSoro).addClass('required');
		} else {
			$('#numeroSoro_'+ numSoro).attr('disabled', 'disabled');
			$('#numeroSoro_'+ numSoro).val('');
			$('#numeroSoro_'+ numSoro).removeClass('required');
			$('#numeroSoro_'+ numSoro).valid();
		}
	});
	//Sangue
	var sangueNum = 1;
	var content = sangueRow(sangueNum);
	$('table.sangue').append(content);
	// add row button
	$("#addSangue_button").click(function(){
		if($('#sangueColetado_'+sangueNum).val() == 'sim' && $('#numeroSangue_'+sangueNum).valid()){
			$('#numeroSangue_'+ numSangue).attr('readonly', 'true');
			$('#sangueColetado_'+ numSangue).attr('readonly', 'true');
		}
		sangueNum++;
		var content = sangueRow(sangueNum);
		$('table.sangue').append(content);
	});
	$('select.sangue').live('change', function(){
		params = $(this).attr('id').split('_');
		numSangue = params[1];
		if($(this).val() == 'sim'){
			$('#numeroSangue_'+ numSangue).removeAttr('disabled');
			$('#numeroSangue_'+ numSangue).addClass('required');
		} else {
			$('#numeroSangue_'+ numSangue).attr('disabled', 'disabled');
			$('#numeroSangue_'+ numSangue).val('');
			$('#numeroSangue_'+ numSangue).removeClass('required');
			$('#numeroSangue_'+ numSangue).valid();
		}
	});

	//Display help tipbox
	$('#helpicon').css('cursor', 'pointer');
	$('#helpicon').css('*cursor', 'hand');
	$("#layer1").hide();
	$('.helpicon').click(function(){
		if($(this).parent().attr('id').split('_')[2] == 'cultura')
			$('#layer1').css('top', '1800px');
		if($(this).parent().attr('id').split('_')[2] == 'tbresistente')
			$('#layer1').css('top', '2200px');
		$('#layer1').show();
	});
	$('#layer1').draggable();

	$('#close').click(function(){
		$("#layer1").hide();
	});
	$('#data_aplicacao').change(function(){
		var compare = parseInt($('#data_leitura').compareDate($('#data_aplicacao')),10);
		if (compare < 72 && compare != 0)
		{
			alert('A Data da Leitura deve vir 72h após a Data de Aplicação');
			$('#data_leitura').val('');
			$('#data_aplicacao').val('');
		}
	});
	$('#data_leitura').change(function(){
		var compare = parseInt($('#data_leitura').compareDate($('#data_aplicacao')),10);
		if (compare < 72 && compare != 0)
		{
			alert('A Data da Leitura deve vir 72h após a Data de Aplicação');
			$('#data_leitura').val('');
			$('#data_aplicacao').val('');
		}
	});
	$('#dataRecebimentoGenXpert').change(function(){
		if ($($('#dataRecebimentoGenXpert')).compareDate($('#dataResultadoGenXpert')) > 0)
		{
			alert('A Data do Recebimento deve ser anterior à Data do Resultado');
			$('#dataRecebimentoGenXpert').val('');
			$('#dataResultadoGenXpert').val('');
		}
		if ($($('#dataRecebimentoGenXpert')).compareDate($('#dataColetaGenXpert')) < 0)
		{
			alert('A Data da Coleta deve ser anterior à Data do Recebimento');
			$('#dataRecebimentoGenXpert').val('');
			$('#dataColetaGenXpert').val('');
		}
	});
	$('#dataColetaGenXpert').change(function(){
		if ($($('#dataColetaGenXpert')).compareDate($('#dataResultadoGenXpert')) > 0)
		{
			alert('A Data da Coleta deve ser anterior à Data do Resultado');
			$('#dataColetaGenXpert').val('');
			$('#dataResultadoGenXpert').val('');
		}
		if ($($('#dataColetaGenXpert')).compareDate($('#dataRecebimentoGenXpert')) > 0)
		{
			alert('A Data da Coleta deve ser anterior à Data do Recebimento');
			$('#dataColetaGenXpert').val('');
			$('#dataRecebimentoGenXpert').val('');
		}
	});
	$('#dataResultadoGenXpert').change(function(){
		if ($($('#dataRecebimentoGenXpert')).compareDate($('#dataResultadoGenXpert')) > 0)
		{
			alert('A Data do Recebimento deve ser anterior à Data do Resultado');
			$('#dataRecebimentoGenXpert').val('');
			$('#dataResultadoGenXpert').val('');
		}
		if ($($('#dataResultadoGenXpert')).compareDate($('#dataColetaGenXpert')) < 0)
		{
			alert('A Data da Coleta deve ser anterior à Data do Resultado');
			$('#dataColetaGenXpert').val('');
			$('#dataResultadoGenXpert').val('');
		}
	});
	$('#dataRecebimentoFitaHain').change(function(){
		if ($($('#dataRecebimentoFitaHain')).compareDate($('#dataResultadoFitaHain')) > 0)
		{
			alert('A Data do Recebimento deve ser anterior à Data do Resultado');
			$('#dataRecebimentoFitaHain').val('');
			$('#dataResultadoFitaHain').val('');
		}
		if ($($('#dataRecebimentoFitaHain')).compareDate($('#dataColetaFitaHain')) < 0)
		{
			alert('A Data da Coleta deve ser anterior à Data do Recebimento');
			$('#dataRecebimentoFitaHain').val('');
			$('#dataColetaFitaHain').val('');
		}
	});
	$('#dataColetaFitaHain').change(function(){
		if ($($('#dataColetaFitaHain')).compareDate($('#dataResultadoFitaHain')) > 0)
		{
			alert('A Data da Coleta deve ser anterior à Data do Resultado');
			$('#dataColetaFitaHain').val('');
			$('#dataResultadoFitaHain').val('');
		}
		if ($($('#dataColetaFitaHain')).compareDate($('#dataRecebimentoFitaHain')) > 0)
		{
			alert('A Data da Coleta deve ser anterior à Data do Recebimento');
			$('#dataColetaFitaHain').val('');
			$('#dataRecebimentoFitaHain').val('');
		}
	});
	$('#dataResultadoFitaHain').change(function(){
		if ($($('#dataRecebimentoFitaHain')).compareDate($('#dataResultadoFitaHain')) > 0)
		{
			alert('A Data do Recebimento deve ser anterior à Data do Resultado');
			$('#dataRecebimentoFitaHain').val('');
			$('#dataResultadoFitaHain').val('');
		}
		if ($($('#dataResultadoFitaHain')).compareDate($('#dataColetaFitaHain')) < 0)
		{
			alert('A Data da Coleta deve ser anterior à Data do Resultado');
			$('#dataColetaFitaHain').val('');
			$('#dataResultadoFitaHain').val('');
		}
	});
	$('#form_exams').validate({
		rules: {
			soroColetado: {
				required: true
			},
			sangueColetado: {
				required: true
			},
			HIVteste:{
				required: true
			},
			probabilidadeTBAtiva: {
				required: true
			},
			data_rx: {
				date: true,
				required: true
			}
		}
	});
});
