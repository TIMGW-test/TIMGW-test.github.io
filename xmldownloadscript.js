window.onload = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const freeDownload = urlParams.get('freedownload');
    console.log(freeDownload);

    fetch("freeDownloads.xml").then(response => {
        return response.text();
    }).then(xmlString => {
        const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
        console.log("xmlDocument:", xmlDocument);

        const bibleStudies = xmlDocument.querySelectorAll('freedownload');
        let foundDownload = null;

        bibleStudies.forEach(download => {
            if (download.querySelector('id').textContent === freeDownload) {
                foundDownload = download;
                return;
            }
        });

        if (foundDownload) {
            const id = foundDownload.querySelector("id").textContent;
            const description = foundDownload.querySelector("description").textContent;
            const imageURL = foundDownload.querySelector("image").textContent;
            const title = foundDownload.querySelector("title").textContent;
            const pdfURL = foundDownload.querySelector("pdf").textContent;

            // Update HTML elements with download details
            const downloadTitleElement = document.getElementById("downloadTitle");
            const downloadDescriptionElement = document.getElementById("downloadDescription");
            const downloadImageElement = document.getElementById("downloadImage");
            const downloadDownloadLink = document.getElementById("downloadLink");

            downloadTitleElement.innerText = title;
            downloadDescriptionElement.innerText = description;
            downloadImageElement.src = imageURL;
            downloadDownloadLink.href = pdfURL; 
            
        } else {
            console.log("Download not found");
        }
    });
}
