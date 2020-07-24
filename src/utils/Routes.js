import MailIcon from "@material-ui/icons/Mail";
import DecoderStatistics from "../pages/DecoderStatistics";
import CarrierStatistics from "../pages/CarrierStatistics";
import TerminalStatistics from "../pages/TerminalStatistics";
import IPOutputStatistics from "../pages/IPOutputStatistics";
import Settings from "../pages/Settings";
import BuildRoundedIcon from "@material-ui/icons/BuildRounded";

const Routes = [
  {
    path: "/DecoderStatistics",
    sidebarName: "Decoder Statistics",
    navbarName: "Decoder Statistics",
    icon: MailIcon,
    component: DecoderStatistics,
  },
  {
    path: "/CarrierStatistics",
    sidebarName: "Carrier Statistics",
    navbarName: "Carrier Statistics",
    icon: MailIcon,
    component: CarrierStatistics,
  },
  {
    path: "/TerminalStatistics",
    sidebarName: "Terminal Statistics",
    navbarName: "TerminalStatistics",
    icon: MailIcon,
    component: TerminalStatistics,
  },
  {
    path: "/IPOutputStatistics",
    sidebarName: "IP Output Statistics",
    navbarName: "IP Output Statistics",
    icon: MailIcon,
    component: IPOutputStatistics,
  },
  {
    path: "/Settings",
    sidebarName: "Settings",
    navbarName: "Settings",
    icon: BuildRoundedIcon,
    component: Settings,
  },
];

export default Routes;
