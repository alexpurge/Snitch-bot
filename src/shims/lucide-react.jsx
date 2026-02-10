import React from 'react';

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
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8" />
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
