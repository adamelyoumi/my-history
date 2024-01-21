chrome.webNavigation.onCompleted.addListener(function(details) {
    console.log(details)
    if (details.frameId === 0) {
      fetch('http://localhost:8080/api/page-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: details.url,
          timestamp: new Date().toISOString(),
        }),
      })
      .then(response => console.log('API request sent:', response))
      .catch(error => console.error('Error sending API request:', error));
    }
  });
  