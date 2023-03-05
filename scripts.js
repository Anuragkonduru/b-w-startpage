/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input");
const searchButton = document.querySelector("#searchbar > button");

const lookup = { "/": "/", "#new": "" };
const engine = "duckduckgo";
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
};

const isWebUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const getTargetUrl = (value) => {
  if (isWebUrl(value)) return value;
  if (lookup[value]) return lookup[value];
  return engineUrls[engine] + value;
};

const search = () => {
  const value = searchInput.value;
  const targetUrl = getTargetUrl(value);
  window.open(targetUrl, "_self");
};

searchInput.onkeyup = (event) => event.key === "Enter" && search();
searchButton.onclick = search;

/**
 * inject bookmarks into html
 */

const bookmarks = [
  {
    id: "ub08gy6y8NhTWUr1",
    label: "GIT",
    bookmarks: [
      {
        id: "jSvYOn1fKfEwAPb2",
        label: "Linux",
        url: "https://github.com/Shadow-Monarch98/Linux",
      },
      {
        id: "mDV0FLHsGv3Jx6pF",
        label: "Learning",
        url: "https://github.com/Shadow-Monarch98/Learning_Journey001",
      },
      {
        id: "vUYyrHJaIWZQLuar",
        label: "Notes",
        url: "https://github.com/Shadow-Monarch98/Obsidian-Notes",
      },
    ],
  },
  {
    id: "1WUBnscSE3lNZNEV",
    label: "Coding",
    bookmarks: [
      {
        id: "EUxnVD7KMsg5Bzrg",
        label: "Cheatsheet",
        url: "https://overapi.com/",
      },
      {
        id: "J9k6xXbtNDDCiBIg",
        label: "Angular",
        url: "https://angular.io/docs",
      },
      {
        id: "oI48N7qKbbXXhKPV",
        label: "React",
        url: "https://reactjs.org/docs/getting-started.html",
      },
      {
        id: "xZO8fxTpJn54656p",
        label: "CSE",
        url: "https://github.com/ForrestKnight/open-source-cs",
      },
    ],
  },
  {
    id: "XZx4IOGFQjKsAMFe",
    label: "Movies&stuff",
    bookmarks: [
      { id: "s9XO0idQhsntE02q", label: "Anime", url: "https://animepahe.com/" },
      { id: "C1Y9PSNesxZdph0z", label: "YIFY", url: "https://yts.mx/" },
      {
        id: "Q12ZHnEMhoQ1A8wW",
        label: "TamilMv",
        url: "https://www.1tamilmv.men/",
      },
      { id: "aBcdSoTG1E3jrYxb", label: "TV", url: "https://babytorrent.uno/" },
    ],
  },
  {
    id: "VFaLpT4S6PJBuBYo",
    label: "Others",
    bookmarks: [
      {
        id: "fhyIpdqKsn2TDRln",
        label: "Youtube",
        url: "https://www.youtube.com/",
      },
      {
        id: "Gq0VCaMl5ciHY9XG",
        label: "Gmail",
        url: "https://mail.google.com/mail/u/0/#inbox",
      },
      {
        id: "6L69rEZbm4hH9d1P",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/anurag-konduru/",
      },
      {
        id: "BBd8jbl9KA2hBf43",
        label: "Naukri",
        url: "https://www.naukri.com/mnjuser/homepage",
      },
    ],
  },
];

const createGroupContainer = () => {
  const container = document.createElement("div");
  container.className = "bookmark-group";
  return container;
};

const createGroupTitle = (title) => {
  const h2 = document.createElement("h2");
  h2.innerHTML = title;
  return h2;
};

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.innerHTML = label;
  li.append(a);
  return li;
};

const createBookmarkList = (bookmarks) => {
  const ul = document.createElement("ul");
  bookmarks.map(createBookmark).forEach((li) => ul.append(li));
  return ul;
};

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer();
  const title = createGroupTitle(label);
  const bookmarkList = createBookmarkList(bookmarks);
  container.append(title);
  container.append(bookmarkList);
  return container;
};

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks");
  bookmarksContainer.append();
  bookmarks
    .map(createGroup)
    .forEach((group) => bookmarksContainer.append(group));
};

injectBookmarks();
