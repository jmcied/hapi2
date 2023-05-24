export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },
  candidates: {
    _model: "Candidate",
    wexford: {
      firstName: "Wexford",
      lastName: "Leinster",
    //  office: "President",
    },
    waterford: {
      firstName: "Waterford",
      lastName: "Munster",
    //  office: "President",
    },
  },
  donations: {
    _model: "Donation",
    one: {
      title: "Duncannon Strand",
      difficulty: "Easy",
      lat: "52.160858",
      lng: "-7.152420",
      donor: "->users.bart",
      candidate: "->candidates.wexford",
    },
    two: {
      title: "Tintern Abbey",
      difficulty: "Medium",
      lat: "52.149220",
      lng: "-6.994620",
      donor: "->users.marge",
      candidate: "->candidates.wexford",
    },
    three: {
      title: "Tramore Strand",
      difficulty: "Easy",
      lat: "52.161290",
      lng: "-7.231540",
      donor: "->users.homer",
      candidate: "->candidates.waterford",
    },
  },
};


/* donations: {
    _model: "Donation",
    one: {
      amount: 40,
      method: "paypal",
      lat: "52.160858",
      lng: "-7.152420",
      donor: "->users.bart",
      candidate: "->candidates.wexford",
    },
    two: {
      amount: 90,
      method: "direct",
      lat: "52.149220",
      lng: "-6.994620",
      donor: "->users.marge",
      candidate: "->candidates.wexford",
    },
    three: {
      amount: 430,
      method: "paypal",
      lat: "52.161290",
      lng: "-7.231540",
      donor: "->users.homer",
      candidate: "->candidates.waterford",
    },
  },
};
    */