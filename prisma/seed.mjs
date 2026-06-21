import prismaPackage from "@prisma/client";

const {
  BookingStatus,
  HousekeepingStatus,
  InvoiceStatus,
  PaymentMethod,
  PaymentStatus,
  PrismaClient,
  RoomStatus,
  UserRole,
} = prismaPackage;

const prisma = new PrismaClient();

async function main() {
  await prisma.$transaction([
    prisma.auditLog.deleteMany(),
    prisma.serviceCharge.deleteMany(),
    prisma.payment.deleteMany(),
    prisma.invoice.deleteMany(),
    prisma.housekeepingTask.deleteMany(),
    prisma.booking.deleteMany(),
    prisma.guest.deleteMany(),
    prisma.room.deleteMany(),
    prisma.roomType.deleteMany(),
    prisma.service.deleteMany(),
    prisma.setting.deleteMany(),
    prisma.user.deleteMany(),
    prisma.hotel.deleteMany(),
  ]);

  const hotel = await prisma.hotel.create({
    data: {
      name: "StayMaster Demo Hotel",
      slug: "staymaster-demo-hotel",
      legalName: "StayMaster Demo Hotel Ltd",
      email: "hello@staymaster.demo",
      phone: "+2348000000000",
      addressLine1: "1 Hospitality Avenue",
      city: "Lagos",
      state: "Lagos",
      country: "Nigeria",
    },
  });

  const admin = await prisma.user.create({
    data: {
      hotelId: hotel.id,
      email: "admin@staymaster.demo",
      name: "Demo Admin",
      role: UserRole.ADMIN,
      phone: "+2348000000001",
    },
  });

  const housekeeper = await prisma.user.create({
    data: {
      hotelId: hotel.id,
      email: "housekeeping@staymaster.demo",
      name: "Demo Housekeeper",
      role: UserRole.HOUSEKEEPING,
      phone: "+2348000000002",
    },
  });

  const standardType = await prisma.roomType.create({
    data: {
      hotelId: hotel.id,
      name: "Standard Room",
      code: "STD",
      description: "Comfortable room for short stays.",
      capacity: 2,
      baseRate: "45000.00",
    },
  });

  const deluxeType = await prisma.roomType.create({
    data: {
      hotelId: hotel.id,
      name: "Deluxe Room",
      code: "DLX",
      description: "Larger room with a workspace and city view.",
      capacity: 2,
      baseRate: "65000.00",
    },
  });

  const suiteType = await prisma.roomType.create({
    data: {
      hotelId: hotel.id,
      name: "Executive Suite",
      code: "STE",
      description: "Suite with a separate lounge area.",
      capacity: 4,
      baseRate: "120000.00",
    },
  });

  const room101 = await prisma.room.create({
    data: {
      hotelId: hotel.id,
      roomTypeId: standardType.id,
      number: "101",
      floor: "1",
      status: RoomStatus.OCCUPIED,
    },
  });

  const room102 = await prisma.room.create({
    data: {
      hotelId: hotel.id,
      roomTypeId: deluxeType.id,
      number: "102",
      floor: "1",
      status: RoomStatus.RESERVED,
    },
  });

  await prisma.room.createMany({
    data: [
      {
        hotelId: hotel.id,
        roomTypeId: standardType.id,
        number: "201",
        floor: "2",
        status: RoomStatus.AVAILABLE,
      },
      {
        hotelId: hotel.id,
        roomTypeId: suiteType.id,
        number: "301",
        floor: "3",
        status: RoomStatus.CLEANING,
      },
    ],
  });

  const ada = await prisma.guest.create({
    data: {
      hotelId: hotel.id,
      firstName: "Ada",
      lastName: "Okafor",
      email: "ada.okafor@example.com",
      phone: "+2348110000001",
      notes: "Prefers a quiet room.",
    },
  });

  const daniel = await prisma.guest.create({
    data: {
      hotelId: hotel.id,
      firstName: "Daniel",
      lastName: "Mensah",
      email: "daniel.mensah@example.com",
      phone: "+2348110000002",
    },
  });

  const breakfast = await prisma.service.create({
    data: {
      hotelId: hotel.id,
      name: "Breakfast",
      code: "BREAKFAST",
      description: "Daily breakfast service.",
      unitPrice: "7500.00",
    },
  });

  await prisma.service.create({
    data: {
      hotelId: hotel.id,
      name: "Airport Transfer",
      code: "AIRPORT_TRANSFER",
      description: "One-way airport transfer.",
      unitPrice: "30000.00",
    },
  });

  const activeBooking = await prisma.booking.create({
    data: {
      hotelId: hotel.id,
      guestId: ada.id,
      roomId: room101.id,
      createdById: admin.id,
      confirmationCode: "SMP-1001",
      checkInDate: new Date("2026-07-01T14:00:00.000Z"),
      checkOutDate: new Date("2026-07-04T10:00:00.000Z"),
      status: BookingStatus.CHECKED_IN,
      adults: 2,
      children: 0,
      roomRate: "45000.00",
      totalAmount: "135000.00",
    },
  });

  const futureBooking = await prisma.booking.create({
    data: {
      hotelId: hotel.id,
      guestId: daniel.id,
      roomId: room102.id,
      createdById: admin.id,
      confirmationCode: "SMP-1002",
      checkInDate: new Date("2026-07-10T14:00:00.000Z"),
      checkOutDate: new Date("2026-07-12T10:00:00.000Z"),
      status: BookingStatus.CONFIRMED,
      adults: 1,
      children: 0,
      roomRate: "65000.00",
      totalAmount: "130000.00",
    },
  });

  const activeInvoice = await prisma.invoice.create({
    data: {
      hotelId: hotel.id,
      bookingId: activeBooking.id,
      guestId: ada.id,
      invoiceNumber: "INV-1001",
      status: InvoiceStatus.PARTIALLY_PAID,
      subtotal: "150000.00",
      taxAmount: "11250.00",
      discountAmount: "0.00",
      totalAmount: "161250.00",
      dueAt: new Date("2026-07-04T10:00:00.000Z"),
    },
  });

  await prisma.invoice.create({
    data: {
      hotelId: hotel.id,
      bookingId: futureBooking.id,
      guestId: daniel.id,
      invoiceNumber: "INV-1002",
      status: InvoiceStatus.ISSUED,
      subtotal: "130000.00",
      taxAmount: "9750.00",
      discountAmount: "0.00",
      totalAmount: "139750.00",
      dueAt: new Date("2026-07-10T14:00:00.000Z"),
    },
  });

  await prisma.serviceCharge.create({
    data: {
      hotelId: hotel.id,
      serviceId: breakfast.id,
      bookingId: activeBooking.id,
      invoiceId: activeInvoice.id,
      guestId: ada.id,
      quantity: 2,
      unitPrice: "7500.00",
      totalAmount: "15000.00",
      notes: "Breakfast for two guests.",
    },
  });

  await prisma.payment.create({
    data: {
      hotelId: hotel.id,
      bookingId: activeBooking.id,
      invoiceId: activeInvoice.id,
      recordedById: admin.id,
      amount: "80000.00",
      method: PaymentMethod.BANK_TRANSFER,
      status: PaymentStatus.PARTIAL,
      paidAt: new Date("2026-07-01T15:30:00.000Z"),
      reference: "TRF-SMP-1001",
      notes: "Initial deposit.",
    },
  });

  await prisma.housekeepingTask.create({
    data: {
      hotelId: hotel.id,
      roomId: room101.id,
      bookingId: activeBooking.id,
      assignedToId: housekeeper.id,
      title: "Refresh towels",
      description: "Guest requested fresh towels after check-in.",
      status: HousekeepingStatus.PENDING,
      priority: "normal",
      dueAt: new Date("2026-07-02T09:00:00.000Z"),
    },
  });

  await prisma.setting.createMany({
    data: [
      {
        hotelId: hotel.id,
        key: "currency",
        value: "NGN",
        description: "Default billing currency.",
      },
      {
        hotelId: hotel.id,
        key: "checkInTime",
        value: "14:00",
        description: "Default check-in time.",
      },
      {
        hotelId: hotel.id,
        key: "checkOutTime",
        value: "10:00",
        description: "Default check-out time.",
      },
    ],
  });

  await prisma.auditLog.create({
    data: {
      hotelId: hotel.id,
      userId: admin.id,
      action: "seed.create",
      entity: "Hotel",
      entityId: hotel.id,
      metadata: {
        source: "prisma/seed.mjs",
      },
    },
  });

  console.log("Seeded StayMaster Pro demo data.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
