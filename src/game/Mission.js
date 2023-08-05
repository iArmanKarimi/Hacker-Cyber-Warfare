export const mission_details = [
  {
    target: "Microsoft Network",
    host: "www.microsoft.com",
    details:
      "you need to hack into microsoft and get a copy of this file: 8320.dat. This file contains vulnerability information on windows.",
  },
  {
    target: "Telstra Communications",
    host: "www.telstra.com.au",
    details:
      "You need to hack into telstra and find and delete this file: acct57065. This will disable the internet and phone account of one of our enemies.",
  },
  {
    target: "Bankwest Australia",
    host: "www.bankwest.com.au",
    details:
      "You need to hack into bankwest and find this file: sct:a121 get a copy of it then delete it. Rest of the files need to be corrupted, so send a virus.",
  },
  {
    target: "ICQ Network",
    host: "www.icq.com",
    details:
      "You need to hack into icq. There has been some information posted which is false. So we need you to get a copy of the password. file: admin.pwl",
  },
  {
    target: "New York Stock Exchange",
    host: "www.nystockexchange.com",
    details:
      "You need to hack into nyse. We are evil bastards so we just felt like crashing the nyse network. Also corrupting files. send a virus to nyse.",
  },
  {
    target: "FBI Department",
    host: "www.fbi.gov.us",
    details:
      "You need to hack into the FBI network. Our friend has a file in their database. You need to find the file and delete it. The file is: file012",
  },
  {
    target: "Tafe WA College",
    host: "www.tafe.wa.edu",
    details:
      "You need to hack into tafe network. A student has been given a low mark. We need you to get a copy of the exam so we can change it. Teachers have been biased in marking so send a virus and corrupt all the files. The file to obtain is: 2.3535",
  },
  {
    target: "CNet Network",
    host: "www.cnet.com",
    details:
      "You need to hack into CNet network. We need you to take the whole network down. Send a virus to them!",
  },
  {
    target: "Trendmicro Antivirus",
    host: "www.trendmicro.com",
    details:
      "You need to hack into trendmicro. Trendmicro has got a copy of one of our worms. We need you to hack into the network and remove ALL traces of our worm source code. The source code file is: vi146",
  },
  {
    target: "World Bank",
    host: "www.worldbank.com",
    details:
      "You need to hack into worldbank. We suspect that 2 people have been stealing money from us. So we need you to hack into network and get a copy of these 2 bank accounts. The accounts are: asct: 78987 and asct: 45673",
  },
  {
    target: "Macintosh Network",
    host: "www.apple.com",
    details:
      "You need to hack into apple network. As you know we hate macintosh. One of our other employees has already hacked into the network. Unfortunately he left a file with some tracable information on it. We need you to delete the file and send a virus to ensure it doesn't trace back to us. The file is: delete_me.doc",
  },
  {
    target: "eBay Network",
    host: "www.ebay.com",
    details:
      "You need to hack into ebay. Someone has hacked into ebay and changed a lot of prices. We are not sure which prices have been changed. Give em a virus in the DATA directory so they will have to add all the prices again.",
  },
];

export const Missions = {
  1: {
    done: false,
  },
  2: {
    objectives: {
      file_to_delete: "acct:57065",
    },
    done: false,
  },
  3: {
    objectives: {
      file_to_delete: "sct:a121",
    },
    done: false,
  },
  4: {
    done: false,
  },
  5: {
    done: false,
  },
  6: {
    objectives: {
      file_to_delete: "file012",
    },
    done: false,
  },
  7: {
    done: false,
  },
  8: {
    done: false,
  },
  9: {
    objectives: {
      file_to_delete: "vi146",
    },
    done: false,
  },
  10: {
    done: false,
  },
  11: {
    objectives: {
      file_to_delete: "delete_me.doc",
    },
    done: false,
  },
  12: {
    done: false,
  },
};
export function onRemove(file_name) {
  // missions that require file removal
  const missions_with_del = [2, 3, 6, 9, 11];
  for (const mission_num of missions_with_del) {
    const mission = Missions[mission_num];
    if (mission.objectives.file_to_delete === file_name) {
      // for some missions there are multiple objectives 
      // hence merely a file removal doesn't finish the mission.
      mission.done = true; 
    }
  }
}
