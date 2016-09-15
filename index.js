var scriptUrls = [
  'https://cdn.rawgit.com/chrissrogers/jquery-deparam/05018fe327c3675250f91f6ead6e83ef90dab1d0/jquery-deparam.min.js',
  chrome.extension.getURL('move-new-tasks-to-end-of-queue.js')
];

scriptUrls.forEach(function(scriptUrl) {
  var script = document.createElement('script');
  script.src = scriptUrl;
  document.head.appendChild(script);
});
