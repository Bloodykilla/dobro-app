import moment from "moment";
import { TimeRangeItemProps } from "../interfaces/TimeRange";

export const timeCodeOptions: TimeRangeItemProps[] = [
  {
    id: "0",
    from: moment().startOf("month").toDate(),
    to: moment().endOf("month").toDate(),
    label: "Current month",
  },
  {
    id: "1",
    from: moment().subtract(1, "months").startOf("month").toDate(),
    to: moment().subtract(1, "months").endOf("month").toDate(),
    label: "Previous month",
  },
  {
    id: "2",
    from: moment().subtract(3, "months").startOf("month").toDate(),
    to: moment().endOf("month").toDate(),
    label: "Previous 3 months",
  },
  {
    id: "3",
    from: moment().subtract(6, "months").startOf("month").toDate(),
    to: moment().endOf("month").toDate(),
    label: "Previous 6 months",
  },
  {
    id: "4",
    from: moment().subtract(1, "years").startOf("years").toDate(),
    to: moment().subtract(1, "years").endOf("years").toDate(),
    label: "Previous Year",
  },
  { id: "5", from: null, to: null, label: "Whole period" },
];
