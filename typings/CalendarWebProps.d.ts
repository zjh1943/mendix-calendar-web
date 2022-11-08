/**
 * This file was generated from CalendarWeb.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type DataSourceEnum = "context" | "XPath" | "microflow" | "nanoflow";

export type ViewEnum = "standard" | "custom";

export type DefaultViewEnum = "day" | "week" | "month" | "work_week" | "agenda";

export type CustomViewEnum = "previous" | "today" | "next" | "title" | "month" | "week" | "work_week" | "day" | "agenda";

export type PositionEnum = "left" | "center" | "right";

export type RenderModeEnum = "button" | "link";

export type ButtonStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export interface CustomViewsType {
    customView: CustomViewEnum;
    position: PositionEnum;
    customCaption?: any;
    renderMode: RenderModeEnum;
    buttonToolTip?: any;
    buttonStyle: ButtonStyleEnum;
    headerFormat?: any;
    cellDateFormat?: any;
    gutterTimeFormat?: any;
    gutterDateFormat?: any;
    allDayText?: any;
    textHeaderDate?: any;
    textHeaderTime?: any;
    textHeaderEvent?: any;
}

export type EditableEnum = "default" | "never";

export type OnClickEventEnum = "doNothing" | "callMicroflow" | "callNanoflow";

export type OnCreateEnum = "doNothing" | "callMicroflow" | "callNanoflow";

export type OnChangeEventEnum = "doNothing" | "callMicroflow" | "callNanoflow";

export type WidthUnitEnum = "percentage" | "pixels";

export type HeightUnitEnum = "percentageOfWidth" | "pixels" | "percentageOfParent";

export interface CustomViewsPreviewType {
    customView: CustomViewEnum;
    position: PositionEnum;
    customCaption: any;
    renderMode: RenderModeEnum;
    buttonToolTip: any;
    buttonStyle: ButtonStyleEnum;
    headerFormat: any;
    cellDateFormat: any;
    gutterTimeFormat: any;
    gutterDateFormat: any;
    allDayText: any;
    textHeaderDate: any;
    textHeaderTime: any;
    textHeaderEvent: any;
}

export interface CalendarWebContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dataSource: DataSourceEnum;
    eventEntity: any;
    entityConstraint?: any;
    dataSourceMicroflow?: any;
    dataSourceNanoflow?: any;
    titleAttribute?: EditableValue<string>;
    allDayAttribute?: EditableValue<boolean>;
    startAttribute?: EditableValue<Date>;
    endAttribute?: EditableValue<Date>;
    eventColor?: EditableValue<string>;
    executeOnViewChange: boolean;
    viewStartAttribute?: EditableValue<Date>;
    viewEndAttribute?: EditableValue<Date>;
    view: ViewEnum;
    defaultView: DefaultViewEnum;
    startDateAttribute?: EditableValue<Date>;
    customViews: CustomViewsType[];
    editable: EditableEnum;
    enableCreate: boolean;
    onClickEvent: OnClickEventEnum;
    onClickMicroflow?: any;
    onClickNanoflow?: any;
    onCreate: OnCreateEnum;
    newEventContextPath?: any;
    onCreateMicroflow?: any;
    onCreateNanoflow?: any;
    onChangeEvent: OnChangeEventEnum;
    onChangeMicroflow?: any;
    onChangeNanoflow?: any;
    widthUnit: WidthUnitEnum;
    width: number;
    heightUnit: HeightUnitEnum;
    height: number;
}

export interface CalendarWebPreviewProps {
    class: string;
    style: string;
    dataSource: DataSourceEnum;
    eventEntity: any;
    entityConstraint: any;
    dataSourceMicroflow: any;
    dataSourceNanoflow: any;
    titleAttribute: string;
    allDayAttribute: string;
    startAttribute: string;
    endAttribute: string;
    eventColor: string;
    executeOnViewChange: boolean;
    viewStartAttribute: string;
    viewEndAttribute: string;
    view: ViewEnum;
    defaultView: DefaultViewEnum;
    startDateAttribute: string;
    customViews: CustomViewsPreviewType[];
    editable: EditableEnum;
    enableCreate: boolean;
    onClickEvent: OnClickEventEnum;
    onClickMicroflow: any;
    onClickNanoflow: any;
    onCreate: OnCreateEnum;
    newEventContextPath: any;
    onCreateMicroflow: any;
    onCreateNanoflow: any;
    onChangeEvent: OnChangeEventEnum;
    onChangeMicroflow: any;
    onChangeNanoflow: any;
    widthUnit: WidthUnitEnum;
    width: number | null;
    heightUnit: HeightUnitEnum;
    height: number | null;
}
