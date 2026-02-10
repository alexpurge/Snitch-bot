import React from 'react';

const createIcon = (displayName, children) => {
  const Icon = React.forwardRef(function Icon(
    { size = 18, color = 'currentColor', strokeWidth = 2, className, ...props },
    ref,
  ) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...props}
      >
        {children}
      </svg>
    );
  });

  Icon.displayName = displayName;
  return Icon;
};

export const UploadCloud = createIcon('UploadCloud', <><path d="M6 18a4 4 0 0 1-.5-8A6 6 0 0 1 17 8a4 4 0 1 1 1 8Z" /><path d="M12 16V10" /><path d="m9.5 12.5 2.5-2.5 2.5 2.5" /></>);
export const Key = createIcon('Key', <><circle cx="7.5" cy="12" r="3.5" /><path d="M11 12h10" /><path d="M18 12v3" /><path d="M15 12v2" /></>);
export const Facebook = createIcon('Facebook', <><rect x="4" y="2" width="16" height="20" rx="3" /><path d="M13 8h2" /><path d="M12 22v-9" /><path d="M10 13h4" /></>);
export const Chrome = createIcon('Chrome', <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 3v6" /><path d="m4.5 8.5 5.2 9" /><path d="m19.5 8.5-5.2 9" /></>);
export const CreditCard = createIcon('CreditCard', <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M6 15h4" /></>);
export const Phone = createIcon('Phone', <path d="M6 3h4l2 5-2.5 2.5a15 15 0 0 0 4 4L16 12l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2" />);
export const User = createIcon('User', <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>);
export const Building2 = createIcon('Building2', <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" /><path d="M10 21v-3h4v3" /></>);
export const MapPin = createIcon('MapPin', <><path d="M12 22s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></>);
export const Info = createIcon('Info', <><circle cx="12" cy="12" r="9" /><path d="M12 10v6" /><path d="M12 7h.01" /></>);
export const Eye = createIcon('Eye', <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /><circle cx="12" cy="12" r="2.5" /></>);
export const DollarSign = createIcon('DollarSign', <><path d="M12 3v18" /><path d="M16 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.3 2.6 4 3 4 1.2 4 3-1.8 3-4 3-4-1.3-4-3" /></>);
export const MousePointer = createIcon('MousePointer', <><path d="m5 3 7 17 2.5-6L21 12 5 3Z" /><path d="m12 20 2-5" /></>);
export const Percent = createIcon('Percent', <><path d="m19 5-14 14" /><circle cx="7" cy="7" r="2" /><circle cx="17" cy="17" r="2" /></>);
export const CheckCircle = createIcon('CheckCircle', <><circle cx="12" cy="12" r="9" /><path d="m8.5 12.5 2.5 2.5 4.5-5" /></>);
export const Globe = createIcon('Globe', <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></>);
export const TrendingDown = createIcon('TrendingDown', <><path d="M21 7h-6" /><path d="m21 7-7 7-4-4-7 7" /></>);
export const Layout = createIcon('Layout', <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M9 10v10" /></>);
export const LayoutDashboard = createIcon('LayoutDashboard', <><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="5" rx="1" /><rect x="13" y="10" width="8" height="11" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /></>);
export const FileText = createIcon('FileText', <><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" /><path d="M14 2v5h5" /><path d="M9 13h6M9 17h6M9 9h3" /></>);
export const Activity = createIcon('Activity', <path d="M3 12h4l2-4 3 8 2-4h7" />);
export const BarChart2 = createIcon('BarChart2', <><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-7" /><path d="M22 20H2" /></>);
export const BriefcaseBusiness = createIcon('BriefcaseBusiness', <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></>);
export const Users = createIcon('Users', <><circle cx="9" cy="9" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M14 20a4.5 4.5 0 0 1 7 0" /></>);
export const ClipboardList = createIcon('ClipboardList', <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5h6" /><path d="M8 10h8M8 14h8M8 18h5" /></>);
export const Rocket = createIcon('Rocket', <><path d="M12 3c3 0 6 3 6 6-4 4-8 8-12 12-3 0-6-3-6-6C4 11 8 7 12 3Z" /><path d="m9 15-2 6 6-2" /><circle cx="13" cy="11" r="1.5" /></>);
export const Ticket = createIcon('Ticket', <path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 0 0-6V6H3Z" />);
export const MessageSquare = createIcon('MessageSquare', <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="m8 18-4 3v-3" /></>);
export const MessageSquareText = createIcon('MessageSquareText', <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="m8 18-4 3v-3" /><path d="M8 9h8M8 13h5" /></>);
export const Settings = createIcon('Settings', <><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0 .1-1l2-1-2-3-2 .5a7 7 0 0 0-1.7-1l-.3-2.2h-4l-.3 2.2a7 7 0 0 0-1.7 1L7 7l-2 3 2 1a7 7 0 0 0 .1 2l-2 1 2 3 2-.5a7 7 0 0 0 1.7 1l.3 2.2h4l.3-2.2a7 7 0 0 0 1.7-1l2 .5 2-3Z" /></>);
export const Shield = createIcon('Shield', <path d="M12 3 5 6v6c0 4.5 2.8 7.5 7 9 4.2-1.5 7-4.5 7-9V6Z" />);
export const Sun = createIcon('Sun', <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" /></>);
export const Moon = createIcon('Moon', <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />);
export const MoreHorizontal = createIcon('MoreHorizontal', <><circle cx="6" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="18" cy="12" r="1.5" /></>);
export const Search = createIcon('Search', <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>);
export const Check = createIcon('Check', <path d="m4 12 5 5 11-11" />);
