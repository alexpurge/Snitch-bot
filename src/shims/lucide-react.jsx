import React from 'react';

const renderIcon = (name) => {
  switch (name) {
    case 'UploadCloud':
      return (<><path d="M20 16.5a4.5 4.5 0 0 0-1.2-8.8A6 6 0 1 0 4 15.2"/><path d="M12 12v8"/><path d="m8 16 4-4 4 4"/></>);
    case 'Key':
      return (<><circle cx="7" cy="17" r="3"/><path d="M10 17h11"/><path d="M18 14v6"/></>);
    case 'Facebook':
      return (<><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M14 8h-2a2 2 0 0 0-2 2v2h4"/><path d="M12 12v6"/></>);
    case 'Chrome':
      return (<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3h7"/><path d="m5 7 4 7"/><path d="m15 14 4 7"/></>);
    case 'CreditCard':
      return (<><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/></>);
    case 'Phone':
      return (<><path d="M22 16.9v2a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5.1 2h2a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L7.8 9.7a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z"/></>);
    case 'User':
      return (<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>);
    case 'MapPin':
      return (<><path d="M12 21s-6-5.3-6-11a6 6 0 1 1 12 0c0 5.7-6 11-6 11Z"/><circle cx="12" cy="10" r="2"/></>);
    case 'Info':
      return (<><circle cx="12" cy="12" r="9"/><path d="M12 10v6"/><path d="M12 7h.01"/></>);
    case 'Eye':
      return (<><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.5"/></>);
    case 'DollarSign':
      return (<><path d="M12 3v18"/><path d="M16 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.8 3 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3"/></>);
    case 'MousePointer':
      return (<><path d="m4 3 7 17 2.5-6.5L20 11 4 3Z"/></>);
    case 'Percent':
      return (<><path d="M19 5 5 19"/><circle cx="7" cy="7" r="2"/><circle cx="17" cy="17" r="2"/></>);
    case 'CheckCircle':
      return (<><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-5"/></>);
    case 'TrendingDown':
      return (<><path d="M3 7h18"/><path d="m3 17 6-6 4 4 8-8"/><path d="M17 7h4v4"/></>);
    case 'Layout':
      return (<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 9v12"/></>);
    case 'FileText':
      return (<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h6"/></>);
    case 'Activity':
      return (<><path d="M3 12h4l2-4 4 8 2-4h6"/></>);
    case 'BarChart2':
      return (<><path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20v-3"/></>);
    case 'Users':
      return (<><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2"/><path d="M14 20a5 5 0 0 1 8 0"/></>);
    case 'Rocket':
      return (<><path d="M5 19c2-5 5-8 10-13 3 0 5 2 5 5-5 5-8 8-13 10"/><path d="M6 18 3 21"/><path d="M15 9h.01"/></>);
    case 'Ticket':
      return (<><path d="M3 8a2 2 0 0 0 0 4v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"/><path d="M12 4v14"/></>);
    case 'MessageSquare':
      return (<><path d="M4 5h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></>);
    case 'Settings':
      return (<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.6 1 1 0 0 0-.2-1.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1 1 0 0 0 1.1.2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1 1 0 0 0-.2 1.1 1 1 0 0 0 .9.6H20a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6Z"/></>);
    case 'Sun':
      return (<><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.9 19.1 1.4-1.4"/><path d="m17.7 6.3 1.4-1.4"/></>);
    case 'Moon':
      return (<><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"/></>);
    case 'MoreHorizontal':
      return (<><circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/></>);
    case 'Search':
      return (<><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>);
    case 'Check':
      return (<><path d="m5 12 4 4 10-10"/></>);
    default:
      return (<><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/></>);
  }
};

const createIcon = (displayName) => {
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
        {renderIcon(displayName)}
      </svg>
    );
  });

  Icon.displayName = displayName;
  return Icon;
};

export const UploadCloud = createIcon('UploadCloud');
export const Key = createIcon('Key');
export const Facebook = createIcon('Facebook');
export const Chrome = createIcon('Chrome');
export const CreditCard = createIcon('CreditCard');
export const Phone = createIcon('Phone');
export const User = createIcon('User');
export const MapPin = createIcon('MapPin');
export const Info = createIcon('Info');
export const Eye = createIcon('Eye');
export const DollarSign = createIcon('DollarSign');
export const MousePointer = createIcon('MousePointer');
export const Percent = createIcon('Percent');
export const CheckCircle = createIcon('CheckCircle');
export const TrendingDown = createIcon('TrendingDown');
export const Layout = createIcon('Layout');
export const FileText = createIcon('FileText');
export const Activity = createIcon('Activity');
export const BarChart2 = createIcon('BarChart2');
export const Users = createIcon('Users');
export const Rocket = createIcon('Rocket');
export const Ticket = createIcon('Ticket');
export const MessageSquare = createIcon('MessageSquare');
export const Settings = createIcon('Settings');
export const Sun = createIcon('Sun');
export const Moon = createIcon('Moon');
export const MoreHorizontal = createIcon('MoreHorizontal');
export const Search = createIcon('Search');
export const Check = createIcon('Check');
