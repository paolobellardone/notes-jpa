define(['exports'], (function(e){"use strict";const t={calendarDateConverter_parseError:e=>"Enter a complete date like this: "+e.dateExample+".",calendarMonthConverter_parseError:e=>"Enter a month and year like this: "+e.dateExample+".",chart_labelGroup:()=>"Groupe",chart_labelSeries:()=>"Série",chart_labelValue:()=>"Valeur",checkboxSet_requiredMessageDetail:()=>"Obligatoire",checkbox_requiredMessageDetail:()=>"Obligatoire",close:()=>"Fermer",collection_noData:()=>"Aucune donnée à afficher.",collection_selectAllRows:()=>"Sélectionner toutes les rangées",collection_selectRow:e=>"Sélectionner la rangée "+e.ROW_NAME,collection_sortDisabled:()=>"Ne peut pas être trié",collection_sortEnabled:()=>"Peut être trié",confirmation:()=>"Confirmation",dataVisualization_labelAndValue:e=>e.LABEL+": "+e.VALUE,dataVisualization_labelCountWithTotal:e=>e.itemCount+" de "+e.totalCount,dataVisualization_noData:()=>"Aucune donnée à afficher",dataVisualization_stateSelected:()=>"Sélectionné",dataVisualization_stateUnselected:()=>"Non sélectionné",error:()=>"Erreur",expandableList_expandCollapseInstructionText:()=>"Utilisez les touches fléchées pour réduire ou étendre l'affichage",expandableList_groupCollapse:()=>"Réduit",expandableList_groupExpand:()=>"Étendu",filePicker_addFiles:()=>"Ajouter des fichiers",filePicker_dropzonePrimaryText:()=>"Glisser-déposer",filePicker_dropzoneSecondaryText:()=>"Sélectionner un fichier ou déposer un fichier ici",filePicker_dropzoneSecondaryTextMultiple:()=>"Sélectionner des fichiers ou déposer des fichiers ici",filePicker_multipleFileTypeUploadError:e=>"Vous ne pouvez pas charger des fichiers ayant les types suivants : "+e.fileTypes,filePicker_singleFileUploadError:()=>"Charger un fichier à la fois",filePicker_singleTypeUploadError:e=>"Vous ne pouvez pas charger des fichier de type "+e.fileType,filePicker_unknownFileTypeUploadError:()=>"inconnu",formControl_clear:()=>"Effacer",formControl_day:()=>"Jour",formControl_helpAvailable:()=>"Aide disponible",formControl_limitReached:e=>"Vous avez atteint la limite de "+({one:new Intl.NumberFormat("fr-CA").format(e.CHARACTER_LIMIT)+" caractère",many:new Intl.NumberFormat("fr-CA").format(e.CHARACTER_LIMIT)+" caractères"}[new Intl.PluralRules("fr-CA").select(e.CHARACTER_LIMIT)]||new Intl.NumberFormat("fr-CA").format(e.CHARACTER_LIMIT)+" caractères")+".",formControl_loading:()=>"Chargement",formControl_maxLengthExceeded:e=>"Longueur maximale "+e.MAX_LENGTH+" dépassée.",formControl_maxLengthRemaining:e=>e.CHARACTER_COUNT+" caractères restants.",formControl_month:()=>"Mois",formControl_readOnly:()=>"Lecture seule",formControl_requiredMessageDetail:()=>"Entrez une valeur.",formControl_year:()=>"Année",gantt_labelDate:()=>"Date",gantt_labelEnd:()=>"Fin",gantt_labelLabel:()=>"Étiquette",gantt_labelRow:()=>"Rangée",gantt_labelStart:()=>"Début",indexer_disabledLabel:e=>e.SECTION+". Aucune section correspondante trouvée.",indexer_keyboardInstructionText:()=>"Appuyez sur Entrée pour sélectionner la valeur.",indexer_othersLabel:()=>"#",indexer_separatorLabel:e=>"Entre "+e.FROM_SECTION+" et "+e.TO_SECTION+".",indexer_touchInstructionText:()=>"Touchez deux fois et maintenez pour passer en mode geste, puis glissez vers le haut ou le bas pour ajuster la valeur.",info:()=>"Infos",inputDateMask_date_cleared:()=>"Date effacée",inputDateMask_dayPlaceholder:()=>"jj",inputDateMask_empty_segment:()=>"Vide",inputDateMask_monthPlaceholder:()=>"mm",inputDateMask_yearPlaceholder:()=>"aaaa",inputMonthMask_dateRangeOverflowMessageDetail:e=>"Enter a month and year that's on or before "+e.max+".",inputMonthMask_dateRangeUnderflowMessageDetail:e=>"Enter a month and year that's on or after "+e.min+".",inputNumber_converterParseError:()=>"Entrez un nombre.",inputNumber_decrease:()=>"Réduire",inputNumber_increase:()=>"Augmenter",inputPassword_hidden:()=>"Mot de passe masqué",inputPassword_hide:()=>"Masquer le mot de passe",inputPassword_show:()=>"Afficher le mot passe",inputSensitiveText_hidden:()=>"Sensitive text hidden",list_suggestion:()=>"Suggestion",messageToast_allMessagesClosed:()=>"Tous les avis Toast sont fermés.",message_close:()=>"Fermer",message_confirmation:()=>"Réussite",message_error:()=>"Erreur",message_info:()=>"Infos",message_navigationFromMessagesRegion:()=>"Entrée dans la région des messages. Appuyez sur F6 pour retourner au dernier élément ciblé.",message_navigationToMessagesRegion:()=>"La région des messages contient des nouveaux messages. Appuyez sur F6 pour accéder à la région du message le plus récent.",message_warning:()=>"Avertissement",noData_message:()=>"Aucun élément à afficher",overflowItemLabel:()=>"Onglets supplémentaires",plural_separator:()=>", ",progressIndeterminate:()=>"En cours",radio_helpForRadio:()=>"Aide pour le bouton radio",radio_requiredMessageDetail:()=>"Sélectionner une valeur.",selectMultiple_apply:()=>"Appliquer",selectMultiple_back:()=>"Précédent",selectMultiple_countPlus:e=>e.COUNT+"+",selectMultiple_highlightSelectedTagsInstructionText:()=>"Use left and right arrow keys to highlight selected values.",selectMultiple_removeSelectedTagInstructionText:()=>"Appuyez sur la touche de retour arrière ou sur la touche de suppression pour supprimer la valeur sélectionnée.",selectMultiple_selectedValues:()=>"Valeurs sélectionnées",selectMultiple_showSelectedValues:()=>"Afficher les valeurs sélectionnées uniquement.",selectMultiple_valuesSelected:e=>e.VALUE_COUNT+" valeurs sélectionnées.",select_addToList:()=>"Ajouter à la liste",select_addToListAvailable:()=>"Ajouter à la liste disponible",select_moreSearchOptions:()=>"Autres options de recherche",select_moreSearchOptionsAvailable:()=>"Autres options de recherche disponibles",select_noMatchesFound:()=>"Aucune correspondance n'a été trouvée.",select_oneMatchFound:()=>"Une correspondance a été trouvée",select_requiredMessageDetail:()=>"Sélectionner une valeur.",select_sizeMatchesFound:e=>e.TOTAL_SIZE+" correspondances trouvées",select_sizeOrMoreMatchesFound:e=>e.TOTAL_SIZE+" correspondances ou plus trouvées",selectorAll_deselectAll:()=>"Deselect all",selectorAll_selectAll:()=>"Tout sélectionner",selector_selected:()=>"Case cochée",selector_unselected:()=>"Case non cochée",tabBarNavigationList_removeCueText:()=>"Supprimable",timeComponent_tooltipZoomIn:()=>"Zoom avant",timeComponent_tooltipZoomOut:()=>"Zoom arrière",train_current:()=>"Courante",train_message_type:()=>"Type de message",train_not_visited:()=>"Non visitée",train_status:e=>"Étape "+e.currentStep+" de "+e.numberOfSteps,train_visited:()=>"Visitée",userAssistance_learnMore:()=>"En savoir plus",userAssistance_required:()=>"Obligatoire",viz_drillable:()=>"Forage possible",warn:()=>"Avertissement"};e.default=t,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=bundle.js.map
