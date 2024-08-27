define(['exports'], (function(e){"use strict";const a={accAnnounceMovedKey:e=>"Spostato "+e.itemKey+" "+e.position+" "+e.referenceKey+".",accCommandKey:()=>"Comando",accControlKey:()=>"Chiudi",accPositionAfter:()=>"dopo",accPositionBefore:()=>"prima",accReorderInstructions:e=>"Tenere premuti i tasti "+e.keyPressed+" e Maiusc, quindi utilizzare i tasti freccia per riordinare.",calendarDateConverter_parseError:e=>"Immettere una data completa simile alla seguente: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Immettere un mese e un anno simili ai seguenti: "+e.dateExample+".",chart_labelGroup:()=>"Gruppo",chart_labelSeries:()=>"Serie",chart_labelValue:()=>"Valore",checkboxSet_requiredMessageDetail:()=>"Obbligatorio",checkbox_requiredMessageDetail:()=>"Obbligatorio",close:()=>"Chiudi",collection_noData:()=>"Nessun dato da visualizzare.",collection_selectAllRows:()=>"Seleziona tutte le righe",collection_selectRow:e=>"Seleziona la riga "+e.ROW_NAME,collection_sortDisabled:()=>"Non ordinabile",collection_sortEnabled:()=>"Ordinabile",confirmation:()=>"Conferma",datePicker_currentDate:()=>"Data corrente",datePicker_goToToday:()=>"Vai a oggi",datePicker_label:()=>"Selettore data",datePicker_month:()=>"Mese",datePicker_months:()=>"Mesi",datePicker_next:()=>"Successivo",datePicker_nextDecade:()=>"Decennio successivo",datePicker_nextMonth:()=>"Mese successivo",datePicker_prev:()=>"Precedente",datePicker_prevDecade:()=>"Decennio precedente",datePicker_prevMonth:()=>"Mese precedente",datePicker_restricted:()=>"Limitato",datePicker_selected:()=>"Selezionato",datePicker_today:()=>"Oggi",datePicker_weekNum:e=>"Settimana "+e.NUM,datePicker_weekNumColLabel:()=>"Numero settimana",datePicker_year:()=>"Anno",datePicker_years:()=>"Anni",error:()=>"Errore",expandableList_expandCollapseInstructionText:()=>"Utilizzare i tasti freccia per espandere e comprimere",expandableList_groupCollapse:()=>"Compresso",expandableList_groupExpand:()=>"Espanso",filePicker_addFiles:()=>"Aggiungi file",filePicker_dropzonePrimaryText:()=>"Trascina selezione",filePicker_dropzoneSecondaryText:()=>"Selezionare un file o rilasciarne uno qui",filePicker_dropzoneSecondaryTextMultiple:()=>"Selezionare o rilasciare i file qui",filePicker_multipleFileTypeUploadError:e=>"Impossibile caricare file di questo tipo: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Caricare un solo file alla volta",filePicker_singleTypeUploadError:e=>"Impossibile caricare i file del tipo "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"sconosciuto",formControl_clear:()=>"Cancella",formControl_day:()=>"Giorno",formControl_helpAvailable:()=>"Guida disponibile",formControl_hide:()=>"Nascondi",formControl_limitReached:e=>"È stato raggiunto il limite di "+({one:new Intl.NumberFormat("it").format(e.CHARACTER_LIMIT)+" carattere",many:new Intl.NumberFormat("it").format(e.CHARACTER_LIMIT)+" di caratteri"}[new Intl.PluralRules("it").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("it").format(e.CHARACTER_LIMIT)+" carattere")+".",formControl_loading:()=>"Caricamento",formControl_maxLength:e=>"È possibile immettere il seguente numero massimo di caratteri: "+e.MAX_LENGTH+".",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+" caratteri rimanenti.",formControl_month:()=>"Mese",formControl_readOnly:()=>"Sola lettura",formControl_requiredMessageDetail:()=>"Immettere un valore.",formControl_show:()=>"Mostra",formControl_year:()=>"Anno",gantt_labelDate:()=>"Data",gantt_labelEnd:()=>"Fine",gantt_labelLabel:()=>"Etichetta",gantt_labelRow:()=>"Riga",gantt_labelStart:()=>"Inizio",indexer_disabledLabel:e=>e.SECTION+". Nessuna sezione corrispondente trovata.",indexer_keyboardInstructionText:()=>"Premere Invio per selezionare un valore.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Tra "+e.FROM_SECTION+" e "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Toccare 2 volte e tenere premuto per immettere la modalità movimento,quindi trascinare su o giù per regolare il valore.",info:()=>"Informazioni",inputDateMask_date_cleared:()=>"Data cancellazione",inputDateMask_dayPlaceholder:()=>"gg",inputDateMask_empty_segment:()=>"Vuoto",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"aaaa",inputDatePicker_dateRangeOverflowMessageDetail:e=>"Immettere una data uguale o precedente a "+e.max+".",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"Immettere una data uguale o successiva a "+e.min+".",inputDatePicker_dateRestrictionMessageDetail:()=>"Immettere una data disponibile.",inputDatePicker_instruction:()=>"Premere il tasto di tabulazione per accedere al calendario.",inputDatePicker_selectDate:()=>"Selezionare una data",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Immettere un mese e un anno uguali o precedenti a "+e.max+".",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Immettere un mese e un anno uguali o successivi a "+e.min+".",inputNumber_converterParseError:()=>"Immettere un numero.",inputNumber_decrease:()=>"Riduci",inputNumber_increase:()=>"Aumenta",inputPassword_hidden:()=>"Password nascosta",inputPassword_hide:()=>"Nascondi password",inputPassword_show:()=>"Mostra password",inputSensitiveText_hidden:()=>"Testo riservato nascosto",list_msgFetchCompleted:()=>"Caricato",list_msgFetchingData:()=>"Caricamento",list_suggestion:()=>"Suggerimento",messageToast_allMessagesClosed:()=>"Tutti i messaggi popup sono chiusi.",message_close:()=>"Chiudi",message_confirmation:()=>"Operazione riuscita",message_error:()=>"Errore",message_info:()=>"Informazioni",message_navigationFromMessagesRegion:()=>"Accesso all'area messaggi. Premere F6 per ritornare all'elemento evidenziato in precedenza.",message_navigationToMessagesRegion:()=>"L'area messaggi contiene nuovi messaggi. Premere F6 per andare all'area messaggi più recenti.",message_warning:()=>"Avvertenza",noData_message:()=>"Nessun elemento da visualizzare",overflowItemLabel:()=>"Altre schede",plural_separator:()=>", ",progressIndeterminate:()=>"In corso",radio_helpForRadio:()=>"Guida per il pulsante di scelta",radio_requiredMessageDetail:()=>"Selezionare un valore.",selectMultiple_apply:()=>"Applica",selectMultiple_back:()=>"Indietro",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Usare i tasti freccia sinistra e destra per evidenziare i valori selezionati.",selectMultiple_removeSelectedTagInstructionText:()=>"Premere Backspace o Canc per rimuovere il valore selezionato.",selectMultiple_selectedValues:()=>"Valori selezionati",selectMultiple_showSelectedValues:()=>"Mostra solo i valori selezionati.",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+" valori selezionati.",select_addToList:()=>"Aggiungi a lista",select_addToListAvailable:()=>"Aggiungi a lista disponibile",select_moreSearchOptions:()=>"Altre opzioni di ricerca",select_moreSearchOptionsAvailable:()=>"Altre opzioni di ricerca disponibili",select_noMatchesFound:()=>"Nessuna corrispondenza trovata.",select_oneMatchFound:()=>"Una corrispondenza trovata",select_requiredMessageDetail:()=>"Selezionare un valore.",select_sizeMatchesFound:e=>"Trovate "+e.TOTAL_SIZE+" corrispondenze",select_sizeOrMoreMatchesFound:e=>"Trovate "+e.TOTAL_SIZE+" o più corrispondenze",selectorAll_deselectAll:()=>"Deseleziona tutto",selectorAll_selectAll:()=>"Seleziona tutto",selector_selected:()=>"Casella di controllo selezionata",selector_unselected:()=>"Casella di controllo non selezionata",tabBarNavigationList_removeCueText:()=>"Rimovibile",timeComponent_tooltipZoomIn:()=>"Ingrandisci",timeComponent_tooltipZoomOut:()=>"Riduci",train_current:()=>"Corrente",train_message_type:()=>"Tipo di messaggio",train_not_visited:()=>"Non visitato",train_status:e=>"Passo "+e.currentStep+" di "+e.numberOfSteps,train_visited:()=>"Visitato",userAssistance_learnMore:()=>"Ulteriori informazioni",userAssistance_required:()=>"Obbligatorio",vis_clearSelection:()=>"Cancella selezione",vis_drillable:()=>"Con drilling",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+" di "+e.totalCount,vis_marqueeSelectTooltip:()=>"Selezione rettangolo di selezione",vis_marqueeZoomTooltip:()=>"Zoom rettangolo di selezione",vis_noData:()=>"Nessun dato da visualizzare",vis_panTooltip:()=>"Panoramica",vis_stateLoaded:()=>"Caricato",vis_stateLoading:()=>"Caricamento",vis_stateSelected:()=>"Selezionato",vis_stateUnselected:()=>"Non selezionato",warn:()=>"Avvertenza"};e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map