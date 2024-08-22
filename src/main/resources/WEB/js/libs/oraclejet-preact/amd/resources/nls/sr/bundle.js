define(['exports'], (function(e){"use strict";const t={accAnnounceMovedKey:e=>"Премештено: "+e.itemKey+" "+e.position+" "+e.referenceKey+".",accCommandKey:()=>"Команда",accControlKey:()=>"Затвори",accPositionAfter:()=>"после",accPositionBefore:()=>"пре",accReorderInstructions:e=>"Притисните и задржите тастер "+e.keyPressed+" и тастере shift, па употребите тастере са стрелицама да бисте променили редослед.",calendarDateConverter_parseError:e=>"Унесите цео датум, овако: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Унесите месец и годину, овако: "+e.dateExample+".",chart_labelGroup:()=>"Група",chart_labelSeries:()=>"Серија",chart_labelValue:()=>"Вредност",checkboxSet_requiredMessageDetail:()=>"Обавезно",checkbox_requiredMessageDetail:()=>"Обавезно",close:()=>"Затвори",collection_noData:()=>"Нема података за приказ.",collection_selectAllRows:()=>"Изабери све редове",collection_selectRow:e=>"Изаберите ред "+e.ROW_NAME,collection_sortDisabled:()=>"Не може да се сортира",collection_sortEnabled:()=>"Може да се сортира",confirmation:()=>"Потврда",datePicker_currentDate:()=>"Тренутни датум",datePicker_goToToday:()=>"Иди на данас",datePicker_label:()=>"Бирач датума",datePicker_month:()=>"Месец",datePicker_months:()=>"Месеци",datePicker_next:()=>"Следеће",datePicker_nextDecade:()=>"Следећа деценија",datePicker_nextMonth:()=>"Следећи месец",datePicker_prev:()=>"Претходно",datePicker_prevDecade:()=>"Претходна деценија",datePicker_prevMonth:()=>"Претходни месец",datePicker_restricted:()=>"Ограничено",datePicker_selected:()=>"Изабрано",datePicker_today:()=>"данас",datePicker_weekNum:e=>"Недеља "+e.NUM,datePicker_weekNumColLabel:()=>"Број недеље",datePicker_year:()=>"Година",datePicker_years:()=>"Године",error:()=>"Грешка",expandableList_expandCollapseInstructionText:()=>"Користите стрелице да бисте проширивали и скупљали",expandableList_groupCollapse:()=>"Скупљено",expandableList_groupExpand:()=>"Проширено",filePicker_addFiles:()=>"Додај датотеке",filePicker_dropzonePrimaryText:()=>"Превуците и отпустите",filePicker_dropzoneSecondaryText:()=>"Изаберите датотеку или је отпустите овде",filePicker_dropzoneSecondaryTextMultiple:()=>"Изаберите или превуците датотеке овде",filePicker_multipleFileTypeUploadError:e=>"Не можете да отпремате датотеке типа: "+e.fileTypes,filePicker_singleFileUploadError:()=>"Отпремајте једну по једну датотеку",filePicker_singleTypeUploadError:e=>"Не можете да отпремате датотеке типа "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"непознато",formControl_clear:()=>"Обриши",formControl_day:()=>"Дан",formControl_helpAvailable:()=>"Помоћ је доступна",formControl_hide:()=>"Сакриј",formControl_limitReached:e=>"Достигли сте ограничење од "+({one:new Intl.NumberFormat("sr").format(e.CHARACTER_LIMIT)+" знака",few:new Intl.NumberFormat("sr").format(e.CHARACTER_LIMIT)+" знака"}[new Intl.PluralRules("sr").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("sr").format(e.CHARACTER_LIMIT)+" знакова")+".",formControl_loading:()=>"Учитава се",formControl_maxLength:e=>"Не можете да унесете више од следећег броја знакова: "+e.MAX_LENGTH+".",formControl_maxLengthRemaining:e=>"Преостали број знакова је "+e.CHARACTER_COUNT+".",formControl_month:()=>"Месец",formControl_readOnly:()=>"Само за читање",formControl_requiredMessageDetail:()=>"Унесите вредност.",formControl_show:()=>"Прикажи",formControl_year:()=>"Година",gantt_labelDate:()=>"Датум",gantt_labelEnd:()=>"Крај",gantt_labelLabel:()=>"Ознака",gantt_labelRow:()=>"Ред",gantt_labelStart:()=>"Почетак",indexer_disabledLabel:e=>e.SECTION+". Нису пронађени одељци који се подударају.",indexer_keyboardInstructionText:()=>"Притисните 'enter' да бисте изабрали вредност.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Између "+e.FROM_SECTION+" и "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Двапут додирните и задржите да бисте прешли на режим гестикулације, а затим превуците нагоре или надоле да бисте прилагодили вредност.",info:()=>"Информације",inputDateMask_date_cleared:()=>"Датум је обрисан",inputDateMask_dayPlaceholder:()=>"дд",inputDateMask_empty_segment:()=>"Празно",inputDateMask_monthPlaceholder:()=>"мм",inputDateMask_yearPlaceholder:()=>"гггг",inputDatePicker_dateRangeOverflowMessageDetail:e=>"Унесите датум који је "+e.max+" или ранији.",inputDatePicker_dateRangeUnderflowMessageDetail:e=>"Унесите датум који је "+e.min+" или каснији.",inputDatePicker_dateRestrictionMessageDetail:()=>"Унесите доступан датум.",inputDatePicker_instruction:()=>"Притисните табулатор да бисте приступили календару.",inputDatePicker_selectDate:()=>"Изаберите датум",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Унесите месец и годину који су "+e.max+" или раније.",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Унесите месец и годину који су "+e.min+" или касније.",inputNumber_converterParseError:()=>"Унесите број.",inputNumber_decrease:()=>"Смањи",inputNumber_increase:()=>"Повећај",inputPassword_hidden:()=>"Лозинка је скривена",inputPassword_hide:()=>"Сакриј лозинку",inputPassword_show:()=>"Прикажи лозинку",inputSensitiveText_hidden:()=>"Осетљиви текст је скривен",list_msgFetchCompleted:()=>"Учитано",list_msgFetchingData:()=>"Учитава се",list_suggestion:()=>"Предлог",messageToast_allMessagesClosed:()=>"Све искачуће поруке су затворене.",message_close:()=>"Затвори",message_confirmation:()=>"Успешно",message_error:()=>"Грешка",message_info:()=>"Информације",message_navigationFromMessagesRegion:()=>"Прелазак на област за поруке. Притисните F6 да бисте се вратили на елемент који је пре тога био у фокусу.",message_navigationToMessagesRegion:()=>"Област за поруке садржи нове поруке. Притисните F6 да бисте прешли на регион најновије поруке.",message_warning:()=>"Упозорење",noData_message:()=>"Нема ставки за приказ",overflowItemLabel:()=>"Још картица",plural_separator:()=>", ",progressIndeterminate:()=>"У току",radio_helpForRadio:()=>"Помоћ за радио дугме",radio_requiredMessageDetail:()=>"Изаберите вредност.",selectMultiple_apply:()=>"Примени",selectMultiple_back:()=>"Назад",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Користите стрелице налево и надесно да бисте означили изабране вредности.",selectMultiple_removeSelectedTagInstructionText:()=>"Притисните тастере Backspace или Delete да бисте уклонили изабрану вредност.",selectMultiple_selectedValues:()=>"Изабране вредности",selectMultiple_showSelectedValues:()=>"Приказују се само изабране вредности.",selectMultiple_valuesSelected:e=>"Изабраних вредности: "+e.VALUE_COUNT+" .",select_addToList:()=>"Додај на листу",select_addToListAvailable:()=>"Додавање на листу је доступно",select_moreSearchOptions:()=>"Више опција претраживања",select_moreSearchOptionsAvailable:()=>"Више опција претраживања је доступно",select_noMatchesFound:()=>"Није пронађен ниједан погодак.",select_oneMatchFound:()=>"Пронађен је један резултат",select_requiredMessageDetail:()=>"Изаберите вредност.",select_sizeMatchesFound:e=>"Пронађених подударања: "+e.TOTAL_SIZE,select_sizeOrMoreMatchesFound:e=>"Пронађених подударања: "+e.TOTAL_SIZE+" или више",selectorAll_deselectAll:()=>"Опозови избор свега",selectorAll_selectAll:()=>"Изабери све",selector_selected:()=>"Поље за потврду је означено",selector_unselected:()=>"Поље за потврду није означено",tabBarNavigationList_removeCueText:()=>"Може да се уклони",timeComponent_tooltipZoomIn:()=>"Увећај",timeComponent_tooltipZoomOut:()=>"Умањи",train_current:()=>"Тренутно",train_message_type:()=>"Тип поруке",train_not_visited:()=>"Није посећено",train_status:e=>"Корак "+e.currentStep+" од "+e.numberOfSteps,train_visited:()=>"Посећено",userAssistance_learnMore:()=>"Сазнајте више",userAssistance_required:()=>"Обавезно",vis_clearSelection:()=>"Обриши избор",vis_drillable:()=>"Може да се детаљно анализира",vis_labelAndValue:e=>e.LABEL+": "+e.VALUE,vis_labelCountWithTotal:e=>e.itemCount+" од "+e.totalCount,vis_marqueeSelectTooltip:()=>"Избор помичног текста",vis_marqueeZoomTooltip:()=>"Увећавање помичног текста",vis_noData:()=>"Нема података за приказ",vis_panTooltip:()=>"Померање",vis_stateLoaded:()=>"Учитано",vis_stateLoading:()=>"Учитава се",vis_stateSelected:()=>"Изабрано",vis_stateUnselected:()=>"Неизабрано",warn:()=>"Упозорење"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
