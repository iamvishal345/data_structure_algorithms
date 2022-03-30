const directoryRoot = [
  {
    type: "folder",
    name: "root",
    path: "/root",
    children: [
      {
        type: "folder",
        name: "Downloads",
        path: "/downloads",
        children: [
          {
            type: "file",
            name: "movie.mp4",
            path: "/movie",
            children: [],
          },
        ],
      },
      {
        type: "folder",
        name: "Documents",
        path: "/documents",
        children: [
          {
            type: "folder",
            name: "app",
            path: "/app",
            children: [
              {
                type: "file",
                name: "index.html",
                path: "/index.html",
                children: [],
              },
              {
                type: "folder",
                name: "src",
                path: "/src",
                children: [
                  {
                    type: "file",
                    name: "index.js",
                    path: "/index.js",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "folder",
        name: "Pictures",
        path: "/pictures",
        children: [
          {
            type: "file",
            name: "2018-09-12.jpg",
            path: "/2018-09-12.jpg",
            children: [],
          },
          {
            type: "file",
            name: "2020-19-03.jpg",
            path: "/2020-19-03.jpg",
            children: [],
          },
        ],
      },
      {
        type: "folder",
        name: "Music",
        path: "/music",
        children: [
          {
            type: "folder",
            name: "hiphop",
            path: "/hiphop",
            children: [
              {
                type: "file",
                name: "music-hiphop.mp3",
                path: "/music-hiphop.mp3",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "classical",
            path: "/classical",
            children: [
              {
                type: "file",
                name: "music-classical-1.mp3",
                path: "/music-classical-1.mp3",
                children: [],
              },
              {
                type: "file",
                name: "music-classical-2.mp3",
                path: "/music-classical-2.mp3",
                children: [],
              },
              {
                type: "file",
                name: "music-classical-3.mp3",
                path: "/music-classical-3.mp3",
                children: [],
              },
            ],
          },
          {
            type: "folder",
            name: "desi",
            path: "/desi",
            children: [
              {
                type: "file",
                name: "music-desi-1.mp3",
                path: "/music-desi-1.mp3",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
const traverse = (data, indent, obj) => {
  obj.str += "\n " + " ".repeat(indent) + "├──" + data.name;
  if (data.type === "folder") {
    data.children.forEach((child) => {
      traverse(child, indent + 4, obj);
    });
  }
  return obj.str;
};

console.log(traverse(directoryRoot[0], 0, { str: "" }));
