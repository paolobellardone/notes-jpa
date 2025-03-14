import { JetElement, JetSettableProperties, JetElementCustomEventStrict, JetSetPropertyType } from 'ojs/index';
import { GlobalProps } from 'ojs/ojvcomponent';
import 'ojs/oj-jsx-interfaces';
import { InputDatePicker as PreactInputDatePicker } from '@oracle/oraclejet-preact/UNSAFE_InputDatePicker';
import type { DateISOStr } from '@oracle/oraclejet-preact/UNSAFE_IntlDateTime';
import type { CalendarDate, CalendarDateRequired } from '@oracle/oraclejet-preact/utils/UNSAFE_calendarDateUtils';
import type { LayoutColumnSpan } from '@oracle/oraclejet-preact/utils/UNSAFE_styles/Layout';
import type { DisplayOptions, Help, HelpHints } from 'oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText';
import type { ValidState } from 'oj-c/hooks/UNSAFE_useEditableValue';
import { type ExtendGlobalProps, type ObservedGlobalProps, type PropertyChanged, type ReadOnlyPropertyChanged } from 'ojs/ojvcomponent';
import type { ComponentProps, ComponentType, Ref } from 'preact';
import type { OverflowMessageDetailParameters, UnderflowMessageDetailParameters } from './DateRangeValidator';
import type { RestrictionMessageDetailParameters } from './DateRestrictionValidator';
import type Validator = require('ojs/ojvalidator');
import type AsyncValidator = require('ojs/ojvalidator-async');
import 'css!oj-c/input-date-picker/input-date-picker-styles.css';
type PreactInputDatePickerProps = ComponentProps<typeof PreactInputDatePicker>;
type DisplayOptionsProps = Omit<DisplayOptions, 'converterHint'>;
type Props = ObservedGlobalProps<'aria-describedby' | 'id'> & {
    columnSpan?: LayoutColumnSpan;
    containerReadonly?: boolean;
    dateRangeOverflowMessageDetail?: (p: OverflowMessageDetailParameters) => string;
    dateRangeUnderflowMessageDetail?: (p: UnderflowMessageDetailParameters) => string;
    dateRestrictionMessageDetail?: (p: RestrictionMessageDetailParameters) => string;
    dayFormatter?: (date: CalendarDateRequired) => {
        state: 'disabled' | 'enabled' | 'restricted';
    };
    daysOutsideMonth?: PreactInputDatePickerProps['daysOutsideMonth'];
    disabled?: PreactInputDatePickerProps['isDisabled'];
    displayOptions?: DisplayOptionsProps;
    help?: Help;
    helpHints?: HelpHints;
    labelEdge?: PreactInputDatePickerProps['labelEdge'];
    labelHint: PreactInputDatePickerProps['label'];
    labelStartWidth?: PreactInputDatePickerProps['labelStartWidth'];
    labelWrapping?: 'truncate' | 'wrap';
    max?: DateISOStr | null;
    messagesCustom?: PreactInputDatePickerProps['messages'];
    min?: DateISOStr | null;
    monthAndYearPicker?: PreactInputDatePickerProps['monthAndYearPicker'];
    readonly?: PreactInputDatePickerProps['isReadonly'];
    required?: PreactInputDatePickerProps['isRequired'];
    requiredMessageDetail?: string;
    textAlign?: PreactInputDatePickerProps['textAlign'];
    todayTimeZone?: PreactInputDatePickerProps['todayTimeZone'];
    todayButton?: PreactInputDatePickerProps['todayButton'];
    userAssistanceDensity?: PreactInputDatePickerProps['userAssistanceDensity'];
    validators?: (AsyncValidator<DateISOStr> | Validator<DateISOStr>)[] | null;
    value?: DateISOStr | null;
    weekDisplay?: PreactInputDatePickerProps['weekDisplay'];
    onMessagesCustomChanged?: PropertyChanged<PreactInputDatePickerProps['messages']>;
    onRawValueChanged?: ReadOnlyPropertyChanged<CalendarDate | undefined>;
    onValidChanged?: ReadOnlyPropertyChanged<ValidState>;
    onValueChanged?: PropertyChanged<string | null>;
};
type InputDatePickerHandle = {
    blur: () => void;
    focus: () => void;
    showMessages: () => void;
    reset: () => void;
    validate: () => Promise<'valid' | 'invalid'>;
};
declare function InputDatePickerImpl({ columnSpan, daysOutsideMonth, disabled, displayOptions, help, helpHints, messagesCustom, monthAndYearPicker, required, todayButton, validators, value, weekDisplay, ...otherProps }: Props, ref: Ref<InputDatePickerHandle>): import("preact").JSX.Element;
export declare const InputDatePicker: ComponentType<ExtendGlobalProps<ComponentProps<typeof InputDatePickerImpl>>>;
export type InputDatePickerProps = Props;
export type InputDatePickerRef = Ref<InputDatePickerHandle>;
export {};
export interface CInputDatePickerElement extends JetElement<CInputDatePickerElementSettableProperties>, CInputDatePickerElementSettableProperties {
    readonly rawValue?: Parameters<Required<Props>['onRawValueChanged']>[0];
    readonly valid?: Parameters<Required<Props>['onValidChanged']>[0];
    addEventListener<T extends keyof CInputDatePickerElementEventMap>(type: T, listener: (this: HTMLElement, ev: CInputDatePickerElementEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof CInputDatePickerElementSettableProperties>(property: T): CInputDatePickerElement[T];
    getProperty(property: string): any;
    setProperty<T extends keyof CInputDatePickerElementSettableProperties>(property: T, value: CInputDatePickerElementSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, CInputDatePickerElementSettableProperties>): void;
    setProperties(properties: CInputDatePickerElementSettablePropertiesLenient): void;
    blur: () => void;
    focus: () => void;
    reset: () => void;
    showMessages: () => void;
    validate: () => Promise<'invalid' | 'valid'>;
}
export namespace CInputDatePickerElement {
    type columnSpanChanged = JetElementCustomEventStrict<CInputDatePickerElement['columnSpan']>;
    type containerReadonlyChanged = JetElementCustomEventStrict<CInputDatePickerElement['containerReadonly']>;
    type dateRangeOverflowMessageDetailChanged = JetElementCustomEventStrict<CInputDatePickerElement['dateRangeOverflowMessageDetail']>;
    type dateRangeUnderflowMessageDetailChanged = JetElementCustomEventStrict<CInputDatePickerElement['dateRangeUnderflowMessageDetail']>;
    type dateRestrictionMessageDetailChanged = JetElementCustomEventStrict<CInputDatePickerElement['dateRestrictionMessageDetail']>;
    type dayFormatterChanged = JetElementCustomEventStrict<CInputDatePickerElement['dayFormatter']>;
    type daysOutsideMonthChanged = JetElementCustomEventStrict<CInputDatePickerElement['daysOutsideMonth']>;
    type disabledChanged = JetElementCustomEventStrict<CInputDatePickerElement['disabled']>;
    type displayOptionsChanged = JetElementCustomEventStrict<CInputDatePickerElement['displayOptions']>;
    type helpChanged = JetElementCustomEventStrict<CInputDatePickerElement['help']>;
    type helpHintsChanged = JetElementCustomEventStrict<CInputDatePickerElement['helpHints']>;
    type labelEdgeChanged = JetElementCustomEventStrict<CInputDatePickerElement['labelEdge']>;
    type labelHintChanged = JetElementCustomEventStrict<CInputDatePickerElement['labelHint']>;
    type labelStartWidthChanged = JetElementCustomEventStrict<CInputDatePickerElement['labelStartWidth']>;
    type labelWrappingChanged = JetElementCustomEventStrict<CInputDatePickerElement['labelWrapping']>;
    type maxChanged = JetElementCustomEventStrict<CInputDatePickerElement['max']>;
    type messagesCustomChanged = JetElementCustomEventStrict<CInputDatePickerElement['messagesCustom']>;
    type minChanged = JetElementCustomEventStrict<CInputDatePickerElement['min']>;
    type monthAndYearPickerChanged = JetElementCustomEventStrict<CInputDatePickerElement['monthAndYearPicker']>;
    type rawValueChanged = JetElementCustomEventStrict<CInputDatePickerElement['rawValue']>;
    type readonlyChanged = JetElementCustomEventStrict<CInputDatePickerElement['readonly']>;
    type requiredChanged = JetElementCustomEventStrict<CInputDatePickerElement['required']>;
    type requiredMessageDetailChanged = JetElementCustomEventStrict<CInputDatePickerElement['requiredMessageDetail']>;
    type textAlignChanged = JetElementCustomEventStrict<CInputDatePickerElement['textAlign']>;
    type todayButtonChanged = JetElementCustomEventStrict<CInputDatePickerElement['todayButton']>;
    type todayTimeZoneChanged = JetElementCustomEventStrict<CInputDatePickerElement['todayTimeZone']>;
    type userAssistanceDensityChanged = JetElementCustomEventStrict<CInputDatePickerElement['userAssistanceDensity']>;
    type validChanged = JetElementCustomEventStrict<CInputDatePickerElement['valid']>;
    type validatorsChanged = JetElementCustomEventStrict<CInputDatePickerElement['validators']>;
    type valueChanged = JetElementCustomEventStrict<CInputDatePickerElement['value']>;
    type weekDisplayChanged = JetElementCustomEventStrict<CInputDatePickerElement['weekDisplay']>;
}
export interface CInputDatePickerElementEventMap extends HTMLElementEventMap {
    'columnSpanChanged': JetElementCustomEventStrict<CInputDatePickerElement['columnSpan']>;
    'containerReadonlyChanged': JetElementCustomEventStrict<CInputDatePickerElement['containerReadonly']>;
    'dateRangeOverflowMessageDetailChanged': JetElementCustomEventStrict<CInputDatePickerElement['dateRangeOverflowMessageDetail']>;
    'dateRangeUnderflowMessageDetailChanged': JetElementCustomEventStrict<CInputDatePickerElement['dateRangeUnderflowMessageDetail']>;
    'dateRestrictionMessageDetailChanged': JetElementCustomEventStrict<CInputDatePickerElement['dateRestrictionMessageDetail']>;
    'dayFormatterChanged': JetElementCustomEventStrict<CInputDatePickerElement['dayFormatter']>;
    'daysOutsideMonthChanged': JetElementCustomEventStrict<CInputDatePickerElement['daysOutsideMonth']>;
    'disabledChanged': JetElementCustomEventStrict<CInputDatePickerElement['disabled']>;
    'displayOptionsChanged': JetElementCustomEventStrict<CInputDatePickerElement['displayOptions']>;
    'helpChanged': JetElementCustomEventStrict<CInputDatePickerElement['help']>;
    'helpHintsChanged': JetElementCustomEventStrict<CInputDatePickerElement['helpHints']>;
    'labelEdgeChanged': JetElementCustomEventStrict<CInputDatePickerElement['labelEdge']>;
    'labelHintChanged': JetElementCustomEventStrict<CInputDatePickerElement['labelHint']>;
    'labelStartWidthChanged': JetElementCustomEventStrict<CInputDatePickerElement['labelStartWidth']>;
    'labelWrappingChanged': JetElementCustomEventStrict<CInputDatePickerElement['labelWrapping']>;
    'maxChanged': JetElementCustomEventStrict<CInputDatePickerElement['max']>;
    'messagesCustomChanged': JetElementCustomEventStrict<CInputDatePickerElement['messagesCustom']>;
    'minChanged': JetElementCustomEventStrict<CInputDatePickerElement['min']>;
    'monthAndYearPickerChanged': JetElementCustomEventStrict<CInputDatePickerElement['monthAndYearPicker']>;
    'rawValueChanged': JetElementCustomEventStrict<CInputDatePickerElement['rawValue']>;
    'readonlyChanged': JetElementCustomEventStrict<CInputDatePickerElement['readonly']>;
    'requiredChanged': JetElementCustomEventStrict<CInputDatePickerElement['required']>;
    'requiredMessageDetailChanged': JetElementCustomEventStrict<CInputDatePickerElement['requiredMessageDetail']>;
    'textAlignChanged': JetElementCustomEventStrict<CInputDatePickerElement['textAlign']>;
    'todayButtonChanged': JetElementCustomEventStrict<CInputDatePickerElement['todayButton']>;
    'todayTimeZoneChanged': JetElementCustomEventStrict<CInputDatePickerElement['todayTimeZone']>;
    'userAssistanceDensityChanged': JetElementCustomEventStrict<CInputDatePickerElement['userAssistanceDensity']>;
    'validChanged': JetElementCustomEventStrict<CInputDatePickerElement['valid']>;
    'validatorsChanged': JetElementCustomEventStrict<CInputDatePickerElement['validators']>;
    'valueChanged': JetElementCustomEventStrict<CInputDatePickerElement['value']>;
    'weekDisplayChanged': JetElementCustomEventStrict<CInputDatePickerElement['weekDisplay']>;
}
export interface CInputDatePickerElementSettableProperties extends JetSettableProperties {
    columnSpan?: Props['columnSpan'];
    containerReadonly?: Props['containerReadonly'];
    dateRangeOverflowMessageDetail?: Props['dateRangeOverflowMessageDetail'];
    dateRangeUnderflowMessageDetail?: Props['dateRangeUnderflowMessageDetail'];
    dateRestrictionMessageDetail?: Props['dateRestrictionMessageDetail'];
    dayFormatter?: Props['dayFormatter'];
    daysOutsideMonth?: Props['daysOutsideMonth'];
    disabled?: Props['disabled'];
    displayOptions?: Props['displayOptions'];
    help?: Props['help'];
    helpHints?: Props['helpHints'];
    labelEdge?: Props['labelEdge'];
    labelHint: Props['labelHint'];
    labelStartWidth?: Props['labelStartWidth'];
    labelWrapping?: Props['labelWrapping'];
    max?: Props['max'];
    messagesCustom?: Props['messagesCustom'];
    min?: Props['min'];
    monthAndYearPicker?: Props['monthAndYearPicker'];
    readonly?: Props['readonly'];
    required?: Props['required'];
    requiredMessageDetail?: Props['requiredMessageDetail'];
    textAlign?: Props['textAlign'];
    todayButton?: Props['todayButton'];
    todayTimeZone?: Props['todayTimeZone'];
    userAssistanceDensity?: Props['userAssistanceDensity'];
    validators?: Props['validators'];
    value?: Props['value'];
    weekDisplay?: Props['weekDisplay'];
}
export interface CInputDatePickerElementSettablePropertiesLenient extends Partial<CInputDatePickerElementSettableProperties> {
    [key: string]: any;
}
export interface InputDatePickerIntrinsicProps extends Partial<Readonly<CInputDatePickerElementSettableProperties>>, GlobalProps, Pick<preact.JSX.HTMLAttributes, 'ref' | 'key'> {
    rawValue?: never;
    valid?: never;
    oncolumnSpanChanged?: (value: CInputDatePickerElementEventMap['columnSpanChanged']) => void;
    oncontainerReadonlyChanged?: (value: CInputDatePickerElementEventMap['containerReadonlyChanged']) => void;
    ondateRangeOverflowMessageDetailChanged?: (value: CInputDatePickerElementEventMap['dateRangeOverflowMessageDetailChanged']) => void;
    ondateRangeUnderflowMessageDetailChanged?: (value: CInputDatePickerElementEventMap['dateRangeUnderflowMessageDetailChanged']) => void;
    ondateRestrictionMessageDetailChanged?: (value: CInputDatePickerElementEventMap['dateRestrictionMessageDetailChanged']) => void;
    ondayFormatterChanged?: (value: CInputDatePickerElementEventMap['dayFormatterChanged']) => void;
    ondaysOutsideMonthChanged?: (value: CInputDatePickerElementEventMap['daysOutsideMonthChanged']) => void;
    ondisabledChanged?: (value: CInputDatePickerElementEventMap['disabledChanged']) => void;
    ondisplayOptionsChanged?: (value: CInputDatePickerElementEventMap['displayOptionsChanged']) => void;
    onhelpChanged?: (value: CInputDatePickerElementEventMap['helpChanged']) => void;
    onhelpHintsChanged?: (value: CInputDatePickerElementEventMap['helpHintsChanged']) => void;
    onlabelEdgeChanged?: (value: CInputDatePickerElementEventMap['labelEdgeChanged']) => void;
    onlabelHintChanged?: (value: CInputDatePickerElementEventMap['labelHintChanged']) => void;
    onlabelStartWidthChanged?: (value: CInputDatePickerElementEventMap['labelStartWidthChanged']) => void;
    onlabelWrappingChanged?: (value: CInputDatePickerElementEventMap['labelWrappingChanged']) => void;
    onmaxChanged?: (value: CInputDatePickerElementEventMap['maxChanged']) => void;
    onmessagesCustomChanged?: (value: CInputDatePickerElementEventMap['messagesCustomChanged']) => void;
    onminChanged?: (value: CInputDatePickerElementEventMap['minChanged']) => void;
    onmonthAndYearPickerChanged?: (value: CInputDatePickerElementEventMap['monthAndYearPickerChanged']) => void;
    onrawValueChanged?: (value: CInputDatePickerElementEventMap['rawValueChanged']) => void;
    onreadonlyChanged?: (value: CInputDatePickerElementEventMap['readonlyChanged']) => void;
    onrequiredChanged?: (value: CInputDatePickerElementEventMap['requiredChanged']) => void;
    onrequiredMessageDetailChanged?: (value: CInputDatePickerElementEventMap['requiredMessageDetailChanged']) => void;
    ontextAlignChanged?: (value: CInputDatePickerElementEventMap['textAlignChanged']) => void;
    ontodayButtonChanged?: (value: CInputDatePickerElementEventMap['todayButtonChanged']) => void;
    ontodayTimeZoneChanged?: (value: CInputDatePickerElementEventMap['todayTimeZoneChanged']) => void;
    onuserAssistanceDensityChanged?: (value: CInputDatePickerElementEventMap['userAssistanceDensityChanged']) => void;
    onvalidChanged?: (value: CInputDatePickerElementEventMap['validChanged']) => void;
    onvalidatorsChanged?: (value: CInputDatePickerElementEventMap['validatorsChanged']) => void;
    onvalueChanged?: (value: CInputDatePickerElementEventMap['valueChanged']) => void;
    onweekDisplayChanged?: (value: CInputDatePickerElementEventMap['weekDisplayChanged']) => void;
}
declare global {
    namespace preact.JSX {
        interface IntrinsicElements {
            'oj-c-input-date-picker': InputDatePickerIntrinsicProps;
        }
    }
}
