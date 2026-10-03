const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  const result = [];

  for (let i = 0; i < playlists.length; i++) {
    for (let j = 0; j < playlists[i].length; j++) {
      const track = playlists[i][j];

      result.push({
        ...track,
        source: [i, j],
      });
    }
  }

  return result;
}
function scoreTracks(tracks) {
  const result = [];

  for (const track of tracks) {
    result.push({
      ...track,
      score: track.votes * 10 - Math.abs(track.bpm - 120),
    });
  }

  return result;
}
function dedupeTracks(tracks) {
  const result = [];
  const seen = new Set();

  for (const track of tracks) {
    if (!seen.has(track.trackId)) {
      seen.add(track.trackId);
      result.push(track);
    }
  }

  return result;
}
function enforceArtistQuota(tracks, quota) {
  const result = [];
  const artistCount = {};

  for (const track of tracks) {
    const artist = track.artist;

    if (!artistCount[artist]) {
      artistCount[artist] = 0;
    }

    if (artistCount[artist] < quota) {
      artistCount[artist]++;
      result.push(track);
    }
  }

  return result;
}
function buildSchedule(tracks) {
  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    result.push({
      slot: i + 1,
      trackId: tracks[i].trackId,
    });
  }

  return result;
}
function remixPlaylist(playlists, quota) {
  const flattened = flattenPlaylists(playlists);

  const scored = scoreTracks(flattened);

  const deduped = dedupeTracks(scored);

  const limited = enforceArtistQuota(deduped, quota);

  return buildSchedule(limited);
}
