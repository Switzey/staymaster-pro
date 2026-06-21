export type ModulePage = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  placeholder: string;
  highlights: string[];
  nextSteps: string[];
};

export const modulePages = {
  rooms: {
    eyebrow: "Inventory",
    title: "Rooms",
    description: "Manage room inventory, availability, maintenance states, and accommodation types.",
    actionLabel: "Add room",
    placeholder: "This area is ready for room lists, room detail views, rates, status controls, and maintenance notes.",
    highlights: ["Room status foundations are represented in Prisma.", "The layout supports filtered inventory views.", "Room operations can connect cleanly to bookings and housekeeping."],
    nextSteps: ["Room table", "Availability filters", "Room detail drawer"],
  },
  bookings: {
    eyebrow: "Reservations",
    title: "Bookings",
    description: "Track reservations from inquiry through confirmation, stay, cancellation, and no-show states.",
    actionLabel: "New booking",
    placeholder: "This workspace is prepared for booking calendars, reservation tables, guest-room assignments, and confirmation workflows.",
    highlights: ["Booking statuses are modeled for common hospitality flows.", "Routes are ready for protected staff usage.", "The page can grow into calendar and list views without changing the shell."],
    nextSteps: ["Reservation table", "Booking form", "Calendar view"],
  },
  guests: {
    eyebrow: "Guest profiles",
    title: "Guests",
    description: "Maintain guest contact details, stay history, preferences, and service notes.",
    actionLabel: "Add guest",
    placeholder: "This area is set up for guest profiles, stay history, communication notes, and linked bookings.",
    highlights: ["Guest records are separated from bookings.", "The UI can support search-first front desk workflows.", "Future privacy and access controls can be layered onto this route group."],
    nextSteps: ["Guest directory", "Profile pages", "Stay history"],
  },
  checkIn: {
    eyebrow: "Arrivals",
    title: "Check-in",
    description: "Prepare arriving guests, confirm reservations, assign rooms, and complete arrival tasks.",
    actionLabel: "Start check-in",
    placeholder: "This page is ready for arrival queues, identity checks, room readiness, deposits, and key handover steps.",
    highlights: ["Arrival workflow is separated from general bookings.", "The shell works for fast front desk usage.", "Room readiness can connect to housekeeping tasks later."],
    nextSteps: ["Arrivals queue", "Guest verification", "Room assignment"],
  },
  checkOut: {
    eyebrow: "Departures",
    title: "Check-out",
    description: "Handle departing guests, outstanding balances, invoice review, and room release.",
    actionLabel: "Start check-out",
    placeholder: "This page is prepared for departure queues, billing review, feedback capture, and post-stay room status updates.",
    highlights: ["Departure workflow is clearly separated from arrivals.", "Invoices and payments have dedicated modules.", "Room turnover can feed housekeeping in a future build."],
    nextSteps: ["Departures queue", "Balance review", "Room release"],
  },
  payments: {
    eyebrow: "Finance",
    title: "Payments",
    description: "Record and review payment status without adding payment gateway integration yet.",
    actionLabel: "Record payment",
    placeholder: "This module is prepared for manual payment records, balances, refunds, and reconciliation views.",
    highlights: ["No payment gateway has been added.", "Payment status exists in the Prisma foundation.", "The module is ready for accounting permission boundaries."],
    nextSteps: ["Payment ledger", "Manual entries", "Refund tracking"],
  },
  invoices: {
    eyebrow: "Billing",
    title: "Invoices",
    description: "Prepare invoice review, folio totals, taxes, guest billing, and downloadable records.",
    actionLabel: "Create invoice",
    placeholder: "This page is ready for invoice lists, invoice details, tax summaries, and export workflows.",
    highlights: ["Invoices are linked one-to-one with bookings in the base schema.", "Payment status is shared with the finance foundation.", "The page can later support PDF generation and audit trails."],
    nextSteps: ["Invoice list", "Invoice detail", "Export actions"],
  },
  housekeeping: {
    eyebrow: "Operations",
    title: "Housekeeping",
    description: "Coordinate room cleaning, inspections, maintenance notes, and staff assignments.",
    actionLabel: "Create task",
    placeholder: "This workspace is prepared for task queues, room readiness, priority levels, and staff assignment.",
    highlights: ["Housekeeping tasks connect to rooms and staff profiles.", "The layout supports operational queue views.", "Task states can be refined without changing the navigation model."],
    nextSteps: ["Task board", "Room readiness", "Staff assignment"],
  },
  reports: {
    eyebrow: "Insights",
    title: "Reports",
    description: "Prepare management reports for occupancy, revenue, bookings, payments, and operations.",
    actionLabel: "Build report",
    placeholder: "This area is ready for analytics cards, report filters, exports, and role-aware management visibility.",
    highlights: ["Dashboard and report concerns are kept separate.", "The app shell supports wider analytical layouts.", "Future charts can reuse the existing page header and card patterns."],
    nextSteps: ["Occupancy reports", "Revenue summaries", "Operational exports"],
  },
  staff: {
    eyebrow: "Team",
    title: "Staff",
    description: "Manage staff profiles, roles, departments, contact details, and operational assignments.",
    actionLabel: "Add staff",
    placeholder: "This page is ready for team directories, staff profiles, role labels, and department-based workflows.",
    highlights: ["User and staff profile records are separated.", "Roles are represented for future access control.", "Staff profiles connect to housekeeping assignments."],
    nextSteps: ["Team directory", "Role management", "Shift planning"],
  },
  settings: {
    eyebrow: "Administration",
    title: "Settings",
    description: "Prepare property configuration, account preferences, roles, and system defaults.",
    actionLabel: "Update settings",
    placeholder: "This module is prepared for property details, room categories, user preferences, and operational defaults.",
    highlights: ["Settings are isolated from daily workflows.", "The route is ready for manager-only protection.", "Configuration can expand as business rules are introduced."],
    nextSteps: ["Property profile", "User preferences", "System defaults"],
  },
} satisfies Record<string, ModulePage>;
