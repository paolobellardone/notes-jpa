import { ComponentProps } from 'preact';
import { ListView as PreactListView } from '@oracle/oraclejet-preact/UNSAFE_ListView';
import { ListViewProps } from './list-view';
type PreactListViewProps = ComponentProps<typeof PreactListView>;
export declare const useListViewPreact: <K extends string | number, D>({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, data: propData, gridlines, currentItemOverride, onCurrentItemChanged, selectionMode, selected, scrollPolicyOptions, onSelectedChanged, onOjItemAction, onOjFirstSelectedItem, reorderable, onOjReorder, item }: Partial<ListViewProps<K, D>>, addBusyState: (desc?: string) => () => void, isClickthroughDisabled: (target: EventTarget | null) => boolean) => {
    status: "error" | "loading" | "success";
    listViewProps: PreactListViewProps;
};
export {};
