define(["require", "exports", "oj-c/editable-value/UNSAFE_useDeferredValidators/useDeferredValidators", "oj-c/hooks/UNSAFE_useEditableValue/index", "@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"], function (require, exports, useDeferredValidators_1, index_1, UNSAFE_useTranslationBundle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRichRadiosetPreact = useRichRadiosetPreact;
    function useRichRadiosetPreact({ disabled, displayOptions, labelEdge, labelHint, labelStartWidth, layout, messagesCustom, readonly, requiredMessageDetail: propRequiredMessageDetail, required, userAssistanceDensity, value: propValue, onMessagesCustomChanged, onValidChanged, onValueChanged, ...otherProps }, addBusyState) {
        const translations = (0, UNSAFE_useTranslationBundle_1.useTranslationBundle)('@oracle/oraclejet-preact');
        const requiredMessageDetail = propRequiredMessageDetail || translations.radio_requiredMessageDetail();
        const deferredValidators = (0, useDeferredValidators_1.useDeferredValidators)({
            labelHint,
            required,
            requiredMessageDetail
        });
        const { value, methods, textFieldProps } = (0, index_1.useEditableValue)({
            ariaDescribedBy: otherProps['aria-describedby'],
            deferredValidators,
            defaultDisplayValue: null,
            disabled,
            displayOptions,
            messagesCustom,
            readonly,
            value: propValue,
            addBusyState,
            onMessagesCustomChanged,
            onValidChanged,
            onValueChanged
        });
        return {
            methods,
            richRadiosetProps: {
                'aria-describedby': textFieldProps['aria-describedby'],
                isRequired: required,
                isReadonly: readonly,
                isDisabled: disabled,
                label: labelHint,
                labelEdge,
                labelStartWidth,
                layout,
                messages: textFieldProps['messages'],
                onCommit: textFieldProps['onCommit'],
                userAssistanceDensity,
                value
            }
        };
    }
});
