const singleVisit = {
  _id: "NdPsmd5JAgo2qjubS",
  createdAt: ISODate("2023-06-22T08:52:41.301+0000"),
  createdBy: "SBHzTmDTyfSiT62D5",
  updatedAt: ISODate("2023-06-22T12:52:36.950+0000"),
  updatedBy: "f8LkBKQMcJrxkZiiG",
  removed: false,
  title: "visit",
  relationship: "buyer",
  project: {
    _id: "cPGeYR2DBiMmsQPCb",
    name: "Gks Plaza Or Gks Appartment (Jayanagar)",
    missing: [],
    location: {
      address:
        "WHVR+F92, 7th Cross Rd, Jaya Nagar 1st Block, Arekempanahalli, Mavalli, Bengaluru, Karnataka 560011",
      landmarkGps: {
        type: "Point",
        coordinates: [NumberInt(0), NumberInt(0)],
      },
      locality: "jayanagar",
      url: "https://www.google.co.in/maps/place/GKS+Plaza+or+GKS+Appartment/@12.9436749,77.5907505,21z/data=!4m12!1m6!3m5!1s0x3bae15b8b2169f3b:0x904492a102556f36!2sGKS+Plaza+or+GKS+Appartment!8m2!3d12.9436358!4d77.5908891!3m4!1s0x3bae15b8b2169f3b:0x904492a102556f36!8m2!3d12.9436358!4d77.5908891?hl=en",
      roads: null,
      roadFacingWidth: NumberInt(30),
      city: "bengaluru",
      pin: NumberInt(560011),
      gps: {
        type: "Point",
        coordinates: [77.5908757115887, 12.943664888503337],
      },
      area: {
        id: "cEjSwFpaCjhZuRid8",
        name: "Area 3 Begur-Jayanagar-JPNagar",
      },
    },
  },
  unit: {
    project: {
      id: "cPGeYR2DBiMmsQPCb",
      name: "Gks Plaza Or Gks Appartment (Jayanagar)",
    },
    location: {
      address:
        "WHVR+F92, 7th Cross Rd, Jaya Nagar 1st Block, Arekempanahalli, Mavalli, Bengaluru, Karnataka 560011",
      landmarkGps: {
        type: "Point",
        coordinates: [NumberInt(0), NumberInt(0)],
      },
      locality: "jayanagar",
      url: "https://www.google.co.in/maps/place/GKS+Plaza+or+GKS+Appartment/@12.9436749,77.5907505,21z/data=!4m12!1m6!3m5!1s0x3bae15b8b2169f3b:0x904492a102556f36!2sGKS+Plaza+or+GKS+Appartment!8m2!3d12.9436358!4d77.5908891!3m4!1s0x3bae15b8b2169f3b:0x904492a102556f36!8m2!3d12.9436358!4d77.5908891?hl=en",
      roads: null,
      roadFacingWidth: NumberInt(30),
      city: "bengaluru",
      pin: NumberInt(560011),
      gps: {
        type: "Point",
        coordinates: [77.5908757115887, 12.943664888503337],
      },
      area: {
        id: "cEjSwFpaCjhZuRid8",
        name: "Area 3 Begur-Jayanagar-JPNagar",
      },
    },
    keyHolder: "m2o4MC6CCJJCDnYZH",
  },
  seller: {
    id: "GtCNbDiDcgkafbaDX",
    name: "Syed  kaleemullah Group",
    members: [
      {
        id: "m2o4MC6CCJJCDnYZH",
        name: "Syed Kaleemullah",
        designation: "owner",
        phones: [
          {
            id: "300",
            number: "+91934xxxxxx87",
            type: "personal",
          },
        ],
      },
    ],
  },
  buyer: {
    id: "bHwuvwsc7j6ynayyi",
    identifier: "16OAG03979",
    name: "Rakesh Kaimal",
    type: "individual",
    members: [
      {
        id: "767PNtCWjAxedKhTF",
        name: "Rakesh Kaimal",
        designation: "decisionMaker",
        phones: [
          {
            id: "YPA",
            number: "+91956xxxxxx48",
            type: "whatsapp",
          },
        ],
      },
    ],
  },
  scheduler: {
    id: "SBHzTmDTyfSiT62D5",
    name: "Meenakshi",
    phones: [
      {
        id: "v2SjY",
        number: "+919606423231",
        type: "personal",
      },
    ],
  },
  process: "visit",
  status: "completed",
  unitId: "EwDhWkiYPRrNEq2QG",
  buyerUnitId: "nvLdtXcKNb7kqrsPa",
  groupId: "bHwuvwsc7j6ynayyi",
  start: ISODate("2023-06-22T11:30:00.000+0000"),
  end: ISODate("2023-06-22T12:30:00.000+0000"),
  rescheduledCount: NumberInt(0),
  failedCount: NumberInt(0),
  kms: NumberInt(9),
  haveExchangedNos: null,
  submittedFrom: {
    type: "Point",
    coordinates: [12.943545, 77.599274],
  },
  _version: NumberInt(4),
  assignedTo: "f8LkBKQMcJrxkZiiG",
  description:
    "Did not like the property because of the small roads around the property ",
  liaison: "partTimer",
  distanceFromUnit: 8010.12,
  failedDueTo: [],
  keyholderDidNotKnowAboutVisit: true,
};

const visitIds = [
  "zbPxEgbkow3pzMrn4",
  "3AdhJgh4GFgcQWixM",
  "y76dGHbz9JPa3p975",
  "yd6vjueyQGp8MG6ea",
  "p237rnphnCjvSr24C",
	"chqYj7MDD4vaCpanh",
	"gCogk6Z3rrj4xwSXC",
	"HaLRKRmFBNQCNr2nG",
	"aSZmHQTyFaKu4uA3a"
];

function addVisits() {
  visitIds.forEach((visit) => {
    const singleVisit = db.visits.findOne({ _id: visit });
    db.visits.updateOne(
      { _id: visit },
      { $set: { status: "confirmed", failedDueTo: [] } }
    );
    db.feedbacks.deleteOne({ "visits.id": visit });

    db.buyerUnits.updateOne(
      { _id: singleVisit.buyerUnitId },
      {
        $set: {
          "processDetails.2.status": "confirmed",
          "processDetails.2.stage": "pending",
        },
        $unset: { "processDetails.3": 1 },
      }
    );
    const feedBackupdated = db.buyerUnits.updateOne(
      { _id: singleVisit.buyerUnitId },
      {
        $pull: { processDetails: null },
      }
    );
    print(feedBackupdated);
  });
}

addVisits();
