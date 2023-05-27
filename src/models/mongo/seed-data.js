export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
      // password: "$2a$10$SMuunxKVn4VO87ZAApi5derwGsBaVZSPB2irh/kZ60nKHO1kCkK7e",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
      // password: "$2a$10$C1FybxLaccpBQMp./V9DZu8WP9MKIOMvgvU.cFgbjNFHAiss4gPeO",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
      // password: "$2a$10$Z5QomkN.CuOj68JhasyZueiZyV0fyCaid5GJemhQ.SFTdlgTi8MKq",
    },
  },
  countys: {
    _model: "County",
    wexford: {
      firstName: "Wexford",
      lastName: "Leinster",    
    },
    waterford: {
      firstName: "Waterford",
      lastName: "Munster",   
    },
  },
  places: {
    _model: "Place",
    one: {
      title: "Duncannon Strand",
      difficulty: "Easy",
      lat: "52.22103",
      lng: "-6.93127",
      donor: "->users.bart",
      county: "->countys.wexford",
    },
    two: {
      title: "Tintern Abbey",
      difficulty: "Medium",
      lat: "52.23752",
      lng: "-6.83977",
      donor: "->users.marge",
      county: "->countys.wexford",
    },
    three: {
      title: "Tramore Strand",
      difficulty: "Easy",
      lat: "52.15969",
      lng: "-7.14430",
      donor: "->users.homer",
      county: "->countys.waterford",
    },
  },
};


/* places: {
    _model: "Place",
    one: {
      amount: 40,
      method: "paypal",
      lat: "52.160858",
      lng: "-7.152420",
      donor: "->users.bart",
      county: "->countys.wexford",
    },
    two: {
      amount: 90,
      method: "direct",
      lat: "52.149220",
      lng: "-6.994620",
      donor: "->users.marge",
      county: "->countys.wexford",
    },
    three: {
      amount: 430,
      method: "paypal",
      lat: "52.161290",
      lng: "-7.231540",
      donor: "->users.homer",
      county: "->countys.waterford",
    },
  },
};
    */