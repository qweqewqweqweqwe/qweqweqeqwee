const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http:${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 280000);
const log = message => {
  console.log(`${message}`);
};

const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const swisha1 = new Discord.Client();
const swisha2 = new Discord.Client();
const swisha3 = new Discord.Client();
const swisha4 = new Discord.Client();
const swisha5 = new Discord.Client();
const swisha6 = new Discord.Client();
const swisha7 = new Discord.Client();
const swisha8 = new Discord.Client();
const swisha9 = new Discord.Client();
const swisha10 = new Discord.Client();
const swisha11 = new Discord.Client();
const swisha12 = new Discord.Client();
const swisha13 = new Discord.Client();
const swisha14 = new Discord.Client();
const swisha15 = new Discord.Client();
const swisha16 = new Discord.Client();
const swisha17 = new Discord.Client();
const swisha18 = new Discord.Client();
const swisha19 = new Discord.Client();
const swisha20 = new Discord.Client();
const swisha21 = new Discord.Client();
const swisha22 = new Discord.Client();
const swisha23 = new Discord.Client();
const swisha24 = new Discord.Client();
const swisha25 = new Discord.Client();
const swisha26 = new Discord.Client();
const swisha27 = new Discord.Client();
const swisha28 = new Discord.Client();
const swisha29 = new Discord.Client();
const swisha30 = new Discord.Client();
const swisha31 = new Discord.Client();
const swisha32 = new Discord.Client();
const swisha33 = new Discord.Client();
const swisha34 = new Discord.Client();
const swisha35 = new Discord.Client();
const swisha36 = new Discord.Client();
const swisha37 = new Discord.Client();
const swisha38 = new Discord.Client();
const swisha39 = new Discord.Client();
const swisha40 = new Discord.Client();
const swisha41 = new Discord.Client();
const swisha42 = new Discord.Client();
const swisha43 = new Discord.Client();
const swisha44 = new Discord.Client();
const swisha45 = new Discord.Client();
const swisha46 = new Discord.Client();
const swisha47 = new Discord.Client();
const swisha48 = new Discord.Client();
const swisha49 = new Discord.Client();
const swisha50 = new Discord.Client();
const swisha51 = new Discord.Client();
const swisha52 = new Discord.Client();
const swisha53 = new Discord.Client();
const swisha54 = new Discord.Client();
const swisha55 = new Discord.Client();
const swisha56 = new Discord.Client();
const swisha57 = new Discord.Client();
const swisha58 = new Discord.Client();
const swisha59 = new Discord.Client();
const swisha60 = new Discord.Client();
const swisha61 = new Discord.Client();
const swisha62 = new Discord.Client();
const swisha63 = new Discord.Client();
const swisha64 = new Discord.Client();
const swisha65 = new Discord.Client();
const swisha66 = new Discord.Client();
const swisha67 = new Discord.Client();
const swisha68 = new Discord.Client();
const swisha69 = new Discord.Client();
const swisha70 = new Discord.Client();
const swisha71 = new Discord.Client();
const swisha72 = new Discord.Client();
const swisha73 = new Discord.Client();
const swisha74 = new Discord.Client();
const swisha75 = new Discord.Client();
const swisha76 = new Discord.Client();
const swisha77 = new Discord.Client();
const swisha78 = new Discord.Client();
const swisha79 = new Discord.Client();
const swisha80 = new Discord.Client();


swisha1.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



swisha2.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha3.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha4.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha5.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha6.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha7.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("",   {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha8.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha9.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha10.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha11.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha12.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha13.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha14.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha15.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha16.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha17.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha18.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha19.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha20.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});
swisha21.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



swisha22.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha23.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha24.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha25.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha26.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha27.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("",   {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha28.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha29.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha30.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha31.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha32.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha33.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha34.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha35.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha36.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha37.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha38.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha39.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha40.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});
swisha41.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



swisha42.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha43.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha44.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha45.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha46.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha47.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("",   {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha48.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha49.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha50.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha51.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha52.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha53.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha54.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha55.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha56.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha57.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha58.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha59.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha60.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});
swisha61.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



swisha62.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha63.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha64.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha65.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha66.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});
swisha67.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("",   {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha68.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha69.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha70.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha71.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha72.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("https:www.youtube.comwatch?v=kd8tFn2qb7E", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha73.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha74.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha75.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha76.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha77.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha78.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha79.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

swisha80.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



swisha1.login("");
swisha2.login("");
swisha3.login("");
swisha4.login("");
swisha5.login("");
swisha6.login("");
swisha7.login("");
swisha29.login("");
swisha31.login("");
swisha32.login("");
swisha33.login("");
swisha34.login("");
swisha35.login("");
swisha36.login("");
swisha37.login("");
swisha38.login("");
swisha39.login("");
swisha40.login("");
swisha41.login("");
swisha42.login("");
swisha43.login("");
swisha44.login("");
swisha45.login("TOKEN");
swisha46.login("TOKEN");
swisha47.login("TOKEN");
swisha48.login("TOKEN");
swisha49.login("TOKEN");
swisha50.login("TOKEN");
swisha51.login("TOKEN");
swisha52.login("TOKEN");
swisha53.login("TOKEN");
swisha54.login("TOKEN");
swisha55.login("TOKEN");
swisha56.login("TOKEN");
swisha57.login("TOKEN");
swisha58.login("TOKEN");
swisha59.login("TOKEN");
swisha60.login("TOKEN");
swisha61.login("TOKEN");
swisha62.login("TOKEN");
swisha63.login("TOKEN");
swisha64.login("TOKEN");
swisha65.login("TOKEN");
swisha66.login("TOKEN");
swisha67.login("TOKEN");
swisha68.login("TOKEN");
swisha69.login("TOKEN");
swisha70.login("TOKEN");
swisha71.login("TOKEN");
swisha72.login("TOKEN");
swisha73.login("TOKEN");
swisha74.login("TOKEN");
swisha75.login("TOKEN");
swisha76.login("TOKEN");
swisha77.login("TOKEN");
swisha78.login("TOKEN");
swisha79.login("TOKEN");
swisha80.login("TOKEN");
swisha7.login("")
swisha7.login("");
swisha7.login("");
swisha7.login("");
swisha7.login("");