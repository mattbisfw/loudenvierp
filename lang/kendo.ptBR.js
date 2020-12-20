/*
* Kendo UI Localization Project for v2012.3.1114 
* Copyright 2012 Telerik AD. All rights reserved.
* 
* Brazilian Portuguese (pt-BR) Language Pack
*
* Project home  : https://github.com/loudenvier/kendo-global
* Kendo UI home : http://kendoui.com
* Author        : Felipe Machado (Loudenvier) 
*                 http://feliperochamachado.com.br/index_en.html
*
* This project is released to the public domain, although one must abide to the 
* licensing terms set forth by Telerik to use Kendo UI, as shown bellow.
*
* Telerik's original licensing terms:
* -----------------------------------
* Kendo UI Web commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-web-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the
* GNU General Public License (GPL) version 3.
* For GPL requirements, please review: http://www.gnu.org/copyleft/gpl.html
*/
kendo.ui.ColumnMenu.prototype.options.messages = 
  $.extend(kendo.ui.ColumnMenu.prototype.options.messages, {

/* COLUMN MENU MESSAGES 
 ****************************************************************************/   
  sortAscending: "Ascendente",
  sortDescending: "Descendente",
  filter: "Filtro",
  columns: "Colunas"
 /***************************************************************************/   
});

kendo.ui.Groupable.prototype.options.messages = 
  $.extend(kendo.ui.Groupable.prototype.options.messages, {

/* GRID GROUP PANEL MESSAGES 
 ****************************************************************************/   
  empty: "Arraste colunas aqui para agrupar pelas mesmas"
 /***************************************************************************/   
});

kendo.ui.FilterMenu.prototype.options.messages = 
  $.extend(kendo.ui.FilterMenu.prototype.options.messages, {
  
/* FILTER MENU MESSAGES 
 ***************************************************************************/   
	info: "T�tulo:", // sets the text on top of the filter menu
	filter: "Filtrar", // sets the text for the "Filter" button
	clear: "Limpar", // sets the text for the "Clear" button
	// when filtering boolean numbers
	isTrue: "� verdadeiro", // sets the text for "isTrue" radio button
	isFalse: "� falso", // sets the text for "isFalse" radio button
	//changes the text of the "And" and "Or" of the filter menu
	and: "E",
	or: "Ou",
  selectValue: "-selecione um valor-"
 /***************************************************************************/   
});
         
kendo.ui.FilterMenu.prototype.options.operators =           
  $.extend(kendo.ui.FilterMenu.prototype.options.operators, {

/* FILTER MENU OPERATORS (for each supported data type) 
 ****************************************************************************/   
  string: {
      eq: "� igual",
      neq: "� diferente",
      startswith: "Come�a com",
      contains: "Comt�m",
      doesnotcontain: "N�o cont�m",
      endswith: "Termina com"
  },
  number: {
      eq: "� igual",
      neq: "� diferente",
      gte: "� maior que ou igual a",
      gt: "� maior que",
      lte: "� menor que ou igual a",
      lt: "� menor que"
  },
  date: {
      eq: "� igual",
      neq: "� diferente",
      gte: "� igual ou mais recente que",
      gt: "� mais recente que",
      lte: "� igual ou mais antigo que",
      lt: "� mais antigo que"
  },
  enums: {
      eq: "� igual",
      neq: "� diferente"
  }
 /***************************************************************************/   
});

kendo.ui.Pager.prototype.options.messages = 
  $.extend(kendo.ui.Pager.prototype.options.messages, {
  
/* PAGER MESSAGES 
 ****************************************************************************/   
  display: "{0} - {1} de {2} itens",
  empty: "Nada a exibir",
  page: "P�gina",
  of: "de {0}",
  itemsPerPage: "itens por p�gina",
  first: "Vai para primeira p�gina",
  previous: "Vai para p�gina anterior",
  next: "Vai para p�gina seguinte",
  last: "Vai para �ltima p�gina",
  refresh: "Atualiza"
 /***************************************************************************/   
});

kendo.ui.Validator.prototype.options.messages = 
  $.extend(kendo.ui.Validator.prototype.options.messages, {

/* VALIDATOR MESSAGES 
 ****************************************************************************/   
  required: "{0} � obrigat�rio",
  pattern: "{0} n�o � v�lido",
  min: "{0} deve ser maior que ou igual a {1}",
  max: "{0} deve ser menor que ou igual a {1}",
  step: "{0} n�o � v�lido",
  email: "{0} n�o � um email v�lido",
  url: "{0} n�o � uma URL v�lida",
  date: "{0} n�o � uma data v�lida"
 /***************************************************************************/   
});

kendo.ui.ImageBrowser.prototype.options.messages = 
  $.extend(kendo.ui.ImageBrowser.prototype.options.messages, {

/* IMAGE BROWSER MESSAGES 
 ****************************************************************************/   
  uploadFile: "Enviar",
  orderBy: "Classificar por",
  orderByName: "Nome",
  orderBySize: "Tamanho",
  directoryNotFound: "Uma pasta com este nome n�o foi encontrada.",
  emptyFolder: "Pasta Vazia",
  deleteFile: 'Tem certeza que deseja excluir "{0}"?',
  invalidFileType: "O arquivo selecionado \"{0}\" n�o � v�lido. Os tipos de arquivo suportados s�o {1}.",
  overwriteFile: "Um arquivo com o nome \"{0}\" j� existe na pasta atual. Voc� quer sobrescrev�-lo?",
  dropFilesHere: "solte arquivos aqui para envi�-los"
 /***************************************************************************/   
});

kendo.ui.Editor.prototype.options.messages = 
  $.extend(kendo.ui.Editor.prototype.options.messages, {

/* EDITOR MESSAGES 
 ****************************************************************************/   
  bold: "Negrito",
  italic: "It�lico",
  underline: "Sublinhado",
  strikethrough: "Tachado",
  superscript: "Sobrescrito",
  subscript: "Subscrito",
  justifyCenter: "Centralizar texto",
  justifyLeft: "Alinhar texto � esquerda",
  justifyRight: "Alinhar texto � direita",
  justifyFull: "Justificar",
  insertUnorderedList: "Inserir list n�o ordenada",
  insertOrderedList: "Iserir lista ordenada",
  indent: "Indentar",
  outdent: "Outdent",
  createLink: "Inserir link",
  unlink: "Remover link",
  insertImage: "Inserir imagem",
  insertHtml: "Inserir HTML",
  fontName: "Selecionar fam�lia da fonte",
  fontNameInherit: "(fonte herdada)",
  fontSize: "Selecionar tamanho da fonte",
  fontSizeInherit: "(tamanho herdado)",
  formatBlock: "Formatar",
  foreColor: "Cor",
  backColor: "Cor de fundo",
  style: "Estilos",
  emptyFolder: "Pasta Vazia",
  uploadFile: "Enviar",
  orderBy: "Classificar por:",
  orderBySize: "Tamanho",
  orderByName: "Nome",
  invalidFileType: "O arquivo selecionado \"{0}\" n�o � v�lido. Os arquivos suportados s�o {1}.",
  deleteFile: 'Tem certeza que deseja excluir "{0}"?',
  overwriteFile: 'Um arquivo com o nome "{0}" j� existe na pasta atual. Voc� quer sobrescrev�-lo?',
  directoryNotFound: "Uma pasta com este nome n�o foi encontrada.",
  imageWebAddress: "Endere�o internet",
  imageAltText: "Texto alternativo",
  dialogInsert: "Inserir",
  dialogButtonSeparator: "ou",
  dialogCancel: "Cancelar"
 /***************************************************************************/   
});
