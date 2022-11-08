import { Component, createElement, ReactNode } from "react";

import { Calendar, CalendarProps } from "./CalendarWeb";
import { Container } from "./utils/namespaces";
import { validateProps } from "./utils/validation";
import { parseStyle } from "./utils/style";

declare function require(name: string): string;

export class preview extends Component<Container.CalendarContainerProps> {
    render(): ReactNode {
        return createElement(Calendar, this.transformProps(this.props));
    }

    private transformProps(props: Container.CalendarContainerProps): CalendarProps {
        const eventData = [
            {
                title: "Leave",
                allDay: true,
                start: new Date(new Date().setDate(new Date().getDate() - 15)),
                end: new Date(new Date().setDate(new Date().getDate() - 7)),
                guid: "",
                color: ""
            },
            {
                title: "Leave",
                allDay: true,
                start: new Date(new Date().setDate(new Date().getDate() - 9)),
                end: new Date(new Date().setDate(new Date().getDate() - 5)),
                guid: "",
                color: "green"
            },
            {
                title: "BD",
                allDay: true,
                start: new Date(),
                end: new Date(),
                guid: "",
                color: "red"
            },
            {
                title: "Bank Holiday",
                allDay: true,
                start: new Date(new Date().valueOf() + 6000 * 3600 * 24),
                end: new Date(new Date().valueOf() + 9000 * 3600 * 24),
                guid: "",
                color: "grey"
            },
            {
                title: "Bank Holiday",
                allDay: true,
                start: new Date(new Date().valueOf() + 4000 * 3600 * 24),
                end: new Date(new Date().valueOf() + 8000 * 3600 * 24),
                guid: "",
                color: "purple"
            },
            {
                title: "Leave",
                allDay: true,
                start: new Date(new Date().valueOf() + 10000 * 3600 * 24),
                end: new Date(new Date().valueOf() + 14000 * 3600 * 24),
                guid: "",
                color: ""
            }
        ];
        const alertMessage = validateProps(this.props);

        return {
            alertMessage,
            color: props.eventColor,
            customViews: props.customViews,
            defaultView: props.defaultView,
            enableCreate: props.enableCreate,
            events: eventData,
            height: props.height as number,
            heightUnit: props.heightUnit,
            messages: [],
            startPosition: new Date(),
            editable: props.editable,
            style: parseStyle(props.style),
            viewOption: props.view,
            width: props.width as number,
            widthUnit: props.widthUnit
        };
    }
}

export function getPreviewCss(): string {
    return require("./ui/Calendar.scss") + require("react-big-calendar/lib/css/react-big-calendar.css");
}