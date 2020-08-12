var playlist = {
  'The Cure': "Friday I'm In Love",
  'The National': "Start A War",
  'Bright Eyes': "Waste of Paint"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
